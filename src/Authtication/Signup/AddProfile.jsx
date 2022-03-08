import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import Footer from '../../Common/Footer';
import AuthHeader from '../AuthCommon/AuthHeader';
import Step2 from './Step2';
import { UPDATE_IDENTITY } from '../../Url';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';




export default function Carosel() {
    const [socialSecurity, setSocialSecurity] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [steetAddress, setSteetAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");


    const form_data = JSON.parse(sessionStorage.getItem("form_data"));
    const userName = form_data.firstName + " " + form_data.middleName + " " + form_data.lastName;
    let Navigate = useNavigate()

    // const ssnPartial = socialSecurity.toString();
    var newph1 = socialSecurity.slice(0, 2);
    var newph2 = socialSecurity.slice(2, 5);
    var newph3 = socialSecurity.slice(5, 9);
    var newph = newph1 + "-" + newph2 + "-" + newph3;
    console.log("newph", newph)

    const partial = newph.split('-');
    const newpartialssn = partial[2]

    var newdt = birthDate.split('-')
    const newdtformant = newdt[1] + "/" + newdt[2] + "/" + newdt[0]
    console.log("newdtformant", newdtformant)

    useEffect(() => {
        $("#socialsecurity").hide();
        $("#birthdate").hide();
        $("#steetaddress").hide();
        $("#city").hide();
        $("#state").hide();
        $("#zip").hide();
        $("#phonenumber").hide();
    }, []);

    $(".validate").focus(function () {
        $("#socialsecurity").hide();
        $("#birthdate").hide();
        $("#steetaddress").hide();
        $("#city").hide();
        $("#state").hide();
        $("#zip").hide();
        $("#phonenumber").hide();
    })


    const submitHander = () => {

        const article = {
            clientKey: form_data.clientKey,
            trackingToken: form_data.trackingToken,
            customerToken: form_data.customerToken,
            firstName: form_data.firstName,
            middleName: form_data.middleName,
            lastName: form_data.lastName,
            homePhone: phoneNumber,
            "identity.ssn": newph,
            "identity.ssnPartial": newpartialssn,
            "identity.birthDate": newdtformant,
            "homeAddress.state": state,
            "homeAddress.city": city,
            "homeAddress.street": steetAddress,
            "homeAddress.zip": zip,
        }
        var address = {
            "identity.ssn": newph,
            "identity.ssnPartial": newpartialssn,
            "identity.birthDate": newdtformant,
            "homeAddress.state": state,
            "homeAddress.city": city,
            "homeAddress.street": steetAddress,
            "homeAddress.zip": zip,
        }


        sessionStorage.setItem("address", JSON.stringify(address))

        if (article.clientKey === undefined || article.clientKey === null || article.clientKey === "") {
            return alert("Client Key required")
        }
        if (article.trackingToken === undefined || article.trackingToken === null || article.trackingToken === "") {
            return alert("Tracking Token required")
        }
        if (article["identity.ssn"] === undefined || article["identity.ssn"] === null || article["identity.ssn"] === "" || article["identity.ssn"] === "--") {
            return $("#socialsecurity").show()
        }
        if (article["identity.birthDate"] === "undefined/undefined/" || article["identity.birthDate"] === null || article["identity.birthDate"] === "") {
            return $("#birthdate").show()
        }

        if (article["homeAddress.street"] === undefined || article["homeAddress.street"] === null || article["homeAddress.street"] === "") {
            return $("#steetaddress").show()
        }

        if (article["homeAddress.state"] === undefined || article["homeAddress.state"] === null || article["homeAddress.state"] === "") {
            return $("#state").show()
        }
        if (article["homeAddress.city"] === undefined || article["homeAddress.city"] === null || article["homeAddress.city"] === "") {
            return $("#city").show()
        }

        if (article["homeAddress.zip"] === undefined || article["homeAddress.zip"] === null || article["homeAddress.zip"] === "") {
            return $("#zip").show()
        }
        if (article.homePhone === undefined || article.homePhone === null || article.homePhone === "") {
            return $("#phonenumber").show()
        }





        $.ajax({
            type: "POST",
            url: UPDATE_IDENTITY,
            data: article,
            success: function (response) {

                console.log("response", response)

                Navigate("/securityquestion")


            },
            error: function (error) {
                // console.log("errordfdf", error.responseJSON.errors[0].code);

                if (error.responseJSON.errors[0].code === 'BIRTHDATE_INVALID') {
                    toast.error('Please check that birth date is correct. You must be at least 18 to be a member.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                }

                if (error.responseJSON.errors[0].code === 'BIRTHDATE_FORMAT') {
                    // alert("Please enter birth date of the format MM/DD/YYYY")
                    toast.error('Please enter birth date of the format MM/DD/YYYY', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                }
                if (error.responseJSON.errors[0].code === 'SSN_USED') {
                    // alert("An account under s*******s@gmail.com already exists with the SSN you entered. Please login to view your credit report and scores.")
                    toast.error('An account already exists with the SSN you entered. Please login to view your credit report and scores.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                if (error.responseJSON.errors[0].code === 'SSN_NO_MATCH') {

                    document.getElementById("nextbtn").click()

                }
                if (error.responseJSON.errors[0].code === 'CITY_REQUIRED') {
                    // alert("You must enter a city")
                    toast.error('You must enter a city', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                }
                if (error.responseJSON.errors[0].code === 'STATE_REQUIRED') {
                    // alert("You must enter a state")
                    toast.error('You must enter a state', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                }
                if (error.responseJSON.errors[0].code === 'FIELD_INVALID_CHARACTERS') {
                    // alert("This field contains invalid characters")
                    toast.error('This field contains invalid characters', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                }
                if (error.responseJSON.errors[0].code === 'FIELD_LENGTH_EXCEEDED') {
                    // alert("The data is too long for this field")
                    toast.error('The data is too long for state field', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                }
                if (error.responseJSON.errors[0].code === 'INVALID_ZIP') {
                    // alert("You must enter a zip")
                    toast.error('Invalid ZIP code, must be 5 digits', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                }
                if (error.responseJSON.errors[0].code === 'ZIP_REQUIRED') {
                    // alert("You must enter a zip")
                    toast.error('You must enter a zip', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                }
                if (error.responseJSON.errors[0].code === 'ZIP_LOOKUP_FAILED') {
                    // alert("We couldn't match the zip code you entered to a valid City/State combination")
                    toast.error('We could not match the zip code you entered to a valid City/State combination', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                }
                if (error.responseJSON.errors[0].code === 'INVALID_HOME_PHONE') {
                    // alert("Invalid phone format, must be 10 digits")
                    toast.error('Invalid phone format, must be 10 digits', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                }
                if (error.responseJSON.errors[0].code === 'INVALID_PARTIAL_SSN') {
                    // alert("An invalid partial SSN field was encountered.")
                    toast.error('An invalid partial SSN field was encountered.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                }

            }
        });
    }


    return (
        <>
            <AuthHeader text={"Already a member"} action={"Log In"} url={"/login"} />

            <section className="login_section">
                <Container className='mt-3'>
                    <Row>
                        <Col lg={{ span: 10, offset: 1 }} md={12}>

                            <Row>
                                <Col lg={4} md={4} className="px-0">
                                    <div className="singupform">
                                        <h4>Great job,
                                            Username!</h4>
                                        <p>You're almost done.</p>
                                        <p>What contact info would you like the credit bureaus to use?</p>
                                    </div>
                                </Col>
                                <Col lg={8} md={8} className="px-0">
                                    <div className='sigup_form'>
                                        <Step2 progress={1} />
                                        <div className="p-3">

                                            <Form.Group >
                                                <Form.Label className="mt-3" >Name</Form.Label>
                                                <Form.Control type="text" placeholder={userName} />
                                            </Form.Group>

                                            <Form.Group >
                                                <Form.Label className="mt-3">Social Security#</Form.Label>
                                                <Form.Control
                                                    className='validate'
                                                    type="text"
                                                    placeholder="Enter 9 digit social security number"
                                                    name="social_security"
                                                    onChange={(e) => setSocialSecurity(e.target.value)}
                                                    required
                                                />
                                            </Form.Group>
                                            <p className='error' id="socialsecurity"> *Enter Your 9 digit social security number</p>

                                            <Form.Group >
                                                <Form.Label className="mt-3">Birth date</Form.Label>
                                                <Form.Control
                                                    className='validate'
                                                    type="date"
                                                    placeholder="MM/DD/YYYY"
                                                    name="birth_date"
                                                    id="birth_date"
                                                    onChange={(e) => setBirthDate(e.target.value)}
                                                    required
                                                />
                                            </Form.Group>
                                            <p className='error' id="birthdate"> *Enter Your Birthdate</p>

                                            <Form.Group >
                                                <Form.Label className="mt-3">Steet Address</Form.Label>
                                                <Form.Control
                                                    className='validate'
                                                    type="text"
                                                    placeholder="Enter your Steet Address"
                                                    name="steet_address"
                                                    onChange={(e) => setSteetAddress(e.target.value)}
                                                    required
                                                />
                                            </Form.Group>
                                            <p className='error' id="steetaddress"> *Enter your Steet Address</p>

                                            <Form.Group >
                                                <Form.Label className="mt-3" >City</Form.Label>
                                                <Form.Control
                                                    className='validate'
                                                    type="text"
                                                    placeholder="Your City"
                                                    name="city"
                                                    onChange={(e) => setCity(e.target.value)}
                                                    required
                                                />
                                            </Form.Group>
                                            <p className='error' id="city"> *Enter your City</p>

                                            <Form.Group>
                                                <Form.Label className="mt-3">State</Form.Label>
                                                <Form.Control
                                                    className='validate'
                                                    type="email"
                                                    placeholder="Your State"
                                                    name="state"
                                                    onChange={(e) => setState(e.target.value)}
                                                    required
                                                />
                                            </Form.Group>
                                            <p className='error' id="state"> *Enter your State</p>

                                            <Form.Group >
                                                <Form.Label className="mt-3" >Zip Code</Form.Label>
                                                <Form.Control
                                                    className='validate'
                                                    type="text"
                                                    placeholder="Zip"
                                                    name="zip"
                                                    onChange={(e) => setZip(e.target.value)}
                                                    required
                                                />
                                            </Form.Group>
                                            <p className='error' id="zip"> *Enter your Zip Code</p>

                                            <Form.Group>
                                                <Form.Label className="mt-3">Phone Number</Form.Label>
                                                <Form.Control
                                                    className='validate'
                                                    type="phone"
                                                    placeholder="Your phone number"
                                                    name="phone_number"
                                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                                    required
                                                />
                                            </Form.Group>
                                            <p className='error' id="phonenumber"> *Enter your Phone Number</p>

                                            <div className='activte_back_button'>
                                                <Button className='signBtn btn-dark mt-3' id="nextbtn" onClick={submitHander}> Next  </Button>

                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
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