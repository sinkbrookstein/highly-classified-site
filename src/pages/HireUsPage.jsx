import '../styles/HireUsPage.css';
import placeholderImage from '../assets/placeholder.png';
import tempImage from '../assets/gallery/lisa-sling-ambient.jpg';
import {Link} from 'react-router-dom';
import Footer from "../components/Footer.jsx";

const HireUsPage = () => {
    return (
        <div className="hire-us-container">
            {/*<Packages/> This will be added later, for now putting in temporary blurb*/}
            <HireUsInfo/>
            <Footer/>
        </div>
    )
};

function HireUsInfo() {
    return <div className="hire-us-info">
        <h2>Hire Us</h2>
        <img src={tempImage} alt="Hire Us" className="temp-image"/>
        <p>
            You may know Highly Classified for our high-flying stage performances, but we do so much more!
            Our troupe is available for private or corporate events and ambient shows. We have performed
            at functions such as the First Fridays in the Santa Fe art district and aerial champagne service
            at weddings. If you are interested in booking Denver's most diverse aerial talent for your event, or
            have any inquiries please contact us!
        </p>
        <a className="link"><Link to="/contact">contact us</Link></a>
    </div>
}

function Packages() {
    return <div className="packages-container">
        <h2>Packages</h2>
        <div className="package-options">
            <div className="package-option">
                <h3>package 1</h3>
                <img src={placeholderImage} alt="Package 1" className="package-image"/>
                <p>Here is a description of package 1</p>
                <li>✨ Lorem ipsum dolor sit amet, eos in veri iudico. At graecis complectitur eos. Epicurei
                    mediocritatem ne vel, sit omnis autem definitionem ea. Has ut singulis tractatos, ad eligendi
                    appellantur per, erant minimum no pri. An eum exerci habemus dissentiunt, mel iudico sententiae ut.
                </li>
                <li>✨ Lorem ipsum dolor sit amet, eos in veri iudico. At graecis complectitur eos. Epicurei
                    mediocritatem ne vel, sit omnis autem definitionem ea. Has ut singulis tractatos, ad eligendi
                    appellantur per, erant minimum no pri. An eum exerci habemus dissentiunt, mel iudico sententiae ut.
                </li>
                <li>✨ Lorem ipsum dolor sit amet, eos in veri iudico. At graecis complectitur eos. Epicurei
                    mediocritatem ne vel, sit omnis autem definitionem ea. Has ut singulis tractatos, ad eligendi
                    appellantur per, erant minimum no pri. An eum exerci habemus dissentiunt, mel iudico sententiae ut.
                </li>
            </div>
            <div className="package-option">
                <h3>package 2</h3>
                <img src={placeholderImage} alt="Package 1" className="package-image"/>
                <p>Here is a description of package 2</p>
                <li>✨ Lorem ipsum dolor sit amet, eos in veri iudico. At graecis complectitur eos. Epicurei
                    mediocritatem ne vel, sit omnis autem definitionem ea. Has ut singulis tractatos, ad eligendi
                    appellantur per, erant minimum no pri. An eum exerci habemus dissentiunt, mel iudico sententiae ut.
                </li>
                <li>✨ Lorem ipsum dolor sit amet, eos in veri iudico. At graecis complectitur eos. Epicurei
                    mediocritatem ne vel, sit omnis autem definitionem ea. Has ut singulis tractatos, ad eligendi
                    appellantur per, erant minimum no pri. An eum exerci habemus dissentiunt, mel iudico sententiae ut.
                </li>
                <li>✨ Lorem ipsum dolor sit amet, eos in veri iudico. At graecis complectitur eos. Epicurei
                    mediocritatem ne vel, sit omnis autem definitionem ea. Has ut singulis tractatos, ad eligendi
                    appellantur per, erant minimum no pri. An eum exerci habemus dissentiunt, mel iudico sententiae ut.
                </li>
            </div>
            <div className="package-option">
                <h3>package 3</h3>
                <img src={placeholderImage} alt="Package 1" className="package-image"/>
                <p>Here is a description of package 3</p>
                <li>✨ Lorem ipsum dolor sit amet, eos in veri iudico. At graecis complectitur eos. Epicurei
                    mediocritatem ne vel, sit omnis autem definitionem ea. Has ut singulis tractatos, ad eligendi
                    appellantur per, erant minimum no pri. An eum exerci habemus dissentiunt, mel iudico sententiae ut.
                </li>
                <li>✨ Lorem ipsum dolor sit amet, eos in veri iudico. At graecis complectitur eos. Epicurei
                    mediocritatem ne vel, sit omnis autem definitionem ea. Has ut singulis tractatos, ad eligendi
                    appellantur per, erant minimum no pri. An eum exerci habemus dissentiunt, mel iudico sententiae ut.
                </li>
                <li>✨ Lorem ipsum dolor sit amet, eos in veri iudico. At graecis complectitur eos. Epicurei
                    mediocritatem ne vel, sit omnis autem definitionem ea. Has ut singulis tractatos, ad eligendi
                    appellantur per, erant minimum no pri. An eum exerci habemus dissentiunt, mel iudico sententiae ut.
                </li>
            </div>
        </div>
        <p className="contact">Please <a className="link"><Link to="/contact">contact us</Link></a> for more details on
            booking</p>
    </div>
}

export default HireUsPage;