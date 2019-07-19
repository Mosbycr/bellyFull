import React from "react";
import { Form, Input} from "@rocketseat/unform";
import "./index.css";
import * as Yup from "yup";

function LogInForm(props){

    const schema = Yup.object().shape({
      loginEmail: Yup.string()
        .email("Please enter a valid email")
        .required("Please enter a valid email"),
      loginPassword: Yup.string()
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
        .required("Please enter a valid street address"),
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Please enter a valid email"),
      password: Yup.string()
        .matches(
          /^[a-zA-Z]\w{3,14}$/g,
          "Password must start with a letter , must be between 4 and 15 characters in length, and only letters, numbers, and underscores may be used"
        )
        .required("Please enter a password")
    });

    if(props.signIn === true){
        return (
          <div className="formSignIn">
            <Form schema={schema}>
              <Input
                name="loginEmail"
                value={props.loginEmail}
                onChange={props.handleInputChange}
                type="email"
                label="Email"
                placeholder=" sammyGives@gmail.com"
              />
              <Input
                name="loginPassword"
                type="password"
                label="Password"
                value={props.loginPassword}
                onChange={props.handleInputChange}
              />
              <p className="allFields">*All fields are required</p>
              <a href="/donations" className ="btn" type="submit">
                Sign In
              </a>
            </Form>
          </div>
        );
    } else if (props.register === true){
      // console.log(props.isShow);
        return (
          <div className="formRegister">
            <Form schema={schema}>
              <Input
                name="organization"
                type="text"
                label="Name of Organization"
                placeholder=" Feed The Hungry, LLC"
                value={props.organization}
                onChange={props.handleInputChange}
              />
              <Input
                name="contactFirst"
                type="text"
                label="Contact First & Last Name"
                placeholder=" John"
                value={props.contactFirst}
                onChange={props.handleInputChange}
              />
              <Input
                name="contactLast"
                type="text"
                placeholder=" Cross"
                value={props.contactLast}
                onChange={props.handleInputChange}
              />
              <Input
                name="phone"
                type="text"
                label="Phone Number"
                placeholder=" 804-229-6345"
                value={props.phone}
                onChange={props.handleInputChange}
              />
              <Input
                name="streetAddress"
                type="text"
                label="Address"
                placeholder=" 14233 Wonder Drive"
                value={props.streetAddress}
                onChange={props.handleInputChange}
              />
              <Input
                name="cityStateZip"
                type="text"
                placeholder=" Henrico VA, 23229"
                value={props.cityStateZip}
                onChange={props.handleInputChange}
              />
              <Input
                name="email"
                type="email"
                label="Email"
                placeholder=" sammyGives@gmail.com"
                value={props.email}
                onChange={props.handleInputChange}
              />
              <Input
                name="password"
                type="password"
                label="Password"
                value={props.password}
                onChange={props.handleInputChange}
              />
              <p className="allFields">*All fields are required</p>
              <button
                className="btn"
                type="submit"
                onClick={props.handleOrganizationFormSubmit}
              >
                Register
              </button>
              <div>
                {/* will need to add in extra check or text will show even if input is wrong */}
                {props.isShow && (
                  <h5>
                    Thank you for signing up. To view donations,{" "}
                    <a className="signUp" href="/donations">
                      click here.
                    </a>
                  </h5>
                )}
              </div>
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