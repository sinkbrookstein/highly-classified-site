import '../styles/HireUsPage.css';
import placeholderImage from '../assets/placeholder.png';
import {Link} from 'react-router-dom';
import Footer from "../components/Footer.jsx";

const HireUsPage = () => {
    return (
        <div className="hire-us-container">
            <Packages/>
            <Footer/>
        </div>
    )
};

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