import Navbar from './navbar.js'
import Home from './home.js'
import Home2 from './home2.js'
import Introduction from './Introduction.js'
import About from './about.js'
import Leaders from './leaders.js'
import Departement from './Departement.js'
import Design from './assets/Design.png'
import Departement2 from './Departement2.js'
import dev from './assets/DEV.png'
import hr from './assets/HR.png'
import relex from './assets/RELEX.png'
import event from './assets/yanis.png'
import UpcomingEvents from './events.js'
import Footer from './footer.js'
import { useEffect,useState } from 'react'
import PersonnelSlider from './slider.js'
import edit1 from './assets/edit1.png'
import marketing2 from './assets/marketing2.png'
import planing from './assets/planing.png'
import finance from './assets/finance.png'





const rio = [
  {
    place: "leader",
    avatar: require('./assets/DSC02902.JPG'),
    name: "Roudj Abdelghani",
    role: "Second year student at ESI Algiers",
    skills: ["Front end Developer","member of جمعية العلماء المسلمين"],
    experience: "2 Year of experience"
  },
  {
    place: "co-leader",
    avatar: require('./assets/profile2.png'),
    name: "Merzougui Abdeljalil",
    role: "Second year student at ESI Algiers",
    skills: [" Backend Developer", "UI / UX designer"],
    experience: "2 Year of experience"
  },
  
];
const rio2 = [
  {
    place: "leader",
    avatar: require('./assets/malek.webp'),
    name: "Oumouna Abdelmalek",
    role: "3rd year student at ENSTP",
    skills: ["graphic designer", "member of جمعية العلماء المسلمين"],
    experience: "Over 2 Years of experience"
  },
  
  
];
const rio3 = [
  {
    place: "leader",
    avatar: require('./assets/raouf.jpg'),
    name: "Souilamas Abderaouf",
    role: "3rd year student of Process engineering",
    skills: ["Excellent at communicating", "Speaks English and French fluently"],
    experience: "Over 2 Years of experience"
  },
  
];
const rio4 = [
  {
    place: "leader",
    avatar: require('./assets/mohaa.jpg'),
    name: "Mohammed Maddi",
    role: "Second year student at ENP Algiers",
    skills: ["Excellent at communicating", "member of جمعية العلماء المسلمين"],
    experience: "Over 2 Years of experience"
  },
  
];
const rio5 = [
  {
    place: "leader",
    avatar: require('./assets/profile2.png'),
    name: "Dehal Iheb",
    role: "4th year student at ENSTP",
    skills: ["Graphic Designer", "Ex president of "],
    experience: "Over 3 Years of experience"
  },
  
];
const rio7 = [
  {
    place: "leader",
    avatar: require('./assets/pic2.JPG'),
    name: "Belmiloud Iyed",
    role: "master 1 student of Artificial intelligence",
    skills: ["Video Editer", "member of جمعية العلماء المسلمين"],
  },
  
];
const rio6 = [
  {
    place: "leader",
    avatar: require('./assets/malek.webp'),
    name: "Oumouna Abdelmalek",
    role: "3rd year student at ENSTP",
    skills: ["graphic designer", "member of جمعية العلماء المسلمين"],
    experience: "Over 2 Years of experience"
  },
  {
    place: "co-leader",
    avatar: require('./assets/pic3.jpg'),
    name: "Hamza Abdelaziz Dia",
    role: "4th year student at Ensia",
    skills: ["member of جمعية العلماء المسلمين", "ex president of Ensia Tech Community"],
    experience: "Over 3 Years of experience"
  },

  
];









function App() {
const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <>
    <Navbar/>
    <Home/>
    <Home2/>
    <Introduction
    Titre= 'INTRODUCTION'
    RIGL='TO ESC CLUB'
    fa9ra='ESC Club is a scientific student community in Cherchell that gathers young minds passionate about science, technology, and innovation.
We organize workshops, projects, and events to encourage creativity and teamwork.
Our mission is to transform curiosity into knowledge and knowledge into impactful ideas..'

    
    
    />
    <About/>
    <Introduction
    Titre= 'WHY JOIN'
    RIGL='ESC?'
    fa9ra='Joining ESC Club means becoming part of a community that values knowledge, creativity, and teamwork. We provide opportunities to grow through scientific projects, workshops, and competitions that sharpen both technical and soft skills. Members benefit from collaboration, networking, and real-world experience that go beyond the classroom. At ESC, you don’t just learn science — you live it and share it with others.'
    
    
    />
  {!isMobile && <Leaders/>} 
  
  <div id ="departement">
    {isMobile && <p className='lider'>DEPARTEMENTS</p>}
  <Departement2 
  title3='DEV Departement' 
  description3={
    <>
      The Development Department builds and maintains digital projects. 
      Members code websites, apps, and tools with clean, scalable logic. 
      They organize coding sessions to improve skills and share knowledge.
      Innovation and problem-solving are key values of this department.
      DEV ensures all technical ideas become functional applications. 
    </>
  }
  image3={dev}
  data3={rio}
/>

<Departement
  title2='DESIGN Departement' 
  description2={
    <>
      The Design Department focuses on visuals, branding, and identity. 
      Members create graphics, posters, and creative digital content. 
      They design user-friendly layouts for websites and applications. 
      Workshops help improve skills in design tools and creativity. 
      Their goal is to deliver beauty and clarity in every project. 
    </>
  }
  image2={Design}
  data2 ={rio2}
/>

<Departement2 
  title3='Human Resources Departement' 
  description3={
    <>
      The Human Resources Department manages people, teamwork, and communication. 
      They recruit new members and organize training for growth. 
      HR builds leadership, motivation, and conflict resolution skills. 
      The department ensures harmony between all club members. 
      Their mission is to keep the community strong and united. 
    </>
  }
  image3={hr}
  data3 ={rio6}
/>

<Departement
  title2='RELEX Deparetemnt' 
  description2={
    <>
      The external relations Department builds partnerships with sponsors and firms. 
      They negotiate collaborations that support projects and events. 
      Members develop strong communication and networking abilities.
      The department improves the club’s visibility in the community. 
      RELEX ensures lasting connections for the club’s success. 
    </>
  }
  image2={relex}
  data2 ={rio3}
/>

<Departement2 
  title3='Marketing Departement' 
  description3={
    <>
    The marketing department promotes the club’s vision and activities. They design campaigns, create content, and manage social media. Members develop communication, creativity, and teamwork skills. Each campaign is crafted to inspire and engage the audience. Marketing builds visibility, strengthens the club’s image, and connects it with the community.
    </>
  }
  image3={marketing2}
  data3={rio4}
/>
<Departement 
  title2='Planing Departement' 
  description2={
    <>
    The Planning Department manages events, schedules, and logistics. They design strategies to achieve goals effectively. Planning ensures organization, coordination, and smooth execution. The department builds skills in leadership, problem-solving, and foresight. Their mission is to turn vision into successful reality.
    </>
  }
  image2={planing}
  data2={rio5}
/>
<Departement2 
  title3='Video Editing Departement' 
  description3={
    <>
  The Video Editing Department manages stories, visuals, and sound. They turn raw footage into engaging and professional content. Video editors shape projects with creativity, precision, and style. The department builds skills in editing, effects, and communication. Their mission is to bring moments to life through film.
    </>
  }
  image3={edit1}
  data3={rio7}
/>
<Departement 
  title2='Finance Departement' 
  description2={
    <>
  The Finance Department manages budgets, resources, and expenses. They track all financial activities and ensure transparency. Finance plans fundraising, sponsorships, and sustainable growth. The department builds skills in management, strategy, and responsibility. Their mission is to secure stability and future success.
    </>
  }
  image2={finance}
  data2={rio3}
/>
<Departement2 
  title3='Media Management Department' 
  description3={
    <>
    The Media Management Department manages creativity, design, and innovation. They create visuals that capture the club’s identity. Multimedia develops graphics, branding, and digital campaigns. The department builds skills in art, technology, and storytelling. Their mission is to make ideas inspiring and impactful.
    </>
  }
  image3={event}
  data3={rio4}
/>
</div>
{isMobile && <PersonnelSlider/>} 



    <UpcomingEvents/>
    <Footer/>





    
    </>
    
    
  );
}

export default App;
