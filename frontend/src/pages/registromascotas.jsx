import styled from "styled-components"
import SearchBar from "../components/SearchBar"
import MainBg from '../assets/mainbg.png'
import DogBox from "../components/DogBox"
import { useState } from "react"

const RegistroMascotas = () => {
  const [search, setSearch] = useState("")

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
          nombre='Kaiser' 
          descripcion={'kaise es un eprro de raza Golden Retriever tiene 3 años Sus ojos son color negros. Siempre lleva su collar con su nombre y su pelaje es eondulado'}
          tags={['Perro', 'Macho', '941387498', 'Golden Retriever', 'Vacunado', '3 años']}
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