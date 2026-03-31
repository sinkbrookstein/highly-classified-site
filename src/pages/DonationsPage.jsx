import '../styles/Donations.css';
import Footer from "../components/Footer.jsx";

const DonationsPage = () => {
    return (
        <div className="donations-container">
            <DonationsBlurb/>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
};

function DonationsBlurb() {
    return <div className="donations-blurb">
        <h2>Donations</h2>
        <p>Thank you so much for supporting us! We are a grassroots aerial troupe. 100% of
            proceeds go directly to cast members, costuming, venue costs, etc. Your support
            makes our performances possible. Currently, we can only accept donations through the
            paypal link below. Thank you for supporting Denver local arts!
        </p>
        <div className="form">
            <a href="https://www.paypal.com/paypalme/cocodayoc">Donate Here</a>
        </div>
    </div>
}

export default DonationsPage;