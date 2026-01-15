import './card3.css';

function LeaderCard({ item }) {
    return (
        <div className="leader-card">
            <img src={item.avatar} alt={item.name || 'Avatar'} />
            <h2>{item.name}</h2>
            <ul>
                {item.role && <li className='leader-info'>{item.role}</li>}
                {item.skills?.map((skill, i) => (
                    <li className='leader-info' key={i}>{skill}</li>
                ))}
                {item.experience && <li className='leader-info'>{item.experience}</li>}
            </ul>
        </div>
    );
}

export default function Card3({ data }) {
    if (!Array.isArray(data)) {
        return null;
    }

    return (
        <div className="leaders-cards-container">
            {data.map((item, i) => (
                <div className='leader-card-wrapper' key={i}>
                    {item.place && <p className='leader-position'>{item.place}</p>}
                    <LeaderCard item={item} />
                </div>
            ))}
        </div>
    );
}