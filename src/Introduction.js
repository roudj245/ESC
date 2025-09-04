import './introduction.css'
import fleche from './assets/fleche.png'


function Introduction({Titre,RIGL}){
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
        <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae</p>
        </div>
        </div>


    );


}
export default Introduction