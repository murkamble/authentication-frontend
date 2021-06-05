import React from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import Input from "../../components/UI/Input"
import { Link } from "react-router-dom"

/**
* @author
* @function Signin
**/

const Signin = (props) => {
  return (
    <div>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <h3>Signin</h3>
              </div>
              {/* {error && <span className='error-message'>{error}</span>} */}
              <Input
                label="Email Address"
                placeholder="Email Address"
                value=""
                type="email"
                onChange={() => { }}
              />
              <Input
                label="Password"
                placeholder="Password"
                value=""
                type="password"
                onChange={() => { }}
              />
              <Link to="" style={{ fontSize: '12px' }}>Forgot Password ?</Link>
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