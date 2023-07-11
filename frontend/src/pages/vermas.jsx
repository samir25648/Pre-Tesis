import { useState, useEffect, useMemo } from "react"
import styled from "styled-components"
import { Table } from "react-bootstrap"
import { Button } from "../components/Button"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"


const VerMas = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const [perros, setPerros] = useState([])
  const [form, setForm] = useState({})
  const [razaFiltro, setRazaFiltro] = useState('');
  const [hogarFiltro, setHogarFiltro] = useState('');

  const navigate = useNavigate();


  useEffect(() => {
    fetch('http://localhost:3000/dogadoption')
    .then(res => res.json())
    .then(data => {
      setPerros(data)
      console.log(data)
    })
  }, [])

  const handelSubmit = (e) => {
    e.preventDefault()
    handleSearch()
  }

  const handleSearch = () => {
    const perrosFiltrados = perros.filter((perro) =>
      perro.adoptado === (hogarFiltro === 'si' )
    );
    setPerros(perrosFiltrados);
  }

  const handleNext = (perro) => {
    navigate("/registromascotas", { replace: true, state: perro});
  }

  const handleClearFilter = () => {
    setHogarFiltro('');
    // Restaurar los perros originales sin filtrar
    fetch('http://localhost:3000/dogadoption')
      .then(res => res.json())
      .then(data => {
        setPerros(data);
      });
  };


  return (
    <Container>
      <div className='nav_box'>
        <div>
          <center><h3>Busqueda de animales en adopcion</h3></center>
        </div>
        <form onSubmit={handelSubmit}>
          <div>
            <p>Raza: </p>
            <input value={razaFiltro} onChange={(e) => setRazaFiltro(e.target.value)} type='text' placeholder='Raza del perro' />
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
            <input value={hogarFiltro} onChange={(e) => setHogarFiltro(e.target.value)}  type='text' placeholder="Si o no" />
          </div>
        </form>
        <div>
          <Button title='buscar' onClick={handleSearch}/>
          <Button title='Limpiar filtros' onClick={handleClearFilter}/>
        </div>
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
              <th>Hogar</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {perros.map((perro, index) => (
              <tr key={index}>
                <th>{perro.id}</th>
                <th>{perro.nombre}</th>
                <th>{perro.raza}</th>
                <th>{perro.edad}</th>
                <th>{perro.vacunado ? 'si' : 'no'}</th>
                <th>{perro.numero}</th>
                <th>{perro.genero}</th>
                <th>{perro.adoptado ? 'si': 'no'}</th>
                <th>
                  {
                    !perro.adoptado &&
                    <button className="button_adoptar" onClick={() => handleNext(perro)}>Adoptar</button>
                  }
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
