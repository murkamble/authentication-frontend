import React, { useState, useEffect } from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import Input from "../../components/UI/Input"
import { Link } from "react-router-dom"
import { login, isUserLoggedIn } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom'

/**
* @author
* @function Signin
**/

const Signin = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn())
    }
  }, [])

  const userLogin = async (e) => {
    e.preventDefault()
    const user = { email, password }
    dispatch(login(user))
  }

  if (auth.authenticate) {
    return <Redirect to={'/'} />
  }

  return (
    <div>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <h3>Signin</h3>
              </div>
              {auth.error && <span style={{ color: 'red' }} className='error-message'>{auth.error}</span>}
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
              <span style={{ fontSize: '14px' }} ><Link to='/signup' >Forgot Password</Link></span>
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
                <span style={{ fontSize: '14px' }} >Don't have an account? <Link to='/signup' >Signup</Link></span>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default Signin