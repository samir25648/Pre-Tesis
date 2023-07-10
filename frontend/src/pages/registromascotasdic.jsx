import styled from "styled-components"
import SearchBar from "../components/SearchBar"
import MainBg from '../assets/mainbg.png'
import Dog2Box from "../components/DogBox/index2"
import { useState } from "react"

const RegistroMascotasDic = () => {
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
        <Dog2Box 
          nombre='Kaiser' 
          descripcion={'kaiser es un perro de raza Golden Retriever tiene 3 años Sus ojos son color negros. Siempre lleva su collar con su nombre y su pelaje es eondulado'}
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

export default RegistroMascotasDic