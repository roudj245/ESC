import './events.css'
import wadjihni from "./assets/logo2.png"
import feuille from "./assets/feuilles.png"
import tech from "./assets/tech (1).png"
import chercher from"./assets/chercher.png" 
import cafe from "./assets/cafe.png" 


const events = [
{
    title: "Wadjihni",
    description: "An orientation event dedicated to guiding different categories of students and individuals, helping them explore opportunities and make informed choices about their academic and professional paths.",
    date: "Estimated date: July 20 , 2025",
    logo: wadjihni
},
{
    title: "Seeds and deeds",
    description: "An inspiring event where participants visit a plant exhibition and join activities that promote love for trees and nature, including a volunteer day with children to raise environmental awareness. 🌿",
    date: "Estimated date: April 22, 2025",
    logo: feuille
},
{
    title: "Skills Bootcamp",
    description: "An intensive training program designed to strengthen technical skills in areas such as design, web development, and app development, helping participants grow and stay competitive in the tech field.",
    date: "Estimated date: April 10, 2025",
    logo: tech
},
{
    title: "Try with us",
    description: "An engaging event where children explore different fields through fun hands-on experiences, sparking curiosity and inspiring them to start building their dreams from an early age.",
    date: "Estimated date: April 22, 2025",
    logo: chercher
},
{
    title: "English Coffe",
    description: "A friendly gathering where participants meet in a coffee-style setting to discuss specific topics while practicing and improving their English communication skills.",
    date: "Estimated date: March 12, 2025",
    logo: cafe
},
];

function EventCard({ title, description, date }) {
return (
 <div className="event-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <small>{date}</small>
    </div>     
);
}

function UpcomingEvents() {
return (
<div id ='events' className="events-container">
    <h2 className='lider'>Upcoming events</h2>
    <div className="events-grid">
    {events.map((event, i) => (
        <div key={i} className={`event-wrapper ${i % 2 === 0 ? "left" : "right"} card-${i}`}>
        <div className='yawedi'>
        <img src={event.logo} alt={`${event.title} logo`} />
        <button className='riglli'>check the website!!</button>
        </div>
        <EventCard {...event} />
        </div>
        ))}
    </div>
    </div>
);
}

export default UpcomingEvents