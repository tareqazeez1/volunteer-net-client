import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { UserContext } from '../../App';
import NavBar from '../Navbar/NavBar';
import './Registration.css';






const Registration = () => {

    const [registration, setRegistration] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:5000/info?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setRegistration(data));


    }, [])

    const handleDeleteItem = (id) => {

        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <section>
            <NavBar></NavBar>

            {
                registration.map(reg =>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'></div>
                            <div className='col-md-4 singleItem'>
                                <Card style={{ width: '18rem' }}>

                                    <Card.Body style={{ backgroundColor: 'darkseagreen' }}>
                                        <Card.Title>{reg.event}</Card.Title>
                                        <Card.Text>
                                            {new Date(reg.registrationTime).toDateString('dd/MM/YYYY')}
                                        </Card.Text>
                                        <Button onClick={() => handleDeleteItem(reg._id)} variant="danger">Cancel</Button>
                                    </Card.Body>
                                </Card>





                            </div>
                            <div className='col-md-4'></div>

                        </div>
                    </div>


                )
            }


        </section>

    );
};

export default Registration;