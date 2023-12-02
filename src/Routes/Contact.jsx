import React, { useState } from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const [datosFormulario, setDatosFormulario] = useState({});

  const handleFormSubmit = datos => {
    setFormularioEnviado(true);
    setDatosFormulario(datos);
  };

  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form onFormSubmit={handleFormSubmit}/>
      {formularioEnviado ? (
        <p>Gracias {datosFormulario.nombre} por contactarnos, te enviaremos un email.</p>
      ) : null}
    </div>
  )
}

export default Contact