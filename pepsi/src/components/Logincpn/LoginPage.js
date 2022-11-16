import '../Logincpn/LoginPage.css';
import FormPage from './FormPage'
import InfoPage from './InfoPage';

const LoginPage = () => {
    return (
        <div className='page-login'>
            <div className="card-login">
                <InfoPage/>
                <FormPage/>
            </div>
        </div>
    );
}

export default LoginPage;