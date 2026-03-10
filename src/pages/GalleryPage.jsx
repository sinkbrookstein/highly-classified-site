import Footer from "../components/Footer.jsx";
import React, {useState, useEffect} from "react";
import '../styles/GalleryPage.css';

const GalleryPage = () => {
    return (
        <div className="gallery-container">
            <GalleryBlurb/>
            <Footer/>
        </div>
    )
};

function GalleryBlurb() {
// Automatically import all images from folder
    const images = Object.values(
        import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp}", {
            eager: true, query: '?url', import: 'default'
        })
    );

    const [currentIndex, setCurrentIndex] = useState(null);

    const openModal = (index) => {
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setCurrentIndex(null);
    };

    const showNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const showPrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    // Close on ESC key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") closeModal();
            if (e.key === "ArrowRight") showNext();
            if (e.key === "ArrowLeft") showPrev();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex]);
    return <div className="gallery-blurb">
        <h2>Gallery</h2>
        <div className="gallery-grid">
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`Gallery ${index}`}
                    loading="lazy"
                    onClick={() => openModal(index)}
                />
            ))}
        </div>

        {currentIndex !== null && (
            <div className="modal-overlay" onClick={closeModal}>
                <div
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="close-btn" onClick={closeModal}>
                        ×
                    </button>

                    <button className="nav-btn left" onClick={showPrev}>
                        ❮
                    </button>

                    <img
                        src={images[currentIndex]}
                        alt="Large view"
                        className="modal-image"
                    />

                    <button className="nav-btn right" onClick={showNext}>
                        ❯
                    </button>
                </div>
            </div>
        )}
    </div>
}

export default GalleryPage;