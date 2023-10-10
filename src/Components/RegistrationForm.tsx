import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"

interface StateI {
    userName: string,
    email: string,
    password: string
}
interface ErrorI {
    errorMsg: string,
    showError: boolean
}
const RegistrationForm = () => {
    const [state, setState] = useState<StateI>({
        userName: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState({
        errorMsg: "",
        showError: false
    })
    const { email, password, userName } = state
    const { errorMsg, showError } = error
    // Using this regex for email varification
    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    // Method for validating the data with the help of onBlur
    const errorValidation = (title: string) => {
        let tempErrorMsg = "";
        let tempShowError = false
        if (title === "username") {
            if (userName === "") {
                tempErrorMsg = "UserName cannot be empty"
                tempShowError = true
            }
            else if (userName.length < 2) {
                tempErrorMsg = "UserName must be atleast of 2 characters";
                tempShowError = true
            }
        }
        else if (title === "email") {
            if (email === "") {
                tempErrorMsg = "Email cannot be empty"
                tempShowError = true
            }
            else if (!EMAIL_REGEX.test(email)) {
                tempErrorMsg = "Please Enter a valid email address"
                tempShowError = true
            }
        }
        else if (title === "password") {
            if (password === "") {
                tempErrorMsg = "Password cannot be empty";
                tempShowError = true
            }
            else if (password.length < 8) {
                tempErrorMsg = "Password length must be of 8 characters";
                tempShowError = true
            }
        }
        console.log(tempErrorMsg, tempShowError)
        setError({
            errorMsg: tempErrorMsg,
            showError: tempShowError
        })
    }
    return (
        <div>
            <h2>Task 3 Make a Form Validation</h2>
            <form style={{ width: "50%", margin: "auto", border: "2px solid gray", padding: "30px", borderRadius: "20px" }}>
                <Form.Control placeholder="Username" type='text' value={userName} onChange={(e) => {
                    setError({
                        errorMsg: "",
                        showError: false
                    })
                    setState({
                        ...state,
                        userName: e.target.value
                    })
                }} onBlur={() => errorValidation("username")} />
                <br />
                <Form.Control placeholder="Email" type='email' value={email} onChange={(e) => {
                    setState({
                        ...state,
                        email: e.target.value
                    })
                    setError({
                        errorMsg: "",
                        showError: false
                    })
                }} onBlur={() => errorValidation("email")} />
                <br />
                <Form.Control placeholder="Password" type='password' value={password} onChange={(e) => {
                    setState({
                        ...state,
                        password: e.target.value
                    })
                    setError({
                        errorMsg: "",
                        showError: false
                    })
                }} onBlur={() => errorValidation("password")} />

                {/* Showing any error in validation */}
                {showError ? <><br /><h5 style={{ color: "red" }}>{errorMsg}</h5></> : null}
                <br />
                <Button type='submit' variant="outline-secondary" onClick={(e) => { e.preventDefault() }}>Submit</Button>
                <br />
            </form>
            <br />

        </div>
    )
}

export default RegistrationForm