import './VdoPage.css'

const VdoPage = () =>{
    return (
        <div className='vdo-container'>
            <video className='vdo' autoPlay loop controls>
                <source src='vdo/vdo.mp4'></source>
            </video>
        </div>
    )
}
export default VdoPage
