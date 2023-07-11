import styled from "styled-components"
import SearchBar from "../components/SearchBar"
import MainBg from '../assets/mainbg.png'
import DogBox from "../components/DogBox/index"
import { useState } from "react"
import { useLocation } from 'react-router-dom';

const RegistroMascotas = () => {
  const [search, setSearch] = useState("")
  const location = useLocation();
  const perros = location.state;
  console.log(perros)


  return (
    <Container>
      <div className="mainbox">
        <div className="searchbar">
          <SearchBar
            value={search}
            onChange={setSearch}
          />
        </div>
        <DogBox 
          perro={perros}
          nombre={perros.nombre}
          descripcion={`es un perro de raza Golden Retriever tiene 3 años Sus ojos son color negros. Siempre lleva su collar con su nombre y su pelaje es eondulado`}
          tags={['Perro',perros.genero, perros.numero, perros.raza, perros.vacacion ? 'Vacunado': 'No Vacunado', perros.edad + ' años']}
        />
      </div>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  .mainbox {
    width: 70%;
    .searchbar {
      max-width: 600px;
    }
  }

`

export default RegistroMascotas