import FormPayPage from '../Payment/FormPayPage';
import PathPay from './PathPay';
import Swal from 'sweetalert2';
import '../Payment/PaymentPage.css'
import Navbar from '../HomePage/navbar';
const Payment = () => {
    return(
        <>
            <Navbar></Navbar>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <div className="payment-card">
                    <h1>Payment</h1>
                    <PathPay/>
                    <FormPayPage/>
                </div>
            </div>
        </>
    );
}

export default Payment;