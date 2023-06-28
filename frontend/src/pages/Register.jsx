import styled, { keyframes } from 'styled-components';
import { Button } from '../components/Button';
import { useState } from 'react';
import { fadeIn, slideInDown, bounce } from 'react-animations';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = () => {
    console.log({ nombre, apellido, usuario, correo, contraseña });
  };

  return (
    <Container>
      <div className="mainbox">
        <form onSubmit={handleSubmit}>
          <div className="formbox">
            <div className="animated-form-element">
              <p>Nombre:</p>
              <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Ingrese su nombre" />
            </div>
            <div className="animated-form-element">
              <p>Apellido</p>
              <input value={apellido} onChange={e => setApellido(e.target.value)} placeholder="Ingresa su apellido" />
            </div>
            <div className="animated-form-element">
              <p>Usuario:</p>
              <input value={usuario} onChange={e => setUsuario(e.target.value)} placeholder="Ingresa su usuario" />
            </div>
          </div>
          <div className="formbox">
            <div className="animated-form-element">
              <p>Correo:</p>
              <input value={correo} onChange={e => setCorreo(e.target.value)} placeholder="Ingrese su correo" />
            </div>
            <div className="animated-form-element">
              <p>Contraseña</p>
              <input type="password" value={contraseña} onChange={e => setContraseña(e.target.value)} placeholder="Ingrese su contraseña" />
            </div>
            <Button title="Crear Cuenta" width="100%" />
            <Button title="Volver" width="100%" type="button" onClick={() => console.log('Volver')} />
          </div>
        </form>
      </div>
    </Container>
  );
};

const fadeInAnimation = keyframes`${fadeIn}`;
const slideInDownAnimation = keyframes`${slideInDown}`;
const bounceAnimation = keyframes`${bounce}`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .mainbox {
    background-color: #ffa500;
    padding: 1.8rem;
    border-radius: 12px;
    animation: ${fadeInAnimation} 0.5s;

    form {
      border-radius: 12px;
      color: #000;
      padding: 2rem;
      background-color: #a9a9a7;
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      flex-direction: row;
      justify-content: center;
      animation: ${slideInDownAnimation} 0.5s;

      input {
        border: none;
        height: 40px;
        width: 300px;
        border-radius: 12px;
        padding-left: 10px;
        background-color: #eff0f6;

        @media (max-width: 500px) {
          width: 100%;
        }
      }

      .animated-form-element {
        animation: ${bounceAnimation} 0.5s;
      }

      button {
        margin-top: 30px;
      }

      @media (max-width: 500px) {
        width: 80%;
        .formbox {
          width: 100%;
        }
      }
    }
  }
`;

export default Register;