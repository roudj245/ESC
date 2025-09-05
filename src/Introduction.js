import './introduction.css'
import fleche from './assets/fleche.png'


function Introduction({Titre,RIGL,fa9ra}){
    return(
        <div className='introduction'>
            <div className='left2'>
                <h1>{Titre}</h1>
                <div className='text2'>
                    <p>{RIGL}</p>
                    <img src ={fleche} alt =''></img>
                </div>
            </div>
        <div className='ih'>
        <p>{fa9ra}</p>
        </div>
        </div>


    );


}
export default Introduction