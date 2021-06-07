import React, { useState, useEffect } from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import Input from "../../components/UI/Input"
import { useDispatch, useSelector } from "react-redux"
import { Redirect, Link } from 'react-router-dom'
import { signup } from "../../actions"

/**
* @author
* @function Signup
**/

const Signup = (props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('');
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
  }, []);

  if (auth.authenticate) {
    return <Redirect to={'/'} />
  }


  const userSignup = (e) => {
    e.preventDefault()
    const user = { firstName, lastName, dob, email, password }
    setTimeout(() => setError(''), 5000)
    if(!firstName) return setError('Please, Enter First Name.')
    if(!lastName) return setError('Please, Enter Last Name.')
    if(!dob) return setError('Please, Enter Date of Birth.')
    if(!email) return setError('Please, Enter Email.')
    if(!password) return setError('Please, Enter Password.')
    if(!confirmPassword) return setError('Please, Enter Confirm Password.')
    if (password !== confirmPassword) {
      setPassword('')
      setConfirmPassword('')
      return setError('Passwords do not match')
    }
    dispatch(signup(user))
  }

  return (
    <div>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSignup}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <h3>Signup</h3>
              </div>
              {auth.error && <span style={{ color: 'red' }} className='error-message'>{auth.error}</span>}
              <br/>
              {error && <span style={{ color: 'red' }} className='error-message'>{error}</span>}
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    value={firstName}
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    value={lastName}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>

              </Row>

              <Input
                label="Date Of Birth"
                placeholder="dd-MM-yyyy"
                value={dob}
                type="text"
                onChange={(e) => setDob(e.target.value)}
              />

              <Input
                label="Email Address"
                placeholder="Email Address"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

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
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Button variant="primary" type="submit">Submit</Button>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span style={{ fontSize: '14px' }} >Already have an account? <Link to='/signin' >Signin</Link></span>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default Signup