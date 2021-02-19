import React from "react";

const About = () => 
{
    return (
        <div className="has-text-white">
            <label className="tag label is-large title">About this App:</label>

            <br />

            <p>
                This app is for anyone who would like to find information about various sites in a state to partake in recreational activities such as fishing, camping, and hiking. 
                It is made out of React/Redux client-side and Ruby on Rails server-side using HTTP to communicate between client and server. 
                The data for the app comes from a government owned external API from Recreation.gov.
            </p>
        </div>
    )
}

export default About;