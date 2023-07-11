import styled from 'styled-components'
import { Button } from '../components/Button'
import { useState } from 'react'
import MasterCard from '../assets/mastercad.png'
import Visa from '../assets/visa.png'
import NotaAdesiva from '../assets/notaadesiva.png'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const Pagar = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [usuario, setUsuario] = useState("")
  const navigate = useNavigate();

  const onChangeState = () => {
    if(nombre && apellido && usuario){
      window.localStorage.removeItem('user')
      window.localStorage.setItem('user', JSON.stringify({...user, ispay: true}));

      navigate("/registerdic", { replace: true });
    }else {
      Swal.fire({
        icon: 'warning',
        title: 'Aviso',
        text: 'Completa el formulario con tus datos',
      })
    }
  }

  return ( 
    <Container>
      <div className='mainbox'>
        <form >
          <div className='formbox'>
            <div>
              <p>Numero de tarjeta *</p>
              <input value={nombre}  type='number' onChange={(e) => setNombre(e.target.value)} placeholder='Ingrese N° de tarjeta' required/>
            </div>
            <div>
              <p>Fecha de Caducidad *</p>
              <input value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder='MM/AA' required/>
            </div>
            <div>
              <p>Codigo de Verificacion * </p>
              <input value={usuario}  type='number'  onChange={(e) => setUsuario(e.target.value)} placeholder='CVC' required/>
            </div>
          </div>
          <div className='tarjetas'>
            <div>
              <span>Mastercard</span>
              <img src={MasterCard} alt='mastercad' width={130}/>
            </div>
            <div>
              <span>VISA</span>
              <img src={Visa} alt='visa' width={130}/>
            </div>
          </div>
          <div>
            <img src={NotaAdesiva} alt='notaadesiva' width={300}/>
          </div>
        </form>
        <button onClick={() => onChangeState()} className='inscribir' width='200px'>INSCRIBIR</button>       </div>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .mainbox {
    padding: 1.8rem;
    background-color: #fff;
    border-radius: 12px;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
      border-radius: 12px;
      color: #000;
      padding: 2rem;
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      flex-direction: row;
      justify-content: center;

      .tarjetas {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div {
          display: flex;
          flex-direction: column;
          text-align: center;
          gap: 5px;
        }
      }

      input {
        color: #000;
        border: none;
        height: 40px;
        width: 300px;
        border-radius: 12px;
        padding-left: 10px;
        background-color: #EFF0F6;
        @media (max-width: 500px)  {
          width: 100%;
        }
      }

      
      @media (max-width: 500px)  {
        width: 80%;
        .formbox {
          width: 100%;
        }
      }
    }
    .inscribir {
      background-color: #49be25;
      height: 32px;
      color: black;
      border-radius: 8px;
      padding: 5px 30px;
      border: none;
      cursor: pointer;
  
      &:hover {
        background-color: rgb(0, 144, 255, 1);
      }
    }
  }
`

export default Pagar