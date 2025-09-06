import './leaders.css'
import Card from './card.js'

const members4 = [
  {
    place: "President",
    avatar: require('./assets/moundhir.jpg'),
    name: "Mouloudi El-Moundhir",
    role: "Second year student at ESI Algiers",
    skills: ["Full Stack Developer", "UI / UX designer"],
    experience: "Over 3 Years of experience"
  },
  {
    place: 'Vice President',
    avatar: require('./assets/moundhir.jpg'),
    name: "Mouloudi El-Moundhir",
    role: "Third year student at ESI Algiers",
    skills: ["UI / UX designer", "Backend Developer"],
    experience: "2 Years of experience"
  },
];



function Leaders(){
    return(
        <div id ='leaders'className='leaders'>
            <p className='lider'>OUR LEADERS</p>
                <Card data={members4} />
            <p className='lider'>DEPARTEMENTS</p>
           

        </div>

    );
}
export default Leaders