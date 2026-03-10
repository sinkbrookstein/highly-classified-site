import '../styles/AuditionsPage.css';
import auditionsImage from '../assets/auditions.jpeg';
import Footer from "../components/Footer.jsx";

const AuditionsPage = () => {
    return (
        <div className="auditions-container">
            <AuditionsBlurb/>
            <Footer/>
        </div>
    )
};

function AuditionsBlurb() {
    return <div className="auditions-blurb">
        <h2>Want to join us?</h2>
        <img src={auditionsImage} alt="auditions-image" className="auditions-image"/>
        <p>Are you looking to audition for a Highly Classified production? We are always open to new talent!
            While we are not currently in the casting process for any live stage performances, we are always
            looking for performers for private events. Please fill out the form linked below to audition for our general
            cast.
            We will update this page with show specific auditions when our next stage show is in the casting process.
            Be sure to follow us on instagram for the most up-to-date info!</p>
        <div className="form">
            <a href="https://docs.google.com/forms/d/1JaW5X6ZuciiHmS2ZzCpLJ3tX6AzP8a6V5aG6xhZfFB0/edit">General Audition
                Form</a>
        </div>
    </div>
}

export default AuditionsPage;