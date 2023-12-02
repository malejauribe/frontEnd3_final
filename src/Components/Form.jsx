import React, { useState } from "react";


const Form = ({ onFormSubmit }) => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [nombreError, setNombreError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNombreChange = event => {
    const nuevoNombre = event.target.value;
    setNombre(nuevoNombre);

    if (nuevoNombre.length > 5) {
      setNombreError('');
    } else {
      setNombreError('El nombre debe tener una longitud mayor a 5 caracteres.');
    }
  };

  const handleEmailChange = event => {
    const nuevoEmail = event.target.value;
    setEmail(nuevoEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(nuevoEmail)) {
      setEmailError('');
    } else {
      setEmailError('Ingrese un email válido.');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!nombreError && !emailError) {
      console.log('Nombre:', nombre);
      console.log('Email:', email);
      onFormSubmit({ nombre, email });
    } else {
      console.log('Formulario inválido. Por favor, corrija los errores.');
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
          
            <input
              placeholder="Full name"
              type="text"
              id="nombre"
              value={nombre}
              onChange={handleNombreChange}
            />
            {nombreError && <p className="error">{nombreError}</p>}
          
          
            <input
              placeholder="Email"
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="error">{emailError}</p>}
          
          <button type="submit">Send</button>
        </form>
    </div>
  );
};

export default Form;
