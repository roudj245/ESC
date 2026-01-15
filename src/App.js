import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Closed from './closed';
import FooterRegister from './footer1';
import Register from './register.js'; 





const rio = [
  {
    place: "MANAGER",
    avatar: require('./assets/DSC02902.JPG'),
    name: "Roudj Abdelghani",
    role: "Second year student at ESI Algiers",
    skills: ["Frontend Developer","member of جمعية العلماء المسلمين"],
    experience: "2 Years of experience"
  },
  {
    place: "CO-MANAGER",
    avatar: require('./assets/jalil.jpg'),
    name: "Merzougui Abdeljalil",
    role: "Second year student at ESI Algiers",
    skills: [" Backend Developer", "UI / UX designer"],
    experience: "2 Years of experience"
  },
  
];
const rio2 = [
  {
    place: "MANAGER",
    avatar: require('./assets/yasmine2.webp'),
    name: "Yasmine Ouzaghla",
    role: "2nd year process engineering-INH",
    skills: ["Graphic Designer", "Blender Designer"],
  },
  
  
];
const rio3 = [
  {
    place: "MANAGER",
    avatar: require('./assets/raouf.jpg'),
    name: "Souilamas Abderaouf",
    role: "3rd year student of Process engineering",
    skills: ["Excellent at communicating", "Speaks English and French fluently"],
    experience: "Over 2 Years of experience"
  },
  
];
const rio4 = [
  {
    place: "MANAGER",
    avatar: require('./assets/mohaaa.jpg'),
    name: "Mohammed Maddi",
    role: "Second year student at ENP Algiers",
    skills: ["Excellent at communicating", "member of جمعية العلماء المسلمين"],
    experience: "Over 2 Years of experience"
  },
  
];
const rio5 = [
  {
    place: "MANAGER",
    avatar: require('./assets/safia.jpg'),
    name: "Safia Ghezal",
    role: "3rd year medical student",
    skills: ["Excellent organizer", "Team leader"],
  },
  
];
const rio7 = [
  {
    place: "MANAGER",
    avatar: require('./assets/malek.webp'),
    name: "Oumouna Abdelmalek",
    role: "4th Year student at ENSTP",
    skills: ["Video Editer", "member of جمعية العلماء المسلمين"],
  },
  
];
const rio6 = [
  {
    place: "MANAGER",
    avatar: require('./assets/tasnim.webp'),
    name: "Oudai Tasnim Ikram",
    role: "2nd year Student at ENP Algiers",
    skills: ["exellent at communicating"],
    experience: "Over 2 Years of experience"
  },
  {
    place: "CO-MANAGER",
    avatar: require('./assets/iheb2.jpg'),
    name: "Dahel Yasmine",
    role: "1st year of political science",
    skills: ["Speaks English and French fluently"],
  },

];


  const rio10 = [
  {
    place: "leader",
    avatar: require('./assets/profile2.png'),
    name: "Dehal Iheb",
    role: "4th year student at ENSTP",
    skills: ["Graphic Designer", "Ex president of LTP "],
    experience: "Over 3 Years of experience"
  },

  
];




  const rio11 = [
  {
    place: "MANAGER",
    avatar: require('./assets/najib.jpg'),
    name: "Birem Mohamed Nadjib",
    role: "1st year student of process engineering",
    skills: ["excellent at communicating"],
  },

  
];





  const rio12 = [
  {
    place: "MANAGER",
    avatar: require('./assets/dhoha.jpg'),
    name: "Boukhatem Dhoha",
    role: "Second year scientific high school student",
    skills: ["member of جمعية العلماء المسلمين"],
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
    <Router>
      <Routes>
        <Route path="/" element={
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
            fa9ra='Joining ESC Club means becoming part of a vibrant community of young scientists and innovators.
          You will have the opportunity to work on exciting projects, attend workshops, and collaborate with like-minded peers.
          ESC Club offers a platform to develop your skills, explore new ideas, and make a positive impact through science and technology.'
            
            
            
            />
          {!isMobile && <Leaders/>} 
          
          <div id ="departement">
            {isMobile && <p className='lider'>DEPARTMENTS</p>}
          <Departement2 
          title3='DEV Department' 
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
          title2='DESIGN Department' 
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
          title3='HR Department' 
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
          title2='RELEX Departemnt' 
          description2={
            <>
              The external relations Department builds partnerships with sponsors and firms. 
              They negotiate collaborations that support projects and events. 
              Members develop strong communication and networking abilities.
              The department improves the club's visibility in the community. 
              RELEX ensures lasting connections for the club's success. 
            </>
          }
          image2={relex}
          data2 ={rio3}
        />

        <Departement2 
          title3='Marketing Department' 
          description3={
            <>
            The marketing department promotes the club's vision and activities. They design campaigns, create content, and manage social media. Members develop communication, creativity, and teamwork skills. Each campaign is crafted to inspire and engage the audience. Marketing builds visibility, strengthens the club's image, and connects it with the community.
            </>
          }
          image3={marketing2}
          data3={rio12}
        />
        <Departement 
          title2='Planning Department' 
          description2={
            <>
            The Planning Department manages events, schedules, and logistics. They design strategies to achieve goals effectively. Planning ensures organization, coordination, and smooth execution. The department builds skills in leadership, problem-solving, and foresight. Their mission is to turn vision into successful reality.
            </>
          }
          image2={planing}
          data2={rio5}
        />
        <Departement2 
          title3='Production Department' 
          description3={
            <>
          The Video Editing Department manages stories, visuals, and sound. They turn raw footage into engaging and professional content. Video editors shape projects with creativity, precision, and style. The department builds skills in editing, effects, and communication. Their mission is to bring moments to life through film.
            </>
          }
          image3={edit1}
          data3={rio7}
        />
        <Departement 
          title2='Finance Department' 
          description2={
            <>
          The Finance Department manages budgets, resources, and expenses. They track all financial activities and ensure transparency. Finance plans fundraising, sponsorships, and sustainable growth. The department builds skills in management, strategy, and responsibility. Their mission is to secure stability and future success.
            </>
          }
          image2={finance}
          data2={rio11}
        />
        <Departement2 
          title3='Media Management Department' 
          description3={
            <>
          The Media Management Department focuses on organizing, planning, and overseeing all media-related activities within an organization. It ensures effective communication through digital platforms, social media, publications, and audiovisual content. The department manages branding strategies, media campaigns, and public relations to enhance visibility and engagement.
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
        } />
        
        <Route path="/register" element={
          <>
            <Closed/>
            <FooterRegister/>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;