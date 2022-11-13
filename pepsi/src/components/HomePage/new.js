import './new.css'
const New = () => {
    return (
        <div className='new-container'>
            <div className='new-left'>
                <div>N</div>
                <div>E</div>
                <div>W</div>
            </div>
            <div className='new-right'>
                <div className='new-img'>
                    <img className='newimg' src='img_product\SCHWEPPES RASPBERRY GINGER ALE.png'></img>
                    <div className='new-price'>19 Baht</div>
                </div>
                <div className='new-text'>
                    <div className='new-text-header'>SCHWEPPES RASPBERRY GINGER ALE</div>
                    <div className='new-text-detail'>Somethings here</div>
                </div>
            </div>
        </div>
    )
}

export default New