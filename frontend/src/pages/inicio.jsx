import styled from 'styled-components'
import NavBar from '../components/NavBar'
import PerroTriste from '../assets/perrotriste.png'
import PerroFeliz from '../assets/perrofeliz.png'
import Visa from '../assets/visa.png'
import Mastercad from '../assets/mastercad.png'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  color: white;
  background-color: #2E4960;

  .main_box {
    margin: auto;
    padding-bottom: 7rem;
    width: 70%;
  }

  .boxtitle {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  .two_box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 19rem;
    margin-bottom: 0rem;
  }

  .two_box > h2 {
    text-align: center;
  }

  .container_info_box {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    gap: 10px;
    justify-content: space-between;

    .infBox {
      max-width: 250px;
      min-height: 400px;
      border-radius: 12px;
      background-color: #FFFFFF;
      align-items: center;
      color: #2E4960;

      display: flex;
      flex-direction: column;
      justify-content: center;

      .infBox_image {
        border-radius: 12px;
        width: 150px;
      }
      p {
        font-weight: bold;
      }
      span {
        margin: 0 40px;
        font-size: 14px;
        text-align: center;
      }
    }

    .infBox:first-child {
      text-align: center;
    }

    .infBox:nth-child(3) {
      order: -1;
    }
  }
  .container_method_payment {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    .box {
      width: 80%;
      display: flex;
      flex-direction: row;
      height: 160px;
      color: #000000;
      border-radius: 12px;
      background-color: #eff0f6;
      align-items: center;
      justify-content: space-around;

      div {
        display: flex;
        align-items: center;
        gap: 20px;
      }

      img {
        width: 150px;
        height: 100px;
      }
    }
  }

  .button_two {
    background-color: #f9b545;
    height: 32px;
    color: black;
    border-radius: 8px;
    padding: 8px 15px;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: rgb(206, 150, 57);
    }
  }

`

const Inicio = () => {
  return (
    <Container>
      <div className="main_box">
        <h2 className="boxtitle">Inscribe a tu mascota en DIC!!</h2>
        <p>PeTec es pasión y amor por los perros ❤ <br />
          Es por eso que al hacer el registro pueda mantener viva tu API favorita.</p>
        <div className="two_box">
          <h2>¿Estás listo?</h2>
          <h2>¿Quieres inscribir a tu perro?</h2>
          <h2>Beneficios</h2>
        </div>
        <div className="container_info_box">
          <div className="infBox">
            <p>Ventajas y Desventajas
              de DIC</p>
            <span>Tú mascota estará registrada y al momento que se pierda, avisará o alertará a todas los usuarios,  veterinarias y perreras de la zona de Santa Anita la información dada osea su DIC</span>
          </div>
          <div className="infBox">
            <img src={PerroFeliz} className='infBox_image' />
            <p>Al SI TENER DIC</p>
            <span>Acá podrás visualizar cuáles son las ventajas de tener el Documento de Identificación Canina (DIC) para tu mascota.</span>
          </div>
          <div className="infBox">
            <img src={PerroTriste} className='infBox_image' />
            <p>Al NO TENER DIC</p>
            <span>Acá podrás visualizar cuáles son las desventajas de no tener el Documento de Identificación Canina (DIC) para tu mascota.</span>
          </div>
          <div className="infBox"> 
          <center><p>Beneficios al inscribir a tu mascota</p></center>   
            <span>1. En tu primer mes de suscripción te regalaremos productos para tus animales registrado, no pierdas esta gran oportunidad.</span>
            <span>2. La inscipción tendrá un costo de tan solo 10 soles.</span>
          </div>
        </div>
        <h2>Otros métodos de pago</h2>
        <div className="container_method_payment">
          <div className='box'>
            <div>
              <img src={Visa} alt="Visa" />
              <h3>Visa</h3>
            </div>
            <Link to='/pagar' className='button_two'>Pagar</Link>
          </div>
          <div className='box'>
            <div>
              <img src={Mastercad} alt="Mastercard" />
              <h3>Mastercard</h3>
            </div>
            <Link to='/pagar' className='button_two'>Pagar</Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Inicio;
