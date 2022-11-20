import './InfoReg.css'


const InfoReg = () => {
    return(
        <div className="username">
            <h1>Register</h1>
            <div className='username-input setm'>
                <p className='text'>Username</p>
                <input type="text"/>
            </div>
            <div className='password-input setm'>
                <p className='text'>Password</p>
                <input type="text"/>
            </div>
            <div className='password-input setm'>
                <p className='text'>Confirm Password</p>
                <input type="text"/>
            </div>
            <a className='a-reg'>Lets go!!</a>
        </div>
    );
}

export default InfoReg