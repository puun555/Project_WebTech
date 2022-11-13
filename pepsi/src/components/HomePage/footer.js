import './footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-header'>
                <h2>KUMI SHOP</h2>
            </div>
            <div>
                Questions?
            </div>
            <div className='footer-centerbottom'>
                <div>
                    Home
                </div>
                <div className='footer-services'>
                    Services
                </div>
                <div className='footer-services'>
                    About
                </div>
            </div>
            <div>
                <a href=""
                    className="youtube social">
                    <img className='icon' src='socials_icon/youtube.png'></img>
                </a>
                <a href=""
                    className="facebook social">
                    <img className='icon' src='socials_icon/facebook.png'></img>
                </a>
                <a href="" 
                    className="twitter social">
                    <img className='icon' src='socials_icon/twitter.png'></img>
                </a>
                <a href=""
                    className="instagram social">
                    <img className='icon' src='socials_icon/instagram.png'></img>
                </a>
                <a href=""
                    className="discord social">
                    <img className='icon' src='socials_icon/discord.png'></img>
                </a>
                <a href=""
                    className="tiktok social">
                    <img className='icon' src='socials_icon/tiktok.png'></img>
                </a>
            </div>
        </div>
    )
}

export default Footer