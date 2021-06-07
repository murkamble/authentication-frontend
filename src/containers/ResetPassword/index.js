import React, { useState, useEffect } from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import Input from "../../components/UI/Input"
import { Link } from "react-router-dom"
import { isUserLoggedIn, resetPassword as _resetPassword } from "../../actions"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from 'react-router-dom'

/**
* @author
* @function ResetPassword
**/

const ResetPassword = ({ match }) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const resetPasswordHandle = async (e) => {
        e.preventDefault()
        setTimeout(() => setError(''), 5000)
        if (!password) return setError('Please, Enter Password.')
        if (!confirmPassword) return setError('Please, Enter Confirm Password.')
        if (password !== confirmPassword) {
            setPassword('')
            setConfirmPassword('')
            return setError('Passwords do not match')
        }
        dispatch(_resetPassword(password, match.params ))
    }

    return (
        <div>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={resetPasswordHandle}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <h3>Reset Password</h3>
                            </div>
                            {error && <span style={{ color: 'red' }}>{error}</span>}
                            {auth.error && <span style={{ color: 'red' }}>{auth.error}</span>}
                            {auth.message && <span style={{ color: 'green' }} >{auth.message} <Link to='/signin'>Login</Link></span>}

                            <Input
                                label="Password"
                                placeholder="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Input
                                label="Confirm Password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                type="password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
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


export default ResetPassword