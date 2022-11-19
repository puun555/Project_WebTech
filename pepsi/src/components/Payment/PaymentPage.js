import FormPayPage from '../Payment/FormPayPage';
import PathPay from './PathPay';
import Swal from 'sweetalert2';
import '../Payment/PaymentPage.css'
import Navbar from '../HomePage/navbar';
const Payment = () => {
    return(
        <>
            <Navbar></Navbar>
            <div className="payment-card">
                <h1>Payment</h1>
                <PathPay/>
                <FormPayPage/>
                <a className="abuy"role='button'
                    onClick={() => Swal.fire({
                                title: 'คุณได้สั้งซื้อเรียบร้อยแล้ว',
                                text: 'เราจะรีบนำพัสดุไปส่ง!',
                                icon: 'success',
                            })}
                    >
                    สั้งซื้อสินค้า
                </a>
            </div>
        </>
    );
}

export default Payment;