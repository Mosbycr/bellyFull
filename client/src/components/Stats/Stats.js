import React from "react";
import "./style.css"
function Stats(){
    return(
        <div className= "jumbotron">
            <div className = "container">
            <div className= "row justify-content-md-center">
                In Virginia, 863,390 people are struggling with hunger - and of them 247,470 are children.
            </div>
            <div className= "row">
                <div className= "col">
                    <div className= "row justify-content-md-center">
                        1 in 10 people
                    </div>
                    <div className= "row justify-content-md-center">
                        <i class="fas fa-male"></i><i class="fas fa-male"></i><i class="fas fa-male"></i><i class="fas fa-male"></i><i class="fas fa-male"></i>
                    </div>
                    <div className= "row justify-content-md-center">
                        <i class = "fas fa-male"></i><i class="fas fa-male"></i><i class="fas fa-male"></i><i class="fas fa-male"></i><i class="fas fa-male"></i>
                    </div>
                    <div className= "row justify-content-md-center">
                        struggles with hunger.
                    </div>
                </div>
                <div className = "col">
                    <div className= "row justify-content-md-center">
                       1 in 8 
                    </div>
                    <div className= "row justify-content-md-center">
                        children
                    </div>
                    <div className= "row justify-content-md-center">
                        struggles with hunger.
                    </div>
                </div>
            </div>
            <br></br><br></br>
            <div className= "row justify-content-md-center">
                People facing hunger in
            </div>
            <div className = "row justify-content-md-center">
                Virginia
            </div>
            <div className= "row justify-content-md-center">
                are estimated to report needing
            </div>
            <div className = "row justify-content-md-center">
                $446,691,000
            </div>
            <div className = "row justify-content-md-center">
                more per year to meet their food needs.
            </div>
            <div className= "row justify-content-md-center">
            The average cost of a meal in Virginia is $3.03. Data from Feeding America's Map the Meal Gap 2017 study.
            </div>

            </div>
           

        </div>

    );
}

export default Stats;