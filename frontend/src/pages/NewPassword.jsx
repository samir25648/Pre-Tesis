import styled from 'styled-components'
import { Button } from '../components/Button'
import { useState } from 'react'

const NewPassword = () => {
  const [contraseña, setContraseña] = useState("")
  const [newcontraseña, setNewContraseña] = useState("")

  return ( 
    <Container>
      <div className='mainbox'>
        <form>
          <div>
            <p>Nueva Contraseña: </p>
            <input value={contraseña} onChange={setContraseña} placeholder='ingrese la nueva contraseña'/>
          </div>
          <div>
            <p>Confirmación de la nueva Contraseña: </p>
            <input value={newcontraseña} onChange={setNewContraseña} placeholder='Confirmacion de la nueva contraseña'/>
          </div>
          <div>
            <Button title='Guardar'/>
          </div>
        </form>
      </div>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .mainbox {
    background-color: #FFA500;
    padding: 1.4rem;
    border-radius: 12px;

    form {
      border-radius: 12px;
      color: #000;
      padding: 2rem;
      background-color: #A9A9A7;
      display: flex;
      flex-direction: column;
      align-items: center;

      input {
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
  }
`

export default NewPassword