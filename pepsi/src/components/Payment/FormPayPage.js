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
                <label className='button-custom' for="flie-up">Upload</label>
                <input id="flie-up" type="file" />
            </div>

        </form>
    );
}

export default FormPayPage;