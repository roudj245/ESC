import './section.css'


function Section({title1 , description , image}){
    return(
    <div className='section'>
        <img src={image} alt={title1}></img>
            <div className='texts'>
                <h2>{title1}</h2>
                <p>{description}</p>

            </div>

    </div>
    );
}
export default Section