import { useEffect, useState } from "react"
import styled from "styled-components"
import { Table } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"

const AddPerroAdopcion = () => {
  const [form, setForm] = useState({})
  const token = localStorage.getItem("token") 
  const navigate = useNavigate();

  const handleSearch = () => {

  }

  const handleRegister = async () => {

    fetch('http://localhost:3000/dogadoption',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({...form, vacacion: true, adoptado: false, dueño: ''})
    })
    .then(res => res.json())
    .then(data => {
      navigate("/vermas", { replace: true }); // Redirigir al usuario a '/'
      console.log(data)
    })
  }

  return (
    <Container>
      <div className='nav_box'>
        <div>
          <center><h3>Registrar Perro en Adopción</h3></center>
        </div>
        <form >
          <div>
            <p>Nombre: </p>
            <input value={form.nombre} onChange={(e) => setForm(y => ({...y, nombre: e.target.value}))} type='text' placeholder='Nombre del Perro' />
          </div>
          <div>
            <p>Raza: </p>
            <input value={form.raza} onChange={(e) => setForm(y => ({...y, raza: e.target.value}))} type='text' placeholder='Raza del Perro' />
          </div>
          <div>
            <p>Años: </p>
            <input value={form.edad} onChange={(e) => setForm(y => ({...y, edad: e.target.value}))} type='number' placeholder='Años del Perro' />
          </div>
          <div>
            <p>¿Vacunado?: </p>
            <input value={form.vacacion} onChange={(e) => setForm(y => ({...y, vacacion: e.target.value}))} type='text' placeholder='Si o no' />
          </div>
          <div>
            <p>Contacto: </p>
            <input value={form.numero} onChange={(e) => setForm(y => ({...y, numero: e.target.value}))}  type='number' placeholder="Teléfono del Dueño"/>
          </div>
          <div>
            <p>Género: </p>
            <input value={form.genero} onChange={(e) => setForm(y => ({...y, genero: e.target.value}))}  type='text' placeholder="Macho o Hembra" />
          </div>
          <div>
            <p>Imagen del Perro: </p>
            <input onChange={(e) => setForm(y => ({...y, image: e.target.files[0]}))} type='file' />
          </div>
        </form>
        <button className="button_registrar" onClick={handleRegister}>REGISTRAR</button>
        <Link to='/inscripcionesdic' className="button_inscripcionesdic">INSCRIPCION DIC</Link>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #2E4960;
  justify-content: center;
  margin-top: 30px;
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
