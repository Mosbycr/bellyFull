import React from "react";
import Stats from "../components/Stats/Stats";

function About (){
    return(
        <div className="container-fluid about">
                <div className= "row justify-content-center">
                    <h1 className="aboutUs  mb-5 ">About Us</h1>
                </div>
                <div className= "row">
                    <h3 className= "font-weight-bold font-italic">Who we are... </h3>
                </div>
                <div className= "row">
                    <div className="col-md-6">
                        <p>Belly Full was founded in Richmond, VA by Carrie Mosby, Nimeh Jadallah, and Molly Levine in 2019.</p>

                    </div>
                </div>
                
                <div className= "row">
                    <h3 className="font-weight-bold font-italic">Our Mission...</h3>
                </div>
                <div className= "row">
                    <div className="col-md-6">
                         <p>We help restaurants connect with local non-profit organizations to donate their leftover food and reduce food waste.</p>
                    </div>
                </div>
                <div className= "row">
                    <h3 className="font-weight-bold font-italic">Our Vission...</h3>
                </div>
                <div className="row">
                    <div className= "col-md-6">
                          <p> The US is facing a food waste crisis. Up to 40% of all food goes to waste across the country, and restaurants alone throw away 133 billion pounds of food each year.</p> 
                          <p>This has a serious impact on small business, food insecurity, and is a major contributing force to climate change.</p>
                          <p>We seek a world of hope, tolerance and social justice, where poverty has been overcome and all people live with dignity and security.</p>
                    </div>
                   
                </div>
                <div className = "row">
                    <Stats/>  
                </div> 
                
        </div>
        
            


    

    );
}

export default About;