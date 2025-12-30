import './App.css'
import { EventForm } from './components/EventForm'

// no react componentes sao funcoes que retornam trechos de codigo html (jsx)
// props is an Object
// props.children


function App() {

  return (
   <main>
    <header>
      <img src="/logo.png" alt="Logo" />
    </header>
    <section>
      <img src="/banner.png" alt="banner" />
    </section>
    <EventForm></EventForm>
   </main>
  )
}

export default App
