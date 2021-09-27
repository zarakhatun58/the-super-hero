import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header-1">
                <div>
                    <ul>
                        <li> <a href="/Home">Home</a> </li>
                        <li> <a href="/Doctors">Doctors</a> </li>
                        <li> <a href="/Nurse">Nurse</a> </li>
                        <li> <a href="/Hospital">Hospital</a> </li>
                        <li> <a href="/HelpLine">HelpLine</a> </li>
                        <li> <a href="/donation">Donation</a> </li>
                    </ul>
                </div>
                <div className="input">
                    <input type="text" placeholder="search your doctors" />
                    <button type="button"> Search</button>
                </div>
            </div>
            <div className="header-last">
                <h2 className="header-2"> Covid Warriors - The Doctors lies in you!</h2>
                <p> A tribute to frontline corona warriors––Doctors who sacrificed their life while saving patients during the ongoing COVID-19 .<br /> Worlds top most Doctors arrange biggest Health Care Fund for help covid patients.</p>
                <h3 style={{ paddingBottom: '10px' }}>Health Cares Fund- Total Donated:4,308.3 crore </h3>
            </div>

        </div>
    );
};

export default Header;
