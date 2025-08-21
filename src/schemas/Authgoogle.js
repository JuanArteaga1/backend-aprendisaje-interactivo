
const nodemailer = require("nodemailer");

// Mantener la conexión original con credenciales hardcodeadas
exports.transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "juan.arteaga.f@uniautonoma.edu.co",
    pass: "sjtp squm npkz ctng",
  },
});

// Solo verificar si se conecta a Gmail
exports.verifyEmail = async (email, token) => {
  try {
    // Verificar la conexión con Gmail
    await exports.transporter.verify();
    console.log("✅ Conexión a Gmail verificada correctamente");
    return true;
  } catch (error) {
    console.error("❌ Error conectando a Gmail:", error);
    return false;
  }
};