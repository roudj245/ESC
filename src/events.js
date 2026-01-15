import './events.css'
import wadjihni from "./assets/logo2.png"
import tech from "./assets/tech (1).png"
import cafe from "./assets/cafe.png" 
import comm from './assets/LOGO (3) 1.png'
import feuille from './assets/feuilles.png'


const events = [
{
    title: "Wadjihni",
    description: "An orientation event dedicated to guiding different categories of students and individuals, helping them explore opportunities and make informed choices about their academic and professional paths.",
    date: "date: July 20 , 2025",
    logo: wadjihni,
    link : 'https://wajihni.vercel.app/'
},
{
    title: "Lingua Signum",
    description: "A transformative event where participants explore the fascinating world of languages and join interactive activities that celebrate linguistic diversity, including immersive experiences to discover how words shape our minds and connect cultures.",
    date: "date: January 1, 2026",
    logo: comm,
    link : 'https://linguasignum.vercel.app/'
},
{
    title: "Skills Bootcamp",
    description: "An intensive training program designed to strengthen technical skills in areas such as design, web development, and app development, helping participants grow and stay competitive in the tech field.",
    date: "Estimated date: April 10, 2026",
    logo: tech,
    link : ''
},
{
    title: "Seeds and Deeds",
    description: "An inspiring event where participants visit a plant exhibition and join activities that promote love for trees and nature, including a volunteer day with children to raise environmental awareness. 🌿",
    date: "Estimated date: April 22, 2025",
    logo: feuille,
    link : ''
},
{
    title: "English Coffe",
    description: "A friendly gathering where participants meet in a coffee-style setting to discuss specific topics while practicing and improving their English communication skills.",
    date: "Estimated date: 30 January, 2026",
    logo: cafe,
    link : ''
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
    <h2 className='lider'>Our events</h2>
    <div className="events-grid">
    {events.map((event, i) => (
        <div key={i} className={`event-wrapper ${i % 2 === 0 ? "left" : "right"} card-${i}`}>
        <div className='yawedi'>
        <img src={event.logo} alt={`${event.title} logo`} />
        <a href ={event.link}><button className='riglli'><p>check the website!!</p></button></a>
        </div>
        <EventCard {...event} />
        </div>
        ))}
    </div>
    </div>
);
}

export default UpcomingEvents