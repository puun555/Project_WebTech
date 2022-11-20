import FormPayPage from '../Payment/FormPayPage';
import PathPay from './PathPay';
import Swal from 'sweetalert2';
import '../Payment/PaymentPage.css'
import Navbar from '../HomePage/navbar';
import MyOffcanvas from '../Page/Offcanvas';
const Payment = () => {
    return(
        <>
            <Navbar></Navbar>
            <div className="payment-card">
                <h1>Payment</h1>
                <PathPay/>
                <FormPayPage/>
                <MyOffcanvas></MyOffcanvas>
            </div>
        </>
    );
}

export default Payment;