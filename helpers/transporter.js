const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Puedes cambiarlo según tu proveedor de correo
  auth: {
    user: 'herobarf2020@gmail.com', // Tu dirección de correo electrónico
    pass: 'odvw czfv bbto fnku' // Tu contraseña (o una contraseña de aplicación si utilizas Gmail)
  }
});

module.exports = transporter;