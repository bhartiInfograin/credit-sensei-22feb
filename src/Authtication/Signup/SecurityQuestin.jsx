import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AuthHeader from '../AuthCommon/AuthHeader';
import { Form, Spinner, Button } from 'react-bootstrap';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import { ID_VERIFICATION } from '../../Url';
import { ToastContainer, toast } from 'react-toastify';



export default function SecurityQuestin() {
    const [loading, setLoading] = useState(false);
    const [question, setQuestion] = useState([]);
    const form_data = JSON.parse(sessionStorage.getItem("form_data"));
    let Navigate = useNavigate()
    var arr = []


    useEffect(async () => {
        try {
            setLoading(true);
            await axios.get(`https://stage-sc.consumerdirect.com/api/signup/id-verification?clientKey=${form_data.clientKey}&trackingToken=${form_data.trackingToken}&customerToken=${form_data.customerToken}`)
                .then(resp => {

                    var a = resp.data.idVerificationCriteria
                    sessionStorage.setItem("securityquestion", JSON.stringify(a))
                    var tifOptions = Object.keys(a).map(function (key) { return a[key] });
                    setQuestion(tifOptions)
                    console.log("tifOptions", tifOptions)
                    setLoading(false)
                })
                .catch(error => {
                    console.log("error", error)
                })

        } catch (error) {
            console.log("error", error)
        }
    }, []);


    const handleChange = (value, index) => {
        var a = { value, index }
        arr.push(a)
        console.log("arr", arr)
    }

    const checkButton = () => {
        var anslist = arr.slice(-3);
        console.log("anslist", anslist)

        var answer1 = ""
        var answer2 = ""
        var answer3 = ""



        anslist.forEach((e) => {
            if (e.index === 1) {

                answer1 = e.value
                console.log("answer1", answer1)

            }
            if (e.index === 2) {

                answer2 = e.value
                console.log("answer2", answer2)

            }
            if (e.index === 3) {

                answer3 = e.value
                console.log("answer3", answer3)

            }
        })

        const article = {
            clientKey: form_data.clientKey,
            customerToken: form_data.customerToken,
            trackingToken: form_data.trackingToken,
            "idVerificationCriteria.answer1": answer1,
            "idVerificationCriteria.answer2": answer2,
            "idVerificationCriteria.answer3": answer3,
            "idVerificationCriteria.referenceNumber": question[0],
        }

        console.log("article", article)

        $.ajax({
            type: "POST",
            url: ID_VERIFICATION,
            data: article,
            success: function (response) {

                console.log("response", response)
                if (response) {
                    Navigate("/paymentdetails")
                }
            },
            error: function (error) {
                console.log("errordfdf", error.responseJSON.errors[0].code)
                if (error.responseJSON.errors[0].code === "FAILED") {
                    // alert("Sorry, we were unable to verify your identity based on your answers")
                    toast.error('Sorry, we were unable to verify your identity based on your answers', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                if (error.responseJSON.errors[0].code === "ID_ALREADY_VERIFIED") {
                    // alert("Identity of customer has previously been verified")
                    toast.error('Identity of customer has previously been verified', {
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

            {loading ?
                <div className='spinner'>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
                :
                <>
                    <div className="p-3" style={{ fontSize: "14px" }}>
                        <h5 className='mt-5'>Complete The Identity Question Below</h5>
                        {question.map((e, number) => {
                            if (typeof (e) === "object") {
                                return (
                                    <>
                                        <div className='mt-3'>
                                            <b>  Q{number} {e.displayName}</b>
                                        </div>
                                        <div >
                                            {e.choiceList.choice.map((element) => {
                                                return (
                                                    <>
                                                        {['radio'].map((type) => (
                                                            <div key={`inline-${type}`} className="mt-3">
                                                                <Form.Check
                                                                    inline
                                                                    label={element.display}
                                                                    name={number}
                                                                    type={type}
                                                                    id={`inline-${type}-1`}
                                                                    key={element.display}
                                                                    value={element.display}
                                                                    onChange={() => handleChange(element.key, number)}
                                                                />
                                                            </div>
                                                        ))}
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </>
                                )
                            }
                        })}
                    </div>
                    <div className='activte_back_button p-3'>
                        <Button className='signBtn btn-dark mt-3' onClick={checkButton} >Submit</Button>
                    </div>

                </>

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










        </>
    )
}
