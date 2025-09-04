import './leaders.css'
import Card from './card.js'

const members = [
  {
    place: "President",
    avatar: require('./assets/Mask.png'),
    name: "Roudj Abdelghani",
    role: "Second year student at ESI Algiers",
    skills: ["Full Stack Developer", "UI / UX designer"],
    experience: "Over 3 Years of experience"
  },
  {
    place: 'Vice President',
    avatar: require('./assets/Mask.png'),
    name: "Abdeljalil Merzougui",
    role: "Third year student at ESI Algiers",
    skills: ["UI / UX designer", "Backend Developer"],
    experience: "2 Years of experience"
  },
];



function Leaders(){
    return(
        <div className='leaders'>
            <p className='lider'>OUR LEADERS</p>
                <Card data={members} />
            <p className='lider'>DEPARTEMENTS</p>
           

        </div>

    );
}
export default Leaders