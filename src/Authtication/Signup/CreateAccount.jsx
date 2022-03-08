import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import Footer from '../../Common/Footer';
import AuthHeader from '../AuthCommon/AuthHeader';
import Step2 from './Step2';
import { Link, useNavigate } from 'react-router-dom';
import $ from 'jquery';
import { CREATE, TREACKIN_TOKEN } from '../../Url';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';






export default function Carosel() {
    const [clientKey, setClientKey] = useState("cf2bc25b-5eaa-407e-9783-ae6498db4eb4");
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [sponsorcode, setSponsorCode] = useState("");
    let Navigate = useNavigate()

    useEffect(() => {
        try {
            setLoading(true)
            const data = axios.get(TREACKIN_TOKEN)
                .then(resp => {
                    sessionStorage.setItem("form_data", JSON.stringify(resp.data))
                    setLoading(false)
                    $("#firstName").hide();
                    $("#middleName").hide();
                    $("#lastName").hide();
                    $("#email1").hide();
                    $("#emailcheck").hide();
                    $("#password1").hide();
                    $("#password2").hide();
                })
                .catch(error => {
                    console.log("error", error)
                })

        } catch (error) {
            console.log("error", error)
        }
    }, []);


    $(".validate").focus(function () {
        $("#firstName").hide();
        $("#middleName").hide();
        $("#lastName").hide();
        $("#email1").hide();
        $("#emailcheck").hide();
        $("#password1").hide();
        $("#password2").hide();

    })


    const submitHander = () => {


        const form_data = JSON.parse(sessionStorage.getItem("form_data"));
        // console.log("createAccount form data", form_data)

        const article = {
            clientKey: clientKey,
            trackingToken: form_data.trackingToken,
            firstName: name,
            middleName: middleName,
            lastName: lastName,
            email: email,
            password: password,
            sponsorCodeString: sponsorcode
        };


        if (article.clientKey === undefined || article.clientKey === null || article.clientKey === "") {
            return alert("Client Key required")

        }
        if (article.trackingToken === undefined || article.trackingToken === null || article.trackingToken === "") {
            return alert("Tracking Token required")

        }
        if (article.firstName === undefined || article.firstName === null || article.firstName === "") {
            return $("#firstName").show()

        }
        if (article.middleName === undefined || article.middleName === null || article.middleName === "") {
            return $("#middleName").show()
        }
        if (article.lastName === undefined || article.lastName === null || article.lastName === "") {
            return $("#lastName").show()
        }
        if (article.email === undefined || article.email === null || article.email === "") {
            return $("#email1").show()
        }
        if (article.password === undefined || article.password === null || article.password === "") {
            return $("#password1").show()
        }

        $.ajax({
            type: "POST",
            url: CREATE,
            data: article,
            success: function (response) {

                const data = {
                    customerToken: response.customerToken,
                    PID: response.PID,
                    isFinancialObligationMet: response.isFinancialObligationMet,
                    planType: response.planType,
                    clientKey: clientKey,
                    trackingToken: form_data.trackingToken,
                    firstName: name,
                    middleName: middleName,
                    lastName: lastName,
                    email: email,

                }
                sessionStorage.setItem("form_data", JSON.stringify(data))

                Navigate("/addProfile");
            },
            error: function (error) {
                console.log("errordfdf", error.responseJSON.errors[0].code);

                if (error.responseJSON.errors[0].code === 'PASSWORD_LENGTH') {
                    $("#password2").show();
                }
                if (error.responseJSON.errors[0].code === "EMAIL_REQUIRED") {
                    $("#email1").show();
                }
                if (error.responseJSON.errors[0].code === "PASSWORD_REQUIRED") {
                    $("#password1").show();
                }
                if (error.responseJSON.errors[0].code === "EMAIL_USED") {
                    toast.error('An account already exists with the email you entered. Please login to view your credit report and scores', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    // alert("An account already exists with the email you entered. Please login to view your credit report and scores")
                }
            }
        });

    }



    return (
        <>
            <AuthHeader text={"Already a member"} action={"Log In"} url={"/login"} />
            {loading ?
                <div className='spinner'>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>

                :
                <section className="login_section">
                    <Container className='mt-3'>
                        <Row>
                            <Col lg={{ span: 10, offset: 1 }} md={12}>


                                <Row>
                                    <Col lg={4} md={4} className="px-0">
                                        <div className="singupform">
                                            <h4>Creting your account only takes a few seconds.</h4>
                                            <p>Let's start with some basic info.</p>
                                        </div>
                                    </Col>
                                    <Col lg={8} md={8} className="px-0">
                                        <div className='sigup_form'>

                                            <Step2 progress={0} style={{}} />
                                            <div className="p-3">

                                                <Form.Group as={Col} >
                                                    <Form.Label className="mt-3">First Name</Form.Label>
                                                    <Form.Control
                                                        className='validate'
                                                        type="text"
                                                        placeholder="First Name"
                                                        name="first_name"

                                                        onChange={(e) => setName(e.target.value)}
                                                        required
                                                    />
                                                </Form.Group>
                                                <p className='error' id="firstName"> *Enter Your FirstName</p>

                                                <Form.Group as={Col} >
                                                    <Form.Label className="mt-3">Middle Name</Form.Label>
                                                    <Form.Control
                                                        className='validate'
                                                        type="text"
                                                        placeholder="Middle Name"
                                                        name="middle_name"

                                                        onChange={(e) => setMiddleName(e.target.value)}
                                                        required
                                                    />
                                                </Form.Group>
                                                <p className='error' id="middleName"> *Enter Your MiddleName</p>


                                                <Form.Group as={Col} >
                                                    <Form.Label className="mt-3" >Last Name</Form.Label>
                                                    <Form.Control
                                                        className='validate'
                                                        type="text"
                                                        placeholder="Last Name"
                                                        name="last_name"
                                                        // type="text"
                                                        onChange={(e) => setLastName(e.target.value)}
                                                        required
                                                    />
                                                </Form.Group>
                                                <p className='error' id="lastName"> *Enter Your LastName</p>


                                                <Form.Label className="mt-3">Email</Form.Label>
                                                <Form.Control
                                                    className='validate'
                                                    type="email"
                                                    placeholder="Your Email"
                                                    name="email"
                                                    id="email"
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                                <p className='error' id="email1">*Enter Valid Email</p>
                                                <p className='error' id="emailcheck">*Email already exist</p>

                                                <Form.Label className="mt-3">Password</Form.Label>
                                                <Form.Control
                                                    className='validate'
                                                    type="password"
                                                    placeholder="Your Password"
                                                    name="password"
                                                    id="password"
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                                <p className='error' id="password1"> *Enter Password</p>
                                                <p className='error' id="password2"> *Passwords must be between 8 and 100 characters</p>

                                                <Form.Label className="mt-3">Sponsor Code</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Sponsor Code"
                                                    name="sponsorcode"
                                                    id="sponsorcode"
                                                    onChange={(e) => setSponsorCode(e.target.value)}
                                                />


                                                <div className='contactform_next'>
                                                    <Button className='signBtn btn-dark mt-3' onClick={submitHander} >Next </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            }
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Footer />
        </>
    )
}