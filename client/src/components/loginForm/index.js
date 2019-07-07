import React from "react";
import { Form, Input} from "@rocketseat/unform";
import "./index.css";

function LogInForm(){
    function handleSubmit(data){
        console.log(data);
        // this is where we can grab data and save to database
        let email = data.email; 
        console.log(email);
    }

    return(
        <div className="formSignIn">
            <Form onSubmit={handleSubmit}>
                <Input name="email" type="email" label="Email"/>
                <Input name="password" type="password" label="Password"/>
                <button type="submit">Sign In</button>
            </Form>
        </div>
    )
}

export default LogInForm