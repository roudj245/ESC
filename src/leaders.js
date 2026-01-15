import './leaders.css'
import Card3 from './card3.js'


const members4 = [
  {
    place: "PRESIDENT",
    avatar: require('./assets/didine.JPEG'),
    name: "Nejm Eddine Ben Mekhlouf ",
    role: "4th year student of Process engineering",
    skills: ["member of جمعية العلماء المسلمين"],
    experience: "Over 2 Years of experience"
  },
  {
    place: 'VICE PRESIDENT',
    avatar: require('./assets/pic3.jpg'),
    name: "Hamza Abdelaziz Dia",
    role: "4th year student at ENSIA",
    skills: ["member of جمعية العلماء المسلمين", "ex president of Ensia Tech Community"],
    experience: "over 3 Years of experience"
  },
  {
    place: "GENERAL SECRETARY",
    avatar: require('./assets/ihebb.jpg'),
    name: "Dehal Iheb",
    role: "4th year student at ENSTP",
    skills: ["Graphic Designer", "Ex president of LTP "],
    experience: "Over 4 Years of experience"
  },
];

function Leaders(){
    return(
        <div id='leaders' className='leaders'>
            <p className='lider'>OUR LEADERS</p>
            <Card3 data={members4} />
            <p className='lider'>DEPARTMENTS</p>
        </div>
    );
}

export default Leaders