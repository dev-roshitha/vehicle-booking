import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './pages/appRoutes'
import NavBar from './components/navbar'
import './App.css'
import './styles/main.scss'

function App() {

  return (
    <BrowserRouter>
      <main>
        <NavBar />  
        <AppRoutes />
      </main>
    </BrowserRouter>
  )
}

export default App
