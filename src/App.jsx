import Header from './components/Header'
import Entry from './components/Entry'
import data from "./data.jsx"
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const entryElements = data.map((entry => {
    return (
      <Entry
        key={entry.id}
        {...entry} />
      )
    })
  )

  return (
    <>
      <Header />
      <main>
        {entryElements}
      </main>
      <Footer />
    </>
  )
}

export default App
