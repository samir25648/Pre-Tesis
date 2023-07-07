import styled from 'styled-components';
import Fb from '../assets/facebook.svg';
import Twitter from '../assets/twitter.svg';
import Instagram from '../assets/instagram.svg';
import Logo from '../assets/logo.png';
import { useState } from 'react';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MainBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
  overflow: hidden;
  min-height: 60vh;
  max-width: 100%;
  background-color: #FFFF;
  color: #000000;
  position: relative;
  font-size: 1.5rem; 
  margin-bottom: 1rem;
  text-align: justify;

  .box_img {
    z-index: 10;
    position: absolute;
    top: 0;
    bottom: 0;

    img {
      min-height: 100vh;
      object-fit: cover;
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
  }
`;

const ThreeBox = styled.div`
  color: white;
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
`;

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;
  justify-content: space-around;
  margin-top: 2rem;

  div {
    text-align: center;

    span {
      color: #F2994A;
    }
  }
`;

const FooterLogo = styled.img`
  width: 240px;
  height: 120px;
`;

const FooterSocials = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 20px;
`;


const Nosotros = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log(search);
  };

  return (
    <Container>
      <Footer>
        <h1>SOBRE NOSOTROS</h1>
        <FooterLogo className="main_logo" src={Logo} />
      </Footer>
      <MainBox>
        <div style={{ flex: 1 }}>
          <p style={{ marginLeft: '2rem' }}>
            Nuestra plataforma web para mascotas en Santa Anita se dedica a mejorar la vida de los animales y sus dueños en nuestra comunidad. Nos enfocamos en promover la adopción responsable y facilitar el proceso de encontrar hogares amorosos y seguros para los animales necesitados. Además de la adopción, ofrecemos herramientas integrales para el cuidado de las mascotas, como registro de mascotas, información sobre su salud, seguimiento de vacunas y programación de citas veterinarias y cuidados preventivos. También hemos integrado una función de localización de veterinarias cercanas, donde los usuarios pueden encontrar clínicas y hospitales veterinarios en Santa Anita, obtener información detallada y leer reseñas de otros usuarios. Nuestro objetivo es asegurar que todas las mascotas reciban la atención médica adecuada de profesionales comprometidos con su salud. Simplificamos la vida de los dueños de mascotas y trabajamos para mantener a sus peludos felices y saludables.
          </p>
        </div>
        <div style={{ flex: 1, position: 'relative' }}>
          <img
            src="/src/assets/nosotros-2.png"
            alt="Imagen 2"
            style={{
              position: 'absolute',
              top: 0,
              right: 100,
              width: '220px',
              height: 'auto',
            }}
          />
          <img
            src="/src/assets/nosotros-1.png"
            alt="Imagen 1"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 100,
              width: '250px',
              height: 'auto',
            }}
          />
        </div>
      </MainBox>
      
      <Footer>
        <FooterLogo className="footer_logo" src={Logo} />
        <div>
          <span>Acceso Rápido</span>
          <p>Inicio</p>
          <p>Poner perro en Adopción</p>
          <p>Inscripción DIC</p>
        </div>
        <div>
          <span>Acerca de nosotros</span>
          <p>Sobre Nosotros</p>
        </div>
        <div>
          <span>Síguenos!</span>
          <FooterSocials>
            <img src={Fb} />
            <img src={Twitter} />
            <img src={Instagram} />
          </FooterSocials>
        </div>
      </Footer>
    </Container>
  );
};

export default Nosotros;
