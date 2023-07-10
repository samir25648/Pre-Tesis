import React from "react";
import styled from "styled-components";
import DogText from "../../assets/dog2.png";
import { Link } from "react-router-dom";

const DogBox = ({ nombre, descripcion, tags }) => {
  const showAlert = () => {
    alert("¡¡Perro adoptado!! Contacte con el número del dueño");
  };

  return (
    <Container className="dogbox">
      <img src={DogText} alt="Imagen de perro" />
      <div className="sub_dogbox">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <div className="categories">
          {tags.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
        <h1></h1>
        <ButtonsContainer>
          <Link className="button_adoptame" onClick={showAlert}>ADOPTAME :)</Link>
          <Link to='/inscripcionesdic' className="button_inscribir">INSCRIBIR DIC</Link>
        </ButtonsContainer>
        <h1></h1>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  gap: 20px;
  img {
    width: 364px;
    height: 366px;
    object-fit: cover;
    border-radius: 12px;
  }
  .sub_dogbox {
    background-color: #f5f5f5;
    border-radius: 12px;
    padding: 0 3rem;
    color: black;
    h3 {
      font-size: 50px;
    }

    .categories {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    .button_adoptame {
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

    .button_inscribir {
      background-color: #FF8739;
      height: 32px;
      color: black;
      border-radius: 8px;
      padding: 5px 30px;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: rgb(255, 243, 57);
      }
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 10px;
`;

export default DogBox;
