import React from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import Input from "../../components/UI/Input"
import { Link } from "react-router-dom"

/**
* @author
* @function Signup
**/

const Signup = (props) => {
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
                <h3>Signup</h3>
              </div>
              {/* {error && <span className='error-message'>{error}</span>} */}
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    value=""
                    type="text"
                    onChange={() => { }}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    value=""
                    type="text"
                    onChange={() => { }}
                  />
                </Col>

              </Row>

              <Input
                label="Date Of Birth"
                placeholder="dd-MM-yyyy"
                value=""
                type="text"
                onChange={() => { }}
              />

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

              <Input
                label="Confirm Password"
                placeholder="Confirm Password"
                value=""
                type="password"
                onChange={() => { }}
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