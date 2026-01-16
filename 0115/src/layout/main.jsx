import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home.jsx';
import About from '../pages/about.jsx';
import Contact from '../pages/contact.jsx';
import Profile from '../pages/profile.jsx';
import { useAuth } from '../context/authContext.jsx';

const main = () => {
  const { user } = useAuth();
  return (
     <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {user ? (
                    <>
                        <Route path="/profile" element={<Profile />} />
                        {/* A logout-hoz általában nem route kell, de ha igen: */}
                        <Route path="/logout" element={<Home />} />
                    </>
                ) : (
                    <Route path="/login" element={<Profile />} />
                )}
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </main>
  )
}

export default main;