import './footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-header'>
                <h2>KUMI SHOP</h2>
            </div>
            <div className='hovercolor'>
                Questions?
            </div>
            <div className='footer-centerbottom'>
                <div className='hovercolor'>
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
                    className="youtube">
                    <img className='icon' src='socials_icon/youtube.png'></img>
                    <img className='icon-hover' src='socials_icon/youtube_hover.png'></img>
                </a>
                <a href=""
                    className="facebook">
                    <img className='icon' src='socials_icon/facebook.png'></img>
                    <img className='icon-hover' src='socials_icon/facebook_hover.png'></img>
                </a>
                <a href="" 
                    className="twitter">
                    <img className='icon' src='socials_icon/twitter.png'></img>
                    <img className='icon-hover' src='socials_icon/twitter_hover.png'></img>
                </a>
                <a href=""
                    className="instagram">
                    <img className='icon' src='socials_icon/instagram.png'></img>
                    <img className='icon-hover' src='socials_icon/instagram_hover.png'></img>
                </a>
                <a href=""
                    className="discord">
                    <img className='icon' src='socials_icon/discord.png'></img>
                    <img className='icon-hover' src='socials_icon/discord_hover.png'></img>
                </a>
                <a href=""
                    className="tiktok">
                    <img className='icon' src='socials_icon/tiktok.png'></img>
                    <img className='icon-hover' src='socials_icon/tiktok_hover.png'></img>
                </a>
            </div>
        </div>
    )
}

export default Footer