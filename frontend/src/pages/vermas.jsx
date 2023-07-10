import { useState } from "react"
import styled from "styled-components"
import { Table } from "react-bootstrap"
import { Button } from "../components/Button"
import { Link } from "react-router-dom"

const data = [
  { id: 1, raza: "Pastor Alemán", tamaño: "65cm",genero: "masculino", años: 6, vacunado: "si", hogar: "si" },
  { id: 2, raza: "Golden Retrieve", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
  { id: 3, raza: "Pastor Alemán", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
  { id: 4, raza: "Golden Retriever", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
  { id: 5, raza: "Pastor Alemán", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
  { id: 6, raza: "Pastor Alemán", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
  { id: 7, raza: "Pastor Alemán", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
  { id: 8, raza: "Pastor Alemán", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
  { id: 9, raza: "Pastor aleman", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
  { id: 10, raza: "Pastor aleman", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
  { id: 11, raza: "Pastor aleman", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
  { id: 12, raza: "Pastor aleman", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
  { id: 13, raza: "Pastor aleman", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
  { id: 14, raza: "Pastor aleman", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
  { id: 15, raza: "Pastor aleman", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
  { id: 16, raza: "Pastor aleman", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
  { id: 17, raza: "Pastor aleman", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
  { id: 18, raza: "Pastor aleman", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
  { id: 19, raza: "Pastor aleman", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
  { id: 20, raza: "Pastor aleman", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
  { id: 21, raza: "Pastor aleman", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
  { id: 22, raza: "Pastor aleman", tamaño: "65cm", genero: "masculino", años: 6, vacunado: "si", hogar: "no" },
]


const VerMas = () => {
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
          <center><h3>Busqueda de animales en adopcion</h3></center>
        </div>
        <form onSubmit={handelSubmit}>
          <div>
            <p>Raza: </p>
            <input value={form.raza} onChange={(e) => setForm(y => ({...y, raza: e.target.value}))} type='text' placeholder='Raza del perro' />
          </div>
          <div>
            <p>Tamaño: </p>
            <input value={form.tamaño} onChange={(e) => setForm(y => ({...y, tamaño: e.target.value}))} type='number' placeholder='Tamaño del perro' />
          </div>
          <div>
            <p>Genero: </p>
            <input value={form.genero} onChange={(e) => setForm(y => ({...y, genero: e.target.value}))} type='text' placeholder='Género del perro' />
          </div>
          <div>
            <p>años: </p>
            <input value={form.años} onChange={(e) => setForm(y => ({...y, años: e.target.value}))}  type='number' placeholder="Años del perro"/>
          </div>
          <div>
            <p>Vacunado: </p>
            <input value={form.vacunado} onChange={(e) => setForm(y => ({...y, vacunado: e.target.value}))}  type='text' placeholder="Si o no" />
          </div>
          <div>
            <p>Hogar: </p>
            <input value={form.hogar} onChange={(e) => setForm(y => ({...y, hogar: e.target.value}))}  type='text' placeholder="Si o no" />
          </div>
        </form>
        <div>
          <Button title='buscar' onClick={handleSearch}/>
        </div>
      </div>
      <div className="tablebox">
        <Table bordered hover className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Raza</th>
              <th>Tamaño</th>
              <th>Genero</th>
              <th>Años</th>
              <th>Vacunado</th>
              <th>Hogar</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {perros.map((perro, index) => (
              <tr key={index}>
                <th>{perro.id}</th>
                <th>{perro.raza}</th>
                <th>{perro.tamaño}</th>
                <th>{perro.genero}</th>
                <th>{perro.años}</th>
                <th>{perro.vacunado}</th>
                <th>{perro.hogar}</th>
                <th>
                  <Link to='/perroadoptado' className='button_adoptar'>Adoptar</Link>
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
      font-family: Arial, sans-serif;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    
    .table th,
    .table td {
      padding: 12px;
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
    
    @media screen and (max-width: 768px) {
      .table {
        font-size: 14px;
      }
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
    max-width: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;

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
        margin: 0.9px;
      }
    }
  }


` 

export default VerMas
