import React, { Component } from "react";
import axios from "../../axios-querry";
import Iframe from "react-iframe";
import classes from "./Contact.css";
import Input from "../../components/UI/Input/Input";

class contact extends Component {
  state = {
    contactForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email Address",
          value: "",
          validation: {
            required: true,
          },
        },
        valid: false,
      },
      tel: {
        elementType: "input",
        elementConfig: {
          type: "tel",
          placeholder: "Contact No.",
        },
        value: "",
        validation: {
          required: true,
          minLength: 10,
        },
        valid: false,
      },
      subject: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Subject",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      message: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "Enter your message",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
    },
    formisValid: false,
    loading: false,
  };

  queryHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.contactForm) {
      formData[formElementIdentifier] = this.state.contactForm[
        formElementIdentifier
      ].value;
    }

    const query = {
      queryData: formData,
      customer: {
        palce: "Ilam",
        gender: "male",
      },
    };
    axios
      .post("/query.json", query)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };
  checkValidity(value, rules) {
    let isValid = false;
    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= "" && isValid;
    }
    return isValid;
  }
  inputChangedHandler = (event, inputIdentifier) => {
    const updatedContactForm = {
      ...this.state.contactForm,
    };
    const updatedFormElement = {
      ...updatedContactForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );

    updatedContactForm[inputIdentifier] = updatedFormElement;

    let formisValid = true;
    for (let inputIdentifier in updatedContactForm) {
      formisValid = updatedContactForm[inputIdentifier].valid && formisValid;
    }

    this.setState({
      contactForm: updatedContactForm,
      formisValid: formisValid,
    });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.contactForm) {
      formElementsArray.push({
        id: key,
        config: this.state.contactForm[key],
      });
    }
    let form = (
      <form onSubmit={this.queryHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            className={classes.input}
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value || ""}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <button
          className={classes.full}
          type="submit"
          disabled={!this.state.formisValid}
        >
          Send
        </button>
      </form>
    );
    return (
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.companyinfo}>
            <h1>
              <span>Tint </span>Shade
            </h1>
            <ul>
              <li>160 SWEENEY DRIVE NARRE WARREN 3805</li>
              <li>tintshade@outlook.com</li>
              <li>(03) 9904 9955</li>
            </ul>

            <div className={classes.contact}>
              <h3>Send Us Your Querry</h3>
              {form}
            </div>
          </div>
          <div>
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1571.3038330512832!2d145.3206986581466!3d-38.0329249949283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad61a04425ef675%3A0xd27870e8e589534!2s160%20Sweeney%20Dr%2C%20Narre%20Warren%20VIC%203805%2C%20Australia!5e0!3m2!1sen!2snp!4v1591973329803!5m2!1sen!2snp"
              width="100%"
              height="100%"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></Iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default contact;
