import React, { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import fakeData from '../../fakeData/fakeData';
import logo from '../../logos/Group 1329.png'
import './Register.css';

const Register = () => {

    const { cardName } = useParams();
    const [newDate, setNewDate] = useState(new Date())
    const routeChange = fakeData.find(cn => cn.name === cardName)

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory()

    const { register, handleSubmit } = useForm();




    const onSubmit = data => {
        history.push(`/registration/${loggedInUser.name}`)
        // console.log(data, "hello this is form")

        const userDetails = { ...loggedInUser, description: data, registrationTime: new Date(), event: routeChange.name }

        fetch('http://localhost:5000/addInfo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userDetails)

        })
            .then(res => res.json())
            .then(data => {

                if (data) {
                    alert('Congratulations! Successfully Registered')
                }

            })
    }


    return (
        <Row style={{ backgroundColor: '#F8FAFC', height: '650px' }}>
            <Col></Col>

            <div className="logoForm">
                <Link to="/"><img src={logo} className='routeLogo' alt="" /></Link>

                <Col className="formColumn">
                    <div className="formBody">
                        <Form onSubmit={handleSubmit(onSubmit)} className="from">
                            <h2 className='formTextField'>Register as a Volunteer</h2>
                            <Form.Group controlId="formGroup">
                                <Form.Control className="inputText" type="text" defaultValue={loggedInUser.name} ref={register({ required: true })} />

                                <Form.Control className="inputText" type="email" defaultValue={loggedInUser.email} ref={register({ required: true })} />

                                <Form.Control className="inputText" type="date" selected={newDate} onChange={dt => setNewDate(dt)} placeholder="Date" required />

                                <Form.Control className="inputText" type="text" placeholder="Description" ref={register({ required: true })} />

                                <Form.Control className="inputText" type="text" defaultValue={routeChange.name} ref={register({ required: true })} />

                            </Form.Group>
                            <Button className='formButton' variant="primary" size="lg" block type="submit">Registration</Button>
                        </Form>
                    </div>


                </Col>
            </div>




            <Col></Col>
        </Row>
    );
};

export default Register;