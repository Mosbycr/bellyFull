import React from "react";
import { Form, Input} from "@rocketseat/unform";
import "./index.css";

function LogInForm(props){
    function handleSubmit(data){
        console.log(data);
        // this is where we can grab data and save to database
        let email = data.email; 
        console.log(email);
    }

    if(props.signIn === true){
        return(
        <div className="formSignIn">
            <Form onSubmit={handleSubmit}>
                <Input name="email" type="email" label="Email" placeholder="sammyGives@gmail.com"/>
                <Input name="password" type="password" label="Password"/>
                <button type="submit">Sign In</button>
            </Form>
        </div>
        )
    } else if (props.register === true){
        return(
            <div className="formRegister">
                <Form onSubmit={handleSubmit}>
                    <Input name="organization" type="text" label="Name of Organization" placeholder="Feed The Hungry, LLC"/>
                    <Input name="contactFirst" type="text" label="Contact Name" placeholder="John"/>
                    <Input name="contactLast" type="text" placeholder="Cross"/>
                    <Input name="phone" type="text" label="Phone Number" placeholder="804-229-6345"/>
                    <Input name="streetNumber" type="text" label="Address" placeholder="14233"/>
                    <Input name="streetName" type="text" placeholder="Ocean Lane"/>
                    <br/>
                    <Input name="city" type="text" placeholder="Tuckahoe"/>
                    <Input name="state" type="text" placeholder="VA"/>
                    <br/>
                    <Input name="zipcode" type="text" placeholder="23542"/>
                </Form>
            </div>
        )
    }else {
        return(
            <div></div>
        )
    }
}

export default LogInForm