import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PerformancesPage from "./pages/PerformancesPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import Layout from "./pages/Layout.jsx";
import AuditionsPage from "./pages/AuditionsPage.jsx";
import HireUsPage from "./pages/HireUsPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import ScrollToTop from './components/ScrollToTop.jsx';

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="about" element={<AboutPage/>}/>
                    <Route path="performances" element={<PerformancesPage/>}/>
                    <Route path="hire-us" element={<HireUsPage/>}/>
                    <Route path="contact" element={<ContactPage/>}/>
                    <Route path="auditions" element={<AuditionsPage/>}/>
                    <Route path="gallery" element={<GalleryPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
