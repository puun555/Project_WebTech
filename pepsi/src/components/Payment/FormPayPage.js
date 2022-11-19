import '../Payment/FormPayPage.css'


const FormPayPage = () => {
    return(
        <form className='pay-form'>
            <div className="name">
                <div className='name-input'>
                    <p>Firstname</p>
                    <input type="text"/>
                </div>
                <div className='name-input'>
                    <p>Lastname</p>
                    <input type="text"/>
                </div>
            </div>
            <div className="email">
                <p>Email</p>
                <input type="email"/>
            </div>
            <div className="phone">
                <p>Phone number</p>
                <input type='text'/>
            </div>
            <div className="address">
                <p>Address</p>
                <textarea rows='5' cols='55'/>
            </div>
            <div className="slip">
                <p>หลักฐานการชำระเงิน</p>
                <input id="flie-up" type="file" />
            </div>
            <a href='/purches'>
                <div className='butt'>
                    Submit
                </div>
            </a>
        </form>
    );
}

export default FormPayPage;