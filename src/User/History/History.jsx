import React from 'react';
import { Container, Row, Col, Image, Button, Table, Tabs, Tab } from 'react-bootstrap';
import UserHeader from '../Common/UserHeader';
import Graph from '../UserHome/Graph';
import Graphimg from '../../asset/image/Group 62.png'
import Footer from '../../Common/Footer'

export default function History() {
    return (
        <>
            <UserHeader />
            <Graph />
            <Container>
                <Row>
                    <Col lg={{ span: 10, offset: 1 }} md={12}>
                        <div className='histroy_title mt-5'>
                            <h1 >History</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                   
                   <Col lg={{ span: 10, offset: 1 }} md={12} className=" mt-3 history_tabs">
                       <Tabs defaultActiveKey="TRANSUNION" id="uncontrolled-tab-example" className="mb-3">
                           <Tab eventKey="TRANSUNION" title="TRANSUNION">
                               <div className='history_sec2_img mt-2'>
                                   <Image src={Graphimg} className='graphimg img-fluid' />
                                   <div className='graph_content'>
                                       <p>Before we can track your scores we need to review your reports!</p>
                                       <Button  >LINK MY REPORTS</Button>
                                   </div>
                               </div>
                           </Tab>
                           <Tab eventKey="EXPERIAN" title="EXPERIAN">
                               <div className='history_sec2_img mt-2'>
                                   <Image src={Graphimg} className='graphimg img-fluid' />
                                   <div className='graph_content'>
                                       <p>Before we can track your scores we need to review your reports!</p>
                                       <Button >LINK MY REPORTS</Button>
                                   </div>
                               </div>
                           </Tab>
                           <Tab eventKey="EQUIFAX" title="EQUIFAX" >
                               <div className='history_sec2_img mt-2'>
                                   <Image src={Graphimg} className='graphimg img-fluid' />
                                   <div className='graph_content'>
                                       <p>Before we can track your scores we need to review your reports!</p>
                                       <Button >LINK MY REPORTS</Button>
                                   </div>
                               </div>
                           </Tab>
                       </Tabs>

                   </Col>
               </Row>
            </Container>
     
            <section className='mb-5'>
                <Container>
                    <Row>
                        <Col lg={{ span: 10, offset: 1 }} md={12}>
                            <div className='history_sec3_title mt-5'>
                                <h1> Reports</h1>
                            </div>
                            <div className="history_sec3_item">
                              
                                <Table bordered>
                                    <thead>
                                        <tr>
                                            <th scope="col">Date</th>
                                            <th scope="col">Transunion</th>
                                            <th scope="col">Experian</th>
                                            <th scope="col">Equifax</th>
                                        </tr>
                                    </thead>

                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </>
    )
}
