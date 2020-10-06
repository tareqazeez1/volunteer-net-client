import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';
import './Login.css';


firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',   
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    

    const googleProvider = new firebase.auth.GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, email } = res.user;
                const newLoggedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email
                }
                setUser(newLoggedInUser);
                setLoggedInUser(newLoggedInUser);
                history.replace(from);
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    return (
        <>
                <Row style={{ backgroundColor: 'whitesmoke', height: '300px'}}>
            <Col></Col>

            <div>

            <Link to="/" className='logo'>
                <img className="loginLogo" src={logo} alt="" /></Link>
                <Col className="googleSign">

                <h2 className="loginText">Login</h2>
                
                <Button className="block-example border border-info rounded-pill" variant="light" size="lg" block onClick={handleGoogleSignIn}>Continue With Google</Button>


                </Col>
            </div>
            
            <Col></Col>

        </Row>
            
        </>
    );
};

export default Login;