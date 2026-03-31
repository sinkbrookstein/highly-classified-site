import '../styles/PerformancesPage.css';
import React from "react";
import data from '../assets/performances/performances.json';
import Footer from "../components/Footer.jsx";

const PerformancesPage = () => {
    return (
        <div className="performances-container">
            <h2>Upcoming</h2>
            <UpcomingPerformances/>
            <h2>Past</h2>
            <PastPerformances/>
            <Footer />
        </div>
    );
};

function isLatestShowPast(showtimes) {
    let shows = showtimes.filter(datetime => datetime !== "TBD");
    const latest = new Date(
        Math.max(...shows.map(date => new Date(date)))
    );

    return latest < new Date();
}

function getReadableDate(date) {
    if (date === "TBD") {return date}
    const options = {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    };
    return new Date(date).toLocaleString('en-US', options);
}

function UpcomingPerformances() {
    const upcoming = data.performances.filter(p => !isLatestShowPast(p.showtimes));
    //TODO - handle the case if there are no upcoming performances.
    return <div className="upcoming-performances">
        {upcoming.map(performance => (
            <div className="performance">
                <div className="performance-image">
                    <img src={"/src/assets/performances" + performance.image} alt={performance.title}/>
                </div>
                <div className="performance-info">
                    <h3>{performance.title}</h3>
                    <h4>{performance.description}</h4>
                    <p>{performance.details}</p>
                    <div className="showtimes-container">
                        <p className="showtimes">Show times: </p>
                        {performance.showtimes.map(showtime => (<p>{getReadableDate(showtime)}</p>))}
                    </div>
                    {performance.tickets && (
                        <a
                            href={performance.tickets}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Tickets
                        </a>
                    )}
                    {performance.venmo && (
                        <p className="showtimes">venmo: {performance.venmo}</p>
                    )}
                </div>
            </div>
        ))}
    </div>
}

function PastPerformances() {
    const past = data.performances.filter(p => isLatestShowPast(p.showtimes));
    return <div className="past-performances">
        {past.map(performance => (
            <div className="performance">
                <div className="performance-image">
                    <img src={"/src/assets/performances" + performance.image} alt={performance.title}/>
                </div>
                <div className="performance-info">
                    <h3>{performance.title}</h3>
                    <h4>{performance.description}</h4>
                    {performance.details && (<p>{performance.details}</p>)}
                </div>
            </div>
        ))}
    </div>
}

export default PerformancesPage;
