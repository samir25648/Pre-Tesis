import { useState } from "react"
import styled from "styled-components"
import { Table } from "react-bootstrap"
import { Button } from "../components/Button"
import { Link } from "react-router-dom"

const data = [
  { id: 1, raza: "Pastos Alemán", tamaño: "65cm",genero: "masculino", años: 6, vacunado: "si", hogar: "si" },
  { id: 2, raza: "Pastos Alemán", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
]


const RegisterDic = () => {
  const [perros, setPerros] = useState(data)
  const [form, setForm] = useState({})

  const handelSubmit = (e) => {
    e.preventDefault()
  }

  const handleSearch = () => {
  }

  return (
    <Container>
      <div className='nav_box'>
        <div>
          <center><h3>Registrar Perros para su DIC</h3></center>
        </div>
        <form onSubmit={handelSubmit}>
          <div>
            <p>Raza: </p>
            <input value={form.razadic} onChange={(e) => setForm(y => ({...y, razadic: e.target.value}))} type='text' placeholder='Raza del perro' />
          </div>
          <div>
            <p>Tamaño: </p>
            <input value={form.tamañodic} onChange={(e) => setForm(y => ({...y, tamañodic: e.target.value}))} type='number' placeholder='Tamaño del perro' />
          </div>
          <div>
            <p>Nombre: </p>
            <input value={form.nombredic} onChange={(e) => setForm(y => ({...y, nombredic: e.target.value}))} type='text' placeholder='Nombre del perro' />
          </div>
          <div>
            <p>Genero: </p>
            <input value={form.generodic} onChange={(e) => setForm(y => ({...y, generodic: e.target.value}))} type='text' placeholder='Género del perro' />
          </div>
          <div>
            <p>Años: </p>
            <input value={form.añosdic} onChange={(e) => setForm(y => ({...y, añosdic: e.target.value}))}  type='number' placeholder="Años del perro"/>
          </div>
          <div>
            <p>Vacunado: </p>
            <input value={form.vacunadodic} onChange={(e) => setForm(y => ({...y, vacunadodic: e.target.value}))}  type='text' placeholder="Si o no" />
          </div>
          <div>
            <p>Dueño: </p>
            <input value={form.dueñodic} onChange={(e) => setForm(y => ({...y, dueñodic: e.target.value}))}  type='text' placeholder="Telefono del dueño" />
          </div>
          <div>
            <p>Imagen del Perro: </p>
            <input value={form.imagendic} onChange={(e) => setForm(y => ({...y, imagendic: e.target.value}))} type='file' />
          </div>
        </form>
        <Link to='/registromascotasdic' className="button_añadirdic">AÑADIR</Link>
        <Link to='/registromascotas' className="button_verdic">VER DIC</Link>
        <Link to='/' className="button_iniciodic">INICIO</Link>
      </div>
      <div className="tablebox">
        <Table bordered hover className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Raza</th>
              <th>Tamaño</th>
              <th>Nombre</th>
              <th>Genero</th>
              <th>Años</th>
              <th>Vacunado</th>
              <th>Dueño</th>
              <th>Imágen del Perro</th>
            </tr>
          </thead>
          <tbody>
            {perros.map((perro, index) => (
              <tr key={index}>
                <th>{perro.id}</th>
                <th>{perro.razadic}</th>
                <th>{perro.tamañodic}</th>
                <th>{perro.nombredic}</th>
                <th>{perro.generodic}</th>
                <th>{perro.añosdic}</th>
                <th>{perro.vacunadodic}</th>
                <th>{perro.dueñodic}</th>
                <th>{perro.imagendic}</th>
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
  height: 92vh;
  display: flex;
  background-color: #2E4960;
  color: white;

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
