import NavBar from './components/NavBar'
import { Route, Routes,  useLocation } from "react-router-dom"
import MainPage from './pages/mainpage'
import Inicio from './pages/inicio'
import Login from './pages/login'
import NewPassword from './pages/NewPassword'
import Register from './pages/Register'
import RegistroMascotas from './pages/registromascotas'
import Pagar from './pages/pagar'
import Nosotros from './pages/nosotros'
import AddPerroAdopcion from './pages/addperroadopcion'
import VerMas from './pages/vermas'
import RegisterDic from './pages/registerdic'
import PerroAdoptado from './pages/perroadoptado'
import RegistroMascotasDic from './pages/registromascotasdic'

function App() {
  const {pathname} = useLocation()

  const IsNavBar = () => {
    if (pathname === '/login' || pathname == '/newpassword' || pathname == '/registrar') {
      return ''
    }
    return <NavBar/>
  }

  return (
    <>
    <div>
      {
        <IsNavBar/>
      }
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/inscripcionesdic" element={<Inicio/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/newpassword" element={<NewPassword/>}/>
        <Route path="/registrar" element={<Register/>}/>
        <Route path="/registromascotas" element={<RegistroMascotas/>}/>
        <Route path="/pagar" element={<Pagar/>}/>
        <Route path="/*" element={<MainPage/>}/>
        <Route path="/addperroadopcion" element={<AddPerroAdopcion/>}/>
        <Route path="/vermas" element={<VerMas/>}/>
        <Route path='/registerdic' element={<RegisterDic/>}/>
        <Route path='/perroadoptado' element={<PerroAdoptado/>}/>
        <Route path='/registromascotasdic' element={<RegistroMascotasDic/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
