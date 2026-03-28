import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  nombre: z.string().min(2),
  email: z.string().email(),
  telefono: z.string().min(8),
  organizacion: z.string().min(2),
  rol: z.string().min(1),
  plan: z.string().min(1),
  usuarios: z.string().optional(),
  mensaje: z.string().min(20),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = contactSchema.parse(body)

    await resend.emails.send({
      from: 'UribaSalud <noreply@uribasoft.com>',
      to: ['gcancellieri@uribasoft.com', 'fjournade@uribasoft.com'],
      replyTo: data.email,
      subject: `[UribaSalud] Nueva consulta — ${data.plan} · ${data.organizacion}`,
      html: `
        <div style="font-family: 'DM Sans', Arial, sans-serif;
                    background: #F9FAFB; padding: 0; margin: 0;">
          <!-- Header -->
          <div style="background: #075B5E; padding: 32px 40px;">
            <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 700;">
              UribaSalud
            </h1>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 14px;">
              Nueva solicitud de contacto
            </p>
          </div>

          <!-- Body -->
          <div style="padding: 40px; background: white; margin: 0 0 0 0;">

            <!-- Plan destacado -->
            <div style="background: #E6F2F2; border-left: 4px solid #075B5E;
                        padding: 16px 20px; border-radius: 8px; margin-bottom: 32px;">
              <p style="margin: 0; color: #075B5E; font-weight: 600; font-size: 15px;">
                Plan solicitado: ${data.plan}
              </p>
            </div>

            <!-- Datos del contacto -->
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #E5E7EB;">
                <td style="padding: 12px 0; color: #6B7280; font-size: 13px;
                           width: 160px; vertical-align: top;">Nombre</td>
                <td style="padding: 12px 0; color: #111827; font-weight: 500;">
                  ${data.nombre}
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #E5E7EB;">
                <td style="padding: 12px 0; color: #6B7280; font-size: 13px;">Email</td>
                <td style="padding: 12px 0;">
                  <a href="mailto:${data.email}"
                     style="color: #075B5E; text-decoration: none;">
                    ${data.email}
                  </a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #E5E7EB;">
                <td style="padding: 12px 0; color: #6B7280; font-size: 13px;">Teléfono</td>
                <td style="padding: 12px 0; color: #111827;">${data.telefono}</td>
              </tr>
              <tr style="border-bottom: 1px solid #E5E7EB;">
                <td style="padding: 12px 0; color: #6B7280; font-size: 13px;">
                  Organización
                </td>
                <td style="padding: 12px 0; color: #111827; font-weight: 500;">
                  ${data.organizacion}
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #E5E7EB;">
                <td style="padding: 12px 0; color: #6B7280; font-size: 13px;">Rol</td>
                <td style="padding: 12px 0; color: #111827;">${data.rol}</td>
              </tr>
              ${data.usuarios ? `
              <tr style="border-bottom: 1px solid #E5E7EB;">
                <td style="padding: 12px 0; color: #6B7280; font-size: 13px;">
                  Usuarios estimados
                </td>
                <td style="padding: 12px 0; color: #111827;">${data.usuarios}</td>
              </tr>
              ` : ''}
            </table>

            <!-- Mensaje -->
            <div style="margin-top: 28px;">
              <p style="color: #6B7280; font-size: 13px; margin-bottom: 10px;">
                Mensaje
              </p>
              <div style="background: #F9FAFB; border: 1px solid #E5E7EB;
                          border-radius: 8px; padding: 20px; color: #111827;
                          font-size: 15px; line-height: 1.6;
                          white-space: pre-wrap;">${data.mensaje}</div>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 24px 40px; background: #F3F4F6;
                      border-top: 1px solid #E5E7EB;">
            <p style="margin: 0; color: #9CA3AF; font-size: 12px;">
              Respondé directo a este mail para contactar a ${data.nombre}
              · UribaSalud © 2026
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: error.issues },
        { status: 400 }
      )
    }
    console.error('Error enviando mail:', error)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
