import './card.css';

function Card1({ item }) {
return (
    <div className="card">
    <img src={item.avatar} alt={item.name || 'Avatar'} /> 
    <h2>{item.name}</h2>
    <ul>
        {item.role && <li className='role'>{item.role}</li>}
        {item.skills?.map((skill, i) => (
        <li className='role' key={i}>{skill}</li>
        ))}
        {item.experience && <li className='role'>{item.experience}</li>}
    </ul>
    </div>
);
}

export default function Card({ data }) {
if (!Array.isArray(data)) {
    return null; 
}

return (
    <div className="cards">
    {data.map((item, i) => (
        <div className='all' key={i}>
        {item.place && <p className='Titre4'>{item.place}</p>} 
        <Card1 item={item} />
        </div>
    ))}
    </div>
);


}

