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
      margin-bottom: 20rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        width: 100%;
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
    color: white; /* Cambiar el color del texto a blanco */
    width: 100%;
    text-align: center;
    font-size: 1.8rem;
  }

  .footer {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 30px;
    justify-content: space-around;

    div {
      text-align: center;
      span {
        color: #F2994A;
      }
    }
  }

  .footer_logo {
  }

  .footer_socials {
    margin-top: 1rem;
    display: flex;
    gap: 20px;
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
        <div className='main_box_controls'>
          <h1>Busca a tu perro ideal</h1>
          <p>Miles de animales están esperándote</p> 
          <SearchBar
            value={search}
            onChange={setSearch}
          />
          <Button title='Search' width='150px' onClick={handleSearch}/>
        </div>
        <div className='box_img'>
          <img className='mainbg' src={MainBg}/>
        </div>
      </div>
      <div className='three_box'>
        <h2>Verterinarias en Santa anita</h2>
      </div>
      <Map/>
      <div className='footer'>
        <img src={Logo} className='footer_logo'/>
        <div>
          <span>Acceso Rapido</span>
          <p>Adopcion</p>
          <p>Registrar</p>
        </div>
        <div>
          <span>Acerca de nosotros</span>
          <p>¿Quiénes somos?</p>
        </div>
        <div>
          <span>Síguenos!</span>
          <div className='footer_socials'>
            <img src={Fb}/>
            <img src={Twitter}/>
            <img src={Instagram}/>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainPage;
