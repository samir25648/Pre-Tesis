import styled, { keyframes } from "styled-components";
import { fadeIn, slideInDown, slideInLeft } from "react-animations";
import Logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

const fadeInAnimation = keyframes`${fadeIn}`;
const slideInDownAnimation = keyframes`${slideInDown}`;
const slideInLeftAnimation = keyframes`${slideInLeft}`;

const NavBar = ({ className }) => {
  return (
    <Nav className={className}>
      <div className="navbar_mainbox">
        <Link to='/'>
          <LogoImage src={Logo} alt='logo' className="logo_image"/>
        </Link>
        <div className="nav_items">
          <NavLink to="/" animationDelay="0s" className="nav_link">Inicio</NavLink>
          <NavLink to="/inscripcionesdic" animationDelay="0.2s" className="nav_link">Inscripción DIC</NavLink>
          <NavLink to="/addperroadopcion" animationDelay="0.3s" className="nav_link">Poner Perros en Adopción</NavLink>
          <NavLink to="/nosotros" animationDelay="0.4s" className="nav_link">Sobre Nosotros</NavLink>
        </div>
      </div>
      <div className="navbar_secbox">
        <NavLink to="/login" animationDelay="0.5s" className="nav_link">Acceder</NavLink>
        <NavLink to="/registrar" animationDelay="0.6s" className="nav_link">Crear Cuenta</NavLink>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 6rem;
  background-color: #FFA500;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  animation: ${fadeInAnimation} 0.5s ease;

  @media (max-width: 800px) {
    padding: 0.75rem 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    background-color: #F9B545;
  }
`;

const LogoImage = styled.img`
  width: 140px;
  animation: ${slideInDownAnimation} 0.5s ease;

  @media (max-width: 800px) {
    margin-bottom: 1rem;
    width: 120px;
  }
`;

const NavLink = styled(Link)`
  cursor: pointer;
  letter-spacing: 0.75px;
  color: #101010;
  font-weight: 400;
  margin-right: 0.75rem;
  text-decoration: none;
  transition: color 0.3s ease;
  animation: ${slideInLeftAnimation} 0.5s ease;
  animation-delay: ${props => props.animationDelay};

  &:hover {
    color: #555555;
  }

  &.nav_link {
    font-size: 0.9rem;
    font-weight: 500;
    color: #101010;
  }

  @media (max-width: 800px) {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
`;

export default styled(NavBar)`
  .navbar_mainbox {
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 800px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .nav_items {
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 800px) {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 1rem;
    }
  }

  .navbar_secbox {
    display: flex;
    gap: 20px;

    @media (max-width: 800px) {
      margin-top: 1rem;
    }
  }
`;
