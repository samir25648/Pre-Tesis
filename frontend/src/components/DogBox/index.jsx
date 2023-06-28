import styled from "styled-components"
import DogText from '../../assets/dog1.png'

const DogBox = ({
  nombre,
  descripcion,
  tags
}) => {
  return (
    <Container className="dogbox">
      <img src={DogText} />
      <div className="sub_dogbox">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <div className="categories">
          {tags.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
      </div>
    </Container>
  )
}

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
    padding: 0 2rem;
    color: black;
    h3 {
      font-size: 40px;
    }

    .categories {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @media (max-width: 1100px)  {
    flex-wrap: wrap;
    .sub_dogbox {
      padding: 20px
    }
    img {
    }
  }
`

export default DogBox