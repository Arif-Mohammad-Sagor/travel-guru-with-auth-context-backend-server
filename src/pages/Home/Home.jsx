import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavWithSearch from '../shared/Navbar/NavWithSearch'

const Home = () => {
  return (
      <div>
          <Container>
              <Row><NavWithSearch></NavWithSearch> </Row>
      <Row>
        <Col sm={8}>sm=8</Col>
        <Col sm={4}>sm=4</Col>
      </Row>

    </Container>
    </div>
  )
}

export default Home