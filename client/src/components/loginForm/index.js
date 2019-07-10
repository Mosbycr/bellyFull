import React from "react";
import { Form, Input} from "@rocketseat/unform";
import "./index.css";
import * as Yup from "yup";

function LogInForm(props){
    function handleSubmit(data){
        console.log(data);
        // this is where we can grab data and save to database
        let email = data.email; 
        console.log(email);
    }

    const schema = Yup.object().shape({
        email: Yup.string().email("Please enter a valid email")
        .required("Please enter a valid email"),
        password: Yup.string()
        // .min(8, "Please enter a password of 8 characters or more")
        .matches(/^[a-zA-Z]\w{3,14}$/g, "Password must start with a letter , must be between 4 and 15 characters in length, and only letters, numbers, and underscores may be used")
        .required("Please enter a password"),
        organization: Yup.string()
        .required("Organization name is required"),
        contactFirst: Yup.string()
        .required("Contact First Name is required"),
        contactLast: Yup.string()
        .required("Contact Last Name is required"),
    })

    if(props.signIn === true){
        return (
          <div className="formSignIn">
            <Form onSubmit={handleSubmit} schema={schema}>
              <Input
                name="email"
                type="email"
                label="Email"
                placeholder="sammyGives@gmail.com"
              />
              <Input name="password" type="password" label="Password" />
              <p>*All fields are required</p>
              <button type="submit">Sign In</button>
            </Form>
          </div>
        );
    } else if (props.register === true){
        return (
          <div className="formRegister">
            <Form onSubmit={handleSubmit} schema={schema}>
              <Input
                name="organization"
                type="text"
                label="Name of Organization"
                placeholder="Feed The Hungry, LLC"
              />
              <Input
                name="contactFirst"
                type="text"
                label="Contact Name"
                placeholder="John"
              />
              <Input
                name="contactLast"
                type="text"
                placeholder="Cross"
              />
              <Input
                name="phone"
                type="text"
                label="Phone Number"
                placeholder="804-229-6345"
              />
              <Input
                name="streetNumber"
                type="text"
                label="Address"
                placeholder="14233"
              />
              <Input
                name="streetName"
                type="text"
                placeholder="Ocean Lane"
              />
              <br />
              <Input name="city" type="text" placeholder="Tuckahoe" />
              <Input name="state" type="text" placeholder="VA" />
              <br />
              <Input name="zipcode" type="text" placeholder="23542" />
              <p>*All fields are required</p>
              <button type="submit">Register</button>
            </Form>
          </div>
        );
    }else {
        return(
            <div></div>
        )
    }
}

export default LogInForm