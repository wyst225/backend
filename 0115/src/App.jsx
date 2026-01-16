import {BrowserRouter} from 'react-router-dom';
import Header from './layout/header.jsx';
import Footer from './layout/footer.jsx';
import Main from './layout/main.jsx';
import Navbar from './layout/navbar.jsx';
import './App.css'
import { AuthProvider } from './context/authContext.jsx';

function App() {

  return (
      <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Header />
        <Main />
        <Footer />
    
      </AuthProvider>
      </BrowserRouter>
  )
}


export default App
