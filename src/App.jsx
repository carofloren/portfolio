import { Home } from '../src/components/home/Home'
import { NavBar } from '../src/components/navbar/NavBar'
import { Skills } from '../src/components/skills/Skills'
import { Proyect } from '../src/components/proyectos/Proyect'
import { Contact } from '../src/components/contacto/Contact'
function App() {

  return (
   
    <>
    <NavBar/>
    <div className='container'>
    <Home/>
    <Proyect/>
    <Skills/>
    <Contact/>
   
  </div>
    </>
 
  )
}

export default App
