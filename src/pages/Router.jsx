import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import About from './About';
import MindMapPage from '../components/MindMapPage';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/mind-map/:name" element={<MindMapPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}

export default Router
