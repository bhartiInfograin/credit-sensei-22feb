import React from 'react';
import CreateAccount from '../Authtication/Signup/CreateAccount'
import AddProfile from '../Authtication/Signup/AddProfile'
import CreditReport from '../Authtication/Signup/CreditReport';
import Login from '../Authtication/Login/Login';
import {Routes, Route} from 'react-router-dom'
import Forgotpwd from '../Authtication/Login/Forgotpwd';
import ResetPwd from '../Authtication/Login/ResetPwd'
import Basic from '../Authtication/Signup/Basic';
import Premium from "../Authtication/Signup/Premium";
import ActivateAc from '../Authtication/Signup/ActivateAc';
import SecurityQuestin from '../Authtication/Signup/SecurityQuestin';
import PaymentDetails from '../Authtication/Signup/PaymentDetails';
import Membership from '../Authtication/Signup/Membership';




export default function Auth() {
    return (
        <>  
      
            <Routes>
                <Route path="/createAccount" element={<CreateAccount />}></Route>
                <Route path="/addProfile" element={<AddProfile/>}></Route>
                <Route path="/creditreport" element={<CreditReport/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/forgotpwd" element={<Forgotpwd/>}></Route>
                <Route path="/resetpassword" element={<ResetPwd/>}></Route>
                <Route path="/basic" element={<Basic/>}></Route>
                <Route path="/primium" element={<Premium/>}></Route>
                <Route path="/activateac" element={<ActivateAc/>}></Route>
                <Route path="/securityquestion" element={<SecurityQuestin/>}></Route>
                <Route path="/paymentdetails" element={<PaymentDetails/>}></Route>
                <Route path="/membership" element={<Membership/>}></Route>
                
            </Routes>
        </>
    )
}





