import styled from 'styled-components';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        body: JSON.stringify({ usuario, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Error al iniciar sesión. Código de estado: ' + response.status);
      }

      const data = await response.json();

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify({...data.user, ispay: false}));

      navigate("/", { replace: true }); // Redirigir al usuario a '/'
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <Container>
      <div className='mainbox'>
        <form onSubmit={handleSubmit}>
          <div>
            <p>Usuario:</p>
            <input
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder='Ingrese tu usuario'
              style={{ color: usuario ? 'black' : '' }}
            />
          </div>
          <div>
            <p>Password:</p>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Ingrese contraseña'
              style={{ color: password ? 'black' : '' }}
            />
          </div>
          <div>
            <Button type='submit' title='Login' />
          </div>
          {error && <p>{error}</p>}
        </form>
        <div className='subbox'>
          <h3>Bienvenido</h3>
          <div>
            <Link to='/newpassword'>¿Olvidaste tu contraseña?</Link>
            <p>
              ¿No tienes una cuenta?{' '}
              <Link to='/registrar'>Regístrate ahora</Link>
            </p>
            <Link to='/'>Volver</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  .mainbox {
    padding: 2rem;
    background-color: #ffa500;
    border-radius: 12px;
    display: flex;
    flex-wrap: wrap-reverse;
    gap: 50px;

    form {
      border-radius: 12px;
      padding: 1rem;
      background-color: #a9a9a7;
      display: flex;
      flex-direction: column;
      align-items: center;

      div > input {
        border: none;
        height: 40px;
        width: 300px;
        border-radius: 12px;
        padding-left: 10px;
        background-color: #eff0f6;
      }

      div > button {
        margin-top: 30px;
      }
    }

    @media (max-width: 800px) {
      form {
        width: 100%;
      }
    }
  }

  .subbox {
    text-align: center;
    color: #000;

    h3 {
      font-size: 2em;
    }

    @media (max-width: 800px) {
      width: 100%;
    }
  }
};
`

export default Login;
