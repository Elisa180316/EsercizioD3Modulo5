import React from 'react'
import {Container, Row, Col} from 'react-bootstrap/';
import { colOne, colTwo, colThree } from '../data/footerLinks'
import '..//Styles/footer.css'


const Footer = () => {
    return (
        <Container className='footer'>
            <Row>
                <Col>
                    <ul>
                        {
                            colOne.map((item) => {
                                return (
                                    <li key={item.title}><a href={item.href} > {item.title} </a></li>
                                )
                            })
                        }
                    </ul>
                </Col>
                <Col>
                    <ul>
                        {
                            colTwo.map((item) => {
                                return (
                                    <li key={item.title}><a href={item.href} > {item.title} </a></li>
                                )
                            })
                        }
                    </ul>
                </Col>
                <Col>
                    <ul>
                        {
                            colThree.map((item) => {
                                return (
                                    <li key={item.title} > {item.title} </li>
                                )
                            })
                        }
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;