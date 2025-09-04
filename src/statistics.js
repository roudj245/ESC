
import "./statistics.css";

export default function Statistics() {


let stats = {
users: 220,
events: 220,
other: 220,
};




return (
    <div className="statistics">
    <h2 className="lider">Statistics</h2>
    <div className="stats-cards">
        <div className="stat-card">
        <h3>{stats.users}</h3>
        <p>Departement</p>
        </div>
        <div className="stat-card">
        <h3>{stats.events}</h3>
        <p>Events</p>
        </div>
        <div className="stat-card">
        <h3>{stats.other}</h3>
        <p>Members</p>
        </div>
    </div>
    
    </div>
);
}
