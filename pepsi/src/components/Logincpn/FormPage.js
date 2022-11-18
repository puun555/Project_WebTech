import '../Logincpn/FormPage.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'

const FormPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginState, setLoginState] = useState(0);
    
    const handleInput = event => {
        setUsername(event.target.value);
    };
    const handleInput2 = event => {
        setPassword(event.target.value);
    };

    const submition = () => {
        console.log(username.length)
        if (username.length == 0 || password.length == 0) {
            alert("Please Enter your Name")
        }
        else {
            setLoginState(1)
        }
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
                    <input type='password' placeholder='Password' onChange={handleInput2} /><br/>
                    <a className='a' href='/purches' type = 'submit' onClick={submition}>Login</a>
                </form>
            </div>
        );
}

export default FormPage;