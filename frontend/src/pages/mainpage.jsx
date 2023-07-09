import { Button } from '../components/Button';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import MainBg from '../assets/mainbg.png';
import Fb from '../assets/facebook.svg';
import Twitter from '../assets/twitter.svg';
import Instagram from '../assets/instagram.svg';
import Logo from '../assets/logo.png';
import { useState } from 'react';
import Map from '../components/Map';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .main_box {
    display: flex;
    background-color: #e49b34;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    max-width: 100%;
    align-items: center;
    color: #2E4960;
    position: relative;

    .box_img {
      z-index: 10;
      position: absolute;
      top: 0;
      bottom: 0;

      img {
        min-height: 100vh;
        object-fit: cover
      }
    }

    .mainbg {
      max-width: 100%;
    }

    .main_box_controls {
      z-index: 20;
      padding: 0 2rem;
      margin-bottom: 16rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      top: -6rem; /* Adjust the value as needed */

      h1 {
        width: 100%;
        color: black;
        margin-bottom: 1rem; /* Added margin */
      }

      p {
        color: black;
        margin-bottom: 1rem; /* Added margin */
      }
    }
  }

  .second_box {
    background-color: #2E4960;
    padding: 1rem 5rem;
    justify-content: space-between;
    display: flex;
    text-align: center;

    div {
      width: 500px;
    }
  }

  .three_box {
    color: white;
    width: 100%;
    text-align: center;
    font-size: 1.8rem;
  }

  .footer {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
    justify-content: space-around;
    margin-top: 1rem;
    max-width: 100%;
    align-items: center;

    div {
      text-align: center;

      span {
        color: #F2994A;
      }
    }
  }

  .footer_logo {
    width: 190px;
    height: 95px;
    max-width: 100%;
    margin-top: 3rem;
  }

  .footer_socials {
    margin-top: 1rem;
    display: flex;
    gap: 10px;
    font-size: 18px;
  }

  .footer_text {
    color: white;
    font-size: 12px;
    margin-top: 1rem;
    text-align: center;
    flex-grow: 1;
  }
`;

const MainPage = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log(search);
  };

  return (
    <Container>
      <div className='main_box'>
        <div className='box_img'>
          <img className='mainbg' src={MainBg}/>
        </div>
        <div className='main_box_controls'>
          <h1 style={{ color: "black" }}>Busca a tu perro ideal</h1>
          <p style={{ color: "black" }}>Miles de animales están esperándote</p> 
          <SearchBar
            value={search}
            onChange={setSearch}
          />
          <Button title='Buscar' width='150px' onClick={handleSearch}/>
        </div>
      </div>
      <div className='three_box'>
        <h2>Veterinarias en Santa Anita</h2>
      </div>
      <Map/>
      <div className='footer'>
        <img src={Logo} className='footer_logo'/>
        <div>
          <span style={{ fontSize: "14px" }}>Acceso Rápido</span>
          <p style={{ fontSize: "12px" }}>Inicio</p>
          <p style={{ fontSize: "12px" }}>Poner perro en Adopción</p>
          <p style={{ fontSize: "12px" }}>Inscripción DIC</p>
        </div>
        <div>
          <span style={{ fontSize: "14px" }}>Acerca de nosotros</span>
          <p style={{ fontSize: "12px" }}>Sobre Nosotros</p>
        </div>
        <div>
          <span style={{ fontSize: "14px" }}>Síguenos!</span>
          <div className='footer_socials'>
            <img src={Fb} style={{ width: "20px", height: "20px" }}/>
            <img src={Twitter} style={{ width: "20px", height: "20px" }}/>
            <img src={Instagram} style={{ width: "20px", height: "20px" }}/>
          </div>
        </div>
      </div>
      <p className='footer_text'>&copy; 2023. PETEC</p>
    </Container>
  );
};

export default MainPage;
