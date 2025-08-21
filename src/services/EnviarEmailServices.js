const { transporter } = require("../schemas/Authgoogle.js");
require('dotenv').config();
exports.EnviarEmail = async (email, token) => {
    try {
        console.log("📨 Enviando email de verificación...");
        
        const mailOptions = {
    from: {
        name: 'Sistema Académico - Universidad Autónoma',
        address:process.env.email_usuario 
    },
    to: email,
    subject: "🎓 ¡Bienvenido al Sistema Académico! - Complete su registro",
    text: `¡Bienvenido al Sistema de Gestión Académica!
    
Para completar su registro como docente, por favor haga clic en el siguiente enlace:
${process.env.RUTA_CONECCION_EXTERNA}/registro-docente/${token}

Si no puede hacer clic en el enlace, copie y pegue la URL completa en su navegador.

Este enlace es válido por 24 horas.

Saludos cordiales,
Equipo de Administración Académica`,
    html: `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bienvenido al Sistema Académico</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                background-color: #f8fafc;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #374151;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }
            .header {
                background: linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%);
                padding: 0;
                text-align: center;
                position: relative;
                height: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .header-content {
                color: white;
                z-index: 2;
                text-align: center;
            }
            .welcome-icon {
                width: 80px;
                height: 80px;
                background-color: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 15px;
                backdrop-filter: blur(10px);
            }
            .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: 700;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            }
            .header p {
                margin: 5px 0 0;
                font-size: 16px;
                opacity: 0.9;
            }
            .decorative-pattern {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: 0.1;
                background-image: 
                    radial-gradient(circle at 20% 30%, white 2px, transparent 2px),
                    radial-gradient(circle at 80% 70%, white 2px, transparent 2px),
                    radial-gradient(circle at 60% 20%, white 3px, transparent 3px);
                background-size: 50px 50px, 60px 60px, 40px 40px;
            }
            .content {
                padding: 40px 30px;
            }
            .greeting {
                font-size: 18px;
                color: #1f2937;
                margin-bottom: 20px;
                font-weight: 600;
            }
            .message {
                font-size: 16px;
                line-height: 1.7;
                margin-bottom: 30px;
                color: #4b5563;
            }
            .cta-container {
                text-align: center;
                margin: 35px 0;
            }
            .cta-button {
                display: inline-block;
                background: linear-gradient(135deg, #3b82f6, #6366f1);
                color: white !important;
                text-decoration: none;
                padding: 16px 32px;
                border-radius: 8px;
                font-weight: 600;
                font-size: 16px;
                text-align: center;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
            }
            .cta-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
            }
            .link-text {
                background-color: #f3f4f6;
                padding: 15px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #3b82f6;
                word-break: break-all;
                font-family: 'Courier New', monospace;
                font-size: 14px;
                color: #6b7280;
            }
            .info-box {
                background: linear-gradient(135deg, #fef3c7, #fde68a);
                border: 1px solid #f59e0b;
                border-radius: 8px;
                padding: 20px;
                margin: 25px 0;
            }
            .info-box .icon {
                width: 24px;
                height: 24px;
                background-color: #f59e0b;
                border-radius: 50%;
                display: inline-block;
                margin-right: 10px;
                position: relative;
            }
            .info-box .icon::after {
                content: "⏰";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 14px;
                color: white;
            }
            .footer {
                background-color: #f9fafb;
                padding: 30px;
                text-align: center;
                border-top: 1px solid #e5e7eb;
            }
            .footer-logo {
                margin-bottom: 15px;
                font-size: 20px;
                font-weight: 700;
                color: #3b82f6;
            }
            .footer p {
                margin: 5px 0;
                font-size: 14px;
                color: #6b7280;
            }
            .social-links {
                margin-top: 20px;
            }
            .social-links a {
                display: inline-block;
                margin: 0 10px;
                width: 40px;
                height: 40px;
                background-color: #3b82f6;
                border-radius: 50%;
                text-decoration: none;
                color: white;
                line-height: 40px;
                text-align: center;
                transition: all 0.3s ease;
            }
            .social-links a:hover {
                background-color: #2563eb;
                transform: scale(1.1);
            }
            @media (max-width: 600px) {
                .container {
                    margin: 10px;
                    border-radius: 8px;
                }
                .content {
                    padding: 25px 20px;
                }
                .header h1 {
                    font-size: 24px;
                }
                .cta-button {
                    padding: 14px 24px;
                    font-size: 14px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <!-- Header con imagen de bienvenida -->
            <div class="header">
                <div class="decorative-pattern"></div>
                <div class="header-content">
                    <div class="welcome-icon">
                        🎓
                    </div>
                    <h1>¡Bienvenido!</h1>
                    <p>Sistema de Gestión Académica</p>
                </div>
            </div>

            <!-- Contenido principal -->
            <div class="content">
                <div class="greeting">
                    ¡Hola y bienvenido/a a nuestro equipo docente! 👋
                </div>

                <div class="message">
                    Nos complace informarle que ha sido registrado/a exitosamente en nuestro 
                    <strong>Sistema de Gestión Académica</strong>. Para completar el proceso de 
                    activación de su cuenta, necesitamos que complete algunos datos adicionales.
                </div>

                <!-- Botón principal de acción -->
                <div class="cta-container">
                    <a href="${process.env.RUTA_CONECCION_EXTERNA}/registro-docente/${token}" class="cta-button">
                        🚀 Completar Mi Registro
                    </a>
                </div>

                <div class="message">
                    Al hacer clic en el botón anterior, será redirigido/a a un formulario seguro 
                    donde podrá completar su perfil docente e ingresar por primera vez al sistema.
                </div>

                <!-- Información importante -->
                <div class="info-box">
                    <span class="icon"></span>
                    <strong>Importante:</strong> Este enlace es válido por <strong>24 horas</strong> 
                    por motivos de seguridad. Si no completa el registro en este período, 
                    deberá solicitar un nuevo enlace de activación.
                </div>

                <!-- Enlace alternativo -->
                <div class="message">
                    <strong>¿No puede hacer clic en el botón?</strong><br>
                    Copie y pegue el siguiente enlace en su navegador:
                </div>
                <div class="link-text">
                    ${process.env.RUTA_CONECCION_EXTERNA}/registro-docente/${token}
                </div>

                <div class="message">
                    Una vez completado el registro, podrá acceder a todas las funcionalidades 
                    del sistema académico, incluyendo:
                    <ul style="margin: 15px 0; padding-left: 20px;">
                        <li>📚 Gestión de cursos y asignaturas</li>
                        <li>👥 Administración de estudiantes</li>
                        <li>📊 Reportes académicos</li>
                        <li>📅 Calendario institucional</li>
                        <li>💬 Sistema de comunicaciones</li>
                    </ul>
                </div>
            </div>

            <!-- Footer -->
            <div class="footer">
                <div class="footer-logo">🎓 Universidad Autónoma</div>
                <p><strong>Departamento de Sistemas Académicos</strong></p>
                <p>Email: soporte.academico@uniautonoma.edu.co</p>
                <p>Teléfono: +57 (2) 123-4567</p>
                
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                    <p style="font-size: 12px; color: #9ca3af;">
                        Si no solicitó este registro o cree que recibió este correo por error, 
                        por favor ignore este mensaje o contacte a nuestro equipo de soporte.
                    </p>
                    <p style="font-size: 12px; color: #9ca3af; margin-top: 15px;">
                        © 2024 Universidad Autónoma. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </div>
    </body>
    </html>
    `
};

        const resultado = await transporter.sendMail(mailOptions);
        console.log("✅ Email enviado exitosamente:", resultado.messageId);
        return { success: true, messageId: resultado.messageId };
        
    } catch (error) {
        console.error("❌ Error enviando email:", error.message);
        return { success: false, error: error.message };
    }
};
