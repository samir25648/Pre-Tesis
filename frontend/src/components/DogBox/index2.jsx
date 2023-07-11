import React from "react";
import styled from "styled-components";
import DogText from "../../assets/dog1.png";
import Swal from "sweetalert2";

const Dog2Box = ({ nombre, descripcion, tags }) => {
  const showAlert = () => {
    Swal.fire({
      icon: 'warning',
      title: 'Aviso',
      text: 'Se le ha advertido a todas las veterinarias y guarderias de la perdida',
    })
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
          <button className="button_perdido" onClick={showAlert}>¡¡¡PERDIDO!!!</button>
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
  gap: 50px;
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
      p {
        margin-left: 20px;
      }
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

    .button_perdido {
      background-color: #EE2020;
      height: 32px;
      color: black;
      border-radius: 8px;
      padding: 5px 30px;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: rgb(255, 126, 126);
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

export default Dog2Box;
