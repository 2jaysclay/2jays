import React from 'react';
import logo from './logo.png';
import './UserProfileCard.css';

console.log(logo);

const UserProfileCard = () => {
    return (
        <div className="card">
            <img
                className="card-avatar"
                src={logo}
                alt="2JaysClay"
            />
            <h2 className="card-title">Dev J</h2>
            <p className="card-bio">Contact:</p>
            <p className="card-bio">(757)630-9220</p>
            <p className="card-bio">2jaysclay@proton.me</p>
        </div>
    );
};

export default UserProfileCard