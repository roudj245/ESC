import './events.css'

const events = [
{
    title: "English Coffee",
    description: "An English Coffee event is a casual gathering where people meet, talk, and enjoy cups of strong black coffee.",
    date: "Estimated date: March 12, 2025"
},
{
    title: "Tech Talk",
    description: "An interactive session where developers share insights on modern web technologies and practices.",
    date: "Estimated date: March 25, 2025"
},
{
    title: "Hackathon",
    description: "A 24-hour coding challenge designed to test creativity, collaboration, and problem-solving.",
    date: "Estimated date: April 10, 2025"
},
{
    title: "Design Workshop",
    description: "A hands-on workshop where participants learn design principles and create UI/UX mockups.",
    date: "Estimated date: April 22, 2025"
}
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
<div className="events-container">
    <h2 className='lider'>Upcoming events</h2>
    <div className="events-grid">
    {events.map((event, i) => (
        <div key={i} className={`event-wrapper ${i % 2 === 0 ? "left" : "right"} card-${i}`}>
        <EventCard {...event} />
        </div>
        ))}
    </div>
    </div>
);
}
export default UpcomingEvents


