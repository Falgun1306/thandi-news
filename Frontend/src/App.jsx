import NavBar from './Components/NavBar'
import Categories from './Components/Categories'
import News from './Components/Pages/News'
import Footer from './Components/Footer'

function App() {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <NavBar />
      <Categories />
      <News />
      <Footer />
    </div>
  )
}

export default App
