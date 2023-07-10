import { useState } from "react"
import styled from "styled-components"
import { Table } from "react-bootstrap"
import { Button } from "../components/Button"
import { Link } from "react-router-dom"

const data = [
    { id: 1, nombreadopcion: "Boby", razaadopcion: "Chusco", añosadopcion: "7", vacunadoadopcion: "Si", contactoadopcion:"945123724", generoadopcion:"Macho", imagenadopcion:"d"},
    { id: 2, nombreadopcion: "Boby", razaadopcion: "Chusco", añosadopcion: "7", vacunadoadopcion: "Si", contactoadopcion:"945123724", generoadopcion:"Macho", imagenadopcion:"d"},
]


const AddPerroAdopcion = () => {
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
          <center><h3>Registrar Perro en Adopción</h3></center>
        </div>
        <form onSubmit={handelSubmit}>
          <div>
            <p>Nombre: </p>
            <input value={form.nombreadopcion} onChange={(e) => setForm(y => ({...y, nombreadopcion: e.target.value}))} type='text' placeholder='Nombre del Perro' />
          </div>
          <div>
            <p>Raza: </p>
            <input value={form.razaadopcion} onChange={(e) => setForm(y => ({...y, razaadopcion: e.target.value}))} type='text' placeholder='Raza del Perro' />
          </div>
          <div>
            <p>Años: </p>
            <input value={form.añosadopcion} onChange={(e) => setForm(y => ({...y, añosadopcion: e.target.value}))} type='number' placeholder='Años del Perro' />
          </div>
          <div>
            <p>¿Vacunado?: </p>
            <input value={form.vacunadoadopcion} onChange={(e) => setForm(y => ({...y, vacunadoadopcion: e.target.value}))} type='text' placeholder='Si o no' />
          </div>
          <div>
            <p>Contacto: </p>
            <input value={form.contactoadopcion} onChange={(e) => setForm(y => ({...y, contactoadopcion: e.target.value}))}  type='number' placeholder="Teléfono del Dueño"/>
          </div>
          <div>
            <p>Género: </p>
            <input value={form.generoadopcion} onChange={(e) => setForm(y => ({...y, generoadopcion: e.target.value}))}  type='text' placeholder="Macho o Hembra" />
          </div>
          <div>
            <p>Imagen del Perro: </p>
            <input value={form.imagenadopcion} onChange={(e) => setForm(y => ({...y, imagenadopcion: e.target.value}))} type='file' />
          </div>
        </form>
        <Link to='/vermas' className="button_registrar">REGISTRAR</Link>
        <Link to='/inscripcionesdic' className="button_inscripcionesdic">INSCRIPCION DIC</Link>
        <Link to='/' className="button_iniciodic">INICIO</Link>
      </div>
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
              <th>Imágen del Perro</th>
            </tr>
          </thead>
          <tbody>
            {perros.map((perro, index) => (
              <tr key={index}>
                <th>{perro.id}</th>
                <th>{perro.nombreadopcion}</th>
                <th>{perro.razaadopcion}</th>
                <th>{perro.añosadopcion}</th>
                <th>{perro.vacunadoadopcion}</th>
                <th>{perro.contactoadopcion}</th>
                <th>{perro.generoadopcion}</th>
                <th>{perro.imagenadopcion}</th>
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
      
    
    .button_adoptar {
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

    .button_registrar {
      background-color: #006CFF;
      height: 32px;
      color: black;
      border-radius: 8px;
      padding: 5px 30px;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: rgb(255, 247, 0);
      }
    }

    .button_inscripcionesdic {
      background-color: #00FF51;
      height: 32px;
      color: black;
      border-radius: 8px;
      padding: 5px 30px;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: rgb(255, 247, 0);
      }
    }

    .button_iniciodic {
      background-color: #F700FF;
      height: 32px;
      color: black;
      border-radius: 8px;
      padding: 5px 30px;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: rgb(255, 247, 0);
      } 
    }
  }


` 

export default AddPerroAdopcion
