import React, { useState } from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import Input from "../../components/UI/Input"
import { Link } from "react-router-dom"
import { login } from "../../actions";
import { useDispatch } from "react-redux";

/**
* @author
* @function Signin
**/

const Signin = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault()
    const user = { email, password }
    dispatch(login(user))
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
              {error && <span className='error-message'>{error}</span>}
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
              <span style={{ fontSize: '14px' }} ><Link to='/signup' >Forgot Password?</Link></span>
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