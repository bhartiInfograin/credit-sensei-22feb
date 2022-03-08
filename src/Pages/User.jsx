import React from 'react';
import { Routes, Route } from 'react-router-dom'
import CreditItem from '../User/CreditItem/CreditItem';
import DisputeLetter from '../User/DisputeLetter/DisputeLetter';
import UserHome from '../User/UserHome/UserHome';
import History from '../User/History/History';
import Myaccount from '../User/UserProfile/Myaccount';
import Mydocs from '../User/UserProfile/Mydocs';
import UserCreditReport from '../User/UserProfile/UserCreditReport';
import General from '../User/UserProfile/Faq/General';
import Account from '../User/UserProfile/Faq/Account';
import Monitoring from '../User/UserProfile/Faq/Monitoring';

export default function Main() {
    return (
        <>
           
            <Routes>
                <Route path="/useHome" element={<UserHome/>} ></Route>
                <Route path="/creditItem" element={<CreditItem/>} ></Route>
                <Route path="/disputeletter"  element={<DisputeLetter/>}></Route>
                <Route path="/history"element={<History/>}></Route>
                <Route path="/myaccount"element={<Myaccount/>}></Route>
                <Route path="/mydocs"element={<Mydocs/>}></Route>
                <Route path="/usercreditreport"element={<UserCreditReport/>}></Route>
                <Route path="/general"element={<General/>}></Route>
                <Route path="/account"element={<Account/>}></Route>
                <Route path="/monitoring"element={<Monitoring/>}></Route>

            </Routes>
          

        </>
    )
}
