import { useState } from "react"
import styled from "styled-components"
import { Table } from "react-bootstrap"
import { Button } from "../components/Button"

const data = [
  { id: 1, raza: "Pastos aleman", tamaño: "65cm",genero: "masculino", años: 6, registrado: "Yes", vacunado: "si", precio: "430.20" },
  { id: 2, raza: "Pastos aleman", tamaño: "65cm", genero: "masculino", años: 6, registrado: "Yes", vacunado: "si", precio: "1000" },
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
          <h3>Busqueda de animales en adopcion</h3>
        </div>
        <form onSubmit={handelSubmit}>
          <div>
            <p>Raza: </p>
            <input value={form.raza} onChange={(e) => setForm(y => ({...y, raza: e.target.value}))} placeholder='Raza' />
          </div>
          <div>
            <p>Tamaño: </p>
            <input value={form.tamaño} onChange={(e) => setForm(y => ({...y, tamaño: e.target.value}))} placeholder='Tamaño' />
          </div>
          <div>
            <p>Genero: </p>
            <input value={form.genero} onChange={(e) => setForm(y => ({...y, genero: e.target.value}))}  placeholder='Genero' />
          </div>
          <div>
            <p>años: </p>
            <input value={form.años} onChange={(e) => setForm(y => ({...y, años: e.target.value}))}  type='text' placeholder="años"/>
          </div>
          <div>
            <p>Registrado: </p>
            <input value={form.registrado} onChange={(e) => setForm(y => ({...y, años: e.target.value}))}  placeholder="si o no" />
          </div>
          <div>
            <p>Precio: </p>
            <input value={form.precio} onChange={(e) => setForm(y => ({...y, precio: e.target.value}))}  placeholder="precio" />
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
              <th>Registrados</th>
              <th>Vacunado</th>
              <th>Precio</th>
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
                <th>{perro.registrado}</th>
                <th>{perro.vacunado}</th>
                <th>{perro.precio}</th>
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
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;

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
        margin: 0px;
      }
    }
  }


` 

export default VerMas
