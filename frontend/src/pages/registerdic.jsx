import { useState, useEffect } from "react"
import styled from "styled-components"
import { Table } from "react-bootstrap"
import { Button } from "../components/Button"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';


const RegisterDic = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()
  const [perros, setPerros] = useState([])
  const [form, setForm] = useState({})

  useEffect(() => {
    fetch('http://localhost:3000/dogadoption')
    .then(res => res.json())
    .then(data => {
      setPerros(data.filter(e => e.dueño === user.nombre))
      console.log(data)
    })
  }, [])

  const handelSubmit = (e) => {
    e.preventDefault()
  }

  const handleClick = (perro) => {
    navigate(`${user.ispay ? '/registromascotasdic'  : '/inscripcionesdic'}`, {replace: true, state: perro}, )
  }
  
  const handleSearch = () => {
  }
  
  const nav = () => {
    navigate('/inscripcionesdic', {replace: true} )
  }

  return (
    <Container>
      <div className="tablebox">
        <Table bordered hover className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Raza</th>
              <th>Años</th>
              <th>Vacunado</th>
              <th>Contacto</th>
              <th>Genero</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {perros.map((perro, index) => (
              <tr key={index}>
                <th>{index}</th>
                <th>{perro.nombre}</th>
                <th>{perro.raza}</th>
                <th>{perro.edad}</th>
                <th>{perro.vacunado ? 'si' : 'no'}</th>
                <th>{perro.numero}</th>
                <th>{perro.genero}</th>
                <th className="btn_div">
                  {
                    !user.ispay &&
                    <button onClick={nav} className="button">AÑADIR DIC</button>
                  }
                  <button onClick={() => handleClick(perro)}  className="button">VER DIC</button>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #2E4960;
  color: white;
  .btn_div {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  .button {
    background-color: #49be25;
    height: 32px;
    color: black;
    border-radius: 8px;
    padding: 10px;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: rgb(0, 144, 255, 1);
    }
  }

  .tablebox {
    width: 100%;
    scrollbar-color: #2E4960;
    overflow-y: scroll;

    .table {
        width: 100%;
        border-collapse: collapse;
      }
      
      .table th,
      .table td {
        padding: 10px;
        text-align: center;
        border: 1px solid #ccc;
      }
      
      .table th {
        background-color: #f5f5f5;
        color: #333;
        text-transform: uppercase;
      }
      
      .table td {
        background-color: #fff;
        color: #555;
      }
      
      .table tr:nth-child(even) td {
        background-color: #f9f9f9;
      }
      
      .table tr:hover td {
        background-color: #f2f2f2;
      }
      
      .table thead th:first-child {
        border-top-left-radius: 6px;
      }
      
      .table thead th:last-child {
        border-top-right-radius: 6px;
      }
      
      .table tfoot td {
        font-weight: bold;
        background-color: #f5f5f5;
      }
      
      /* Animaciones */
      .table th,
      .table td {
        transition: background-color 0.3s ease;
      }
      
      .table tr {
        animation: fade-in 0.5s ease;
      }
      
      @keyframes fade-in {
        0% {
          opacity: 0;
          transform: translateY(10px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      /* Estilos adicionales */
      .table th:nth-child(odd) {
        background-color: #e8e8e8;
      }
      
      .table td:nth-child(9) {
        font-weight: bold;
        color: #ff0000;
      }
      
      .table td:first-child {
        text-align: left;
      }
      
      .table td:last-child {
        text-align: right;
      }
  }

  .nav_box {

    display: flex;
    padding: 20px 20px;
    background-color: #F2994A;
    width: 100%;
    max-width: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    form {
      color: black;
      width: 90%;
      display: flex;
      flex-direction: column;
      gap: 2px;

      input {
        color: black;
        width: 100%;
        border: none;
        height: 40px;
        border-radius: 12px;
        padding-left: 20px;
        background-color: #EFF0F6;
      }
      p {
        margin: 0.3px;
      }
    }

    .button_añadirdic {
      background-color: #31FF79;
      height: 32px;
      color: black;
      border-radius: 8px;
      padding: 5px 30px;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: rgb(232, 255, 0 );
      }
    }

    .button_verdic {
      background-color: #FF5035;
      height: 32px;
      color: black;
      border-radius: 8px;
      padding: 5px 30px;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: rgb(124, 78, 255);
      }
    }

    .button_iniciodic {
      background-color: #FF4EC7;
      height: 32px;
      color: black;
      border-radius: 8px;
      padding: 5px 30px;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: rgb(182, 127, 147);
      } 
    }
  }


` 

export default RegisterDic
