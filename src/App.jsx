import './App.css'

// no react componentes sao funcoes que retornam trechos de codigo html (jsx)

function EventForm(){
  return (
    <form action="" className='event-form'>
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor="name">
          Qual o nome do evento?
        </label>
        <input type="text" name="name" id="name" placeholder='summer dev hits'/>
      </fieldset>
    </form>
  )
}

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
