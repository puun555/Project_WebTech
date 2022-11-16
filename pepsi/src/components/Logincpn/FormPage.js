import '../Logincpn/FormPage.css'
import { useState } from 'react'

const FormPage = () => {
    
    const [username, setUsername] = useState('');
    const [loginState, setLoginState] = useState(0);

    console.log(loginState)

    const handleInput = event => {
        setUsername(event.target.value);
    };

    const submition = () => {
        
        console.log(username)
        setLoginState(1)
    }

        return (
            <div className='box'>
                <form className='form-page'>
                    <h1>Who wants <span>Drinks?</span></h1>
                    <input className='un' type='text' placeholder='Username' onChange={handleInput} /><br/>
                    <input type='password' placeholder='Password' /><br/>
                    <button type = 'button' onClick={submition}>Login</button>
                </form>
            </div>
        );
}

export default FormPage;