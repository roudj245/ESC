import './section.css'


function Section({title1 , description , image , link}){
    return(
    <div className='section'>
        <img src={image} alt={title1}></img>
            <div className='texts'>
                <h2>{title1}</h2>
                <a href ={link}><p>{description}</p></a>
            </div>

    </div>
    );
}
export default Section