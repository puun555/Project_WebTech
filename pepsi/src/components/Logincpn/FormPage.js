import '../Logincpn/FormPage.css'
import { useState, useEffect } from 'react'

const FormPage = () => {

    const [username, setUsername] = useState('');
    const [loginState, setLoginState] = useState(0);
    
    console.log(loginState)
    const handleInput = event => {
        setUsername(event.target.value);
    };

    const submition = () => {
        
        setLoginState(1)
    }
    useEffect(() => {
        localStorage.setItem('login', JSON.stringify(loginState));
      }, [loginState]);
    console.log(loginState)
        return (
            <div className='box-login'>
                <form className='form-page'>
                    <h1>Who wants <span>Drinks?</span></h1>
                    <input className='un' type='text' placeholder='Username' onChange={handleInput} /><br/>
                    <input type='password' placeholder='Password' /><br/>
                    <a  type = 'button' onClick={submition}>Login</a>
                </form>
            </div>
        );
}

export default FormPage;