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

    function handlejoinClick(){
      console.log("clicked")

    }

    const schema = Yup.object().shape({
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Please enter a valid email"),
      password: Yup.string()
        .matches(
          /^[a-zA-Z]\w{3,14}$/g,
          "Password must start with a letter , must be between 4 and 15 characters in length, and only letters, numbers, and underscores may be used"
        )
        .required("Please enter a password"),
      organization: Yup.string().required("Organization name is required"),
      contactFirst: Yup.string().required("Contact First Name is required"),
      contactLast: Yup.string().required("Contact Last Name is required"),
      phone: Yup.string()
        .matches(
          /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/g,
          "Please enter a valid phone number"
        )
        .required("Please enter a valid phone number"),
      streetAddress: Yup.string()
        .matches(
          /^\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/g,
          "Please enter a valid street address"
        )
        .required("Please enter a valid street address"),
      cityStateZip: Yup.string()
        .matches(
          /^[A-Za-z . ,'-]+\d{5}(-\d{4})?$/g,
          "Please enter a valid street address"
        )
        .required("Please enter a valid street address")
    });

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
                  name="streetAddress"
                  type="text"
                  label="Address"
                  placeholder="14233 Wonder Drive"
                />
                <Input
                  name="cityStateZip"
                  type="text"
                  placeholder="Henrico VA, 23229"
                />
              <p>*All fields are required</p>
              <button type="submit" onClick={handlejoinClick}>Register</button>
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