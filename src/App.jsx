import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Layout components
import Navbar from './components/layout/navbar'
import Footer from './components/layout/Footer'
import Alert from './components/layout/Alert'
// Pages
import Home from './pages/home'
import About from './pages/about'
import NotFound from './pages/NotFound'
import UserPage from './pages/UserPage'
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/Alert/AlertContext'


function App() {

  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className='container mx-auto px-5'>
              <Alert />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/user/:login' element={<UserPage />} />
                  <Route path='/notfound' element={<NotFound />} />
                  <Route path='/*' element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
