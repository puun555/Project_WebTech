import FormPayPage from '../Payment/FormPayPage';
import PathPay from './PathPay';

import '../Payment/PaymentPage.css'

const Payment = () => {
    return(
        <div className="payment-card">
            <h1>Payment</h1>
            <PathPay/>
            <FormPayPage/>
        </div>
    );
}

export default Payment;