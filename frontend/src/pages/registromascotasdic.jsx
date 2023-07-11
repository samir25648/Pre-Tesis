import styled from "styled-components"
import SearchBar from "../components/SearchBar"
import MainBg from '../assets/mainbg.png'
import Dog2Box from "../components/DogBox/index2"
import { useState } from "react"
import { useLocation } from 'react-router-dom';


const RegistroMascotasDic = () => {
  const [search, setSearch] = useState("")
  const location = useLocation();
  const perro = location.state;
  console.log(perro)

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
          nombre={perro.nombre}
          tags={['Perro',perro.genero, perro.numero, perro.raza, perro.vacacion ? 'Vacunado': 'No Vacunado', perro.edad + ' años']}
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