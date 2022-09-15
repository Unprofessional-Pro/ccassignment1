import React from "react";
import './App.css'

class RiderPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {value: ''}
    }

    render() {
        return(
            <div>
                <div>
                    <header className="App-header">
                        How can we help you today?
                    </header>
                </div>
                <div>
                    <body className="App-body">
                        <p>Need a ride?</p>
                        <button className="App-button">Book Here</button>
                        <p>Look below for nearby drivers.</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d973.9197011528177!2d138.6192621431293!3d-34.809408399740995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0b7fc2ee88f17%3A0xe92a828e0e62c4aa!2sUniSA%20Mawson%20Lakes%20Gym!5e0!3m2!1sen!2sau!4v1663207405352!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </body>
                </div>
                /**To show up upon user clicking Book Here, upon finding a driver, the popup vanishes*/
                <div>
                    <p>Looking for drivers near you.</p>
                </div>
                <div>
                    <p>Your driver is on their way!</p>
                    <p>Look at the map below to see where they are.</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d973.9197011528177!2d138.6192621431293!3d-34.809408399740995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0b7fc2ee88f17%3A0xe92a828e0e62c4aa!2sUniSA%20Mawson%20Lakes%20Gym!5e0!3m2!1sen!2sau!4v1663207405352!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <p>Changed your mind?</p>
                    <button className="App-button">Cancel Ride</button>
                </div>
            </div>
        );
    }
};