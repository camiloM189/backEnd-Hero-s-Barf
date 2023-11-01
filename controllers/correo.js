const {response} = require('express');
const express = require('express');
const transporter = require('../helpers/transporter');




const ObtenerCorreo = async(req, res = response) => {
      try {
        const { Nombre,Comentario,Email,Telefono} = req.body;
        const comentario = `Nombre:${Nombre}\nEmail:${Email}\n${Comentario}\nTelefono:${Telefono} `
        

         const mailOptions = {
         from: Email,
         to: 'herobarf2020@gmail.com',
         subject:`Mensaje para Hero Barf mensaje de ${Email}`,
         text:`Comentario: ${comentario}`,
         
         }
     
 
         
          await transporter.sendMail(mailOptions);
          res.status(200).json({ message: 'Correo enviado con éxito' });
       } catch (error) {
         console.error(error);
         res.status(500).json({ message: 'Error al enviar el correo' });
       }

        

}
module.exports = {ObtenerCorreo}