import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './navFilterItem.css'
import { useState } from 'react';
const NavFilterItem = (props)=>{
    const [searchText, setSearchText] = useState('')
    const onSubmit = ()=>{
        props.getSearch(searchText)
    }
    return (
        <div className='coverform'>
            <Form>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"  ></InputGroup.Text>
                        <Form.Control
                        placeholder="What do you want"
                        aria-describedby="basic-addon2"
                        value={searchText}
                        onChange ={(event)=>setSearchText(event.target.value)}
                    />
                    <Button onClick={onSubmit}>Search</Button>
                 </InputGroup>

            </Form>
        </div>
    )
}
export default NavFilterItem