import styled from 'styled-components'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  const [usuario, setUsuario] = useState("")
  const [contraseña, setContraseña] = useState("")

  return (
    <Container>
      <div className='mainbox'>
        <form>
          <div>
            <p>Usuario: </p>
            <input value={usuario} onChange={setUsuario} placeholder='ingrese tu usuario'/>
          </div>
          <div>
            <p>Contraseña: </p>
            <input value={contraseña} onChange={setContraseña} placeholder='ingrese contraseña'/>
          </div>
          <div>
            <Button title='Login'/>
          </div>
        </form>
        <div className='subbox'>
          <h3>Bienvenido</h3>
          <div>
            <Link to='/newpassword'>¿Te olvidaste tu contraseña?</Link>
            <p>
              ¿No tienes cuenta {' '}
              <Link>Registrate ahora</Link>
            </p>
            <Link to='/'>volver</Link>
          </div>
        </div>
      </div>
    </Container>
  )
}
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  .mainbox {
    padding: 2rem;
    background-color: #FFA500;
    border-radius: 12px;
    display: flex;
    flex-wrap: wrap-reverse;
    gap: 50px;
    form {
      border-radius: 12px;
      padding: 1rem;
      background-color: #A9A9A7;
      display: flex;
      flex-direction: column;
      align-items: center;

      div > input {
        border: none;
        height: 40px;
        width: 300px;
        border-radius: 12px;
        padding-left: 10px;
        background-color: #EFF0F6;

      }
      div > button {
        margin-top: 30px;
      }
    }
    @media (max-width: 800px)  {
      form {
        width: 100%
      }
    }
  }

  .subbox {
    text-align: center;
    color: #000;
    h3 {
      font-size: 2em;
    }
    @media (max-width: 800px)  {
      width: 100%
    }
  }
`

export default Login