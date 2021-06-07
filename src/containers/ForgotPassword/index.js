import React, { useState, useEffect } from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import Input from "../../components/UI/Input"
import { Link } from "react-router-dom"
import { isUserLoggedIn, forgotPassword as _forgotPassword } from "../../actions"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from 'react-router-dom'
import axios from "../../helpers/axios"

/**
* @author
* @function ForgotPassword
**/

const ForgotPassword = (props) => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!auth.authenticate) {
            dispatch(isUserLoggedIn())
        }
    }, [])

    const forgotPasswordHandle = async (e) => {
        e.preventDefault()
        dispatch(_forgotPassword(email))
    }

    return (
        <div>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={forgotPasswordHandle}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <h3>Forgot Password</h3>
                            </div>
                            {auth.error && <span style={{ color: 'red' }} className='error-message'>{auth.error}</span>}
                            {auth.message && <span style={{ color: 'green' }} >{auth.message}</span>}
                            <p>
                                Please enter the email address you register your account with.
                                We will send you reset password confirmation to this email
                            </p>
                            <Input
                                label="Email Address"
                                placeholder="Email Address"
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div
                                style={{
                                    margin: '10px',
                                }}
                            >
                                <Button variant="primary" type="submit">Send Email</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default ForgotPassword