import './leaders.css'
import Card from './card.js'

const members4 = [
  {
    place: "President",
    avatar: require('./assets/didine.JPEG'),
    name: "Nejm Eddine Ben Mekhlouf ",
    role: "4th year student of Process engineering",
    skills: ["member of جمعية العلماء المسلمين"],
    experience: "Over 2 Years of experience"
  },
  {
    place: 'Vice President',
    avatar: require('./assets/pic3.jpg'),
    name: "Hamza Abdelaziz Dia",
    role: "4th year student at ENSIA",
    skills: ["member of جمعية العلماء المسلمين", "ex president of Ensia Tech Community"],
    experience: "over 3 Years of experience"
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