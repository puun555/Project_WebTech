import '../Logincpn/FormPage.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
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
        if (username.length === 0 || password.length === 0) {
            Swal.fire({
                title: 'Your Username or Password incorrect',
                text: '',
                icon: '',
            })
        }
        else {
            setLoginState(1)
            Swal.fire({
                title: 'Login Success!\nEnjoy Your Shopping!',
                text: '',
                icon: 'success',
            })
        }
    }
    const items = JSON.parse(localStorage.getItem('items'));    
    const [login, setLogin] = useState(localStorage.getItem('login'))
    useEffect(() => {
        localStorage.setItem('login', JSON.stringify(loginState));
    }, [loginState]);
   
    console.log(loginState)
        return (
            <div className='box-login'>
                <form className='form-page'>
                    <h1>Who wants <span>Drinks?</span></h1>
                    <div className='input-box'>
                        <p>Username</p>
                        <input className='un' type='text' onChange={handleInput} />
                    </div>
                    <div className='input-box'>
                        <p>Password</p>
                        <input type='password' onChange={handleInput2} />
                    </div>
                    <div className='buttbox'>
                        <Link path="/register" onClick={submition} className="to-reg">Register</Link>
                        <Link path="/purches" onClick={submition} className="a">Login</Link>
                    </div>
                    {/* <a href="/project/it1/test_mai/#/purches" ></a> */}
                </form>
            </div>
        );
}

export default FormPage;