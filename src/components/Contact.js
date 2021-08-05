import React,  { useState }from "react";
import "../styles/Contact.css";


// function validateEmail(email) {
//   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };

// function checkPassword(input) {
//   const passw = /^[A-Za-z]\w{7,14}$/;
//   if (input.match(passw)) {
//     return true;
//   }
//   return false;
// }

function Form() {
//   // Create state variables for the fields in the form
//   // We are also setting their initial values to an empty string
//   const [email, setEmail] = useState('');
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     // Based on the input type, we set the state of either email, username, and password
//     if (inputType === 'email') {
//       setEmail(inputValue);
//     } else if (inputType === 'userName') {
//       setUserName(inputValue);
//     } else {
//       setPassword(inputValue);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();

//     // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
//     if (!validateEmail(email) || !userName) {
//       setErrorMessage('Email or username is invalid');
//       // We want to exit out of this code block if something is wrong so that the user can correct it
//       return;
//       // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
//     }
//     if (!checkPassword(password)) {
//       setErrorMessage(
//         `Choose a more secure password for the account: ${userName}`
//       );
//       return;
//     }
//     alert(`Hello ${userName}`);

//     // If everything goes according to plan, we want to clear out the input after a successful registration.
//     setUserName('');
//     setPassword('');
//     setEmail('');
//   };

  return (
    <div id="my-contact" className="container text-center my-5">
				<h1 id="contact" className="mb-3 ">
					Contact
				</h1>
				<form>
					<div className="form-group">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="text"
									name="name"
									className="form-control form-control-lg"
									id="name"
									placeholder="Name"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hidden">
						<div className="row">
							<div className="p-3 col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="email"
									name="_replyto"
									className="form-control form-control-lg"
									id="exampleFormControlInput1"
									placeholder="Your email"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hiddenRight">
						<div className="row">
							<div className=" p-3col-12 col-sm-12 col-md-6 mx-auto">
								<textarea
									name="message"
									className="form-control form-control-lg"
									id="exampleFormControlTextarea1"
									rows="3"
									placeholder="Write your message..."
								/>
							</div>
						</div>
					</div>
					<div className="row text-md-right p-3 text-sm-center">
						<div className="col-12 col-sm-12 col-md-6 mx-auto">
							<button
								type="submit"
								className="btn btn-primary mb-2 hidden">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>

  );
}

export default function Contact() {
  return (
    <div className="contact-body container-lg">
      <div className="row">
        <div>
          <Form />

        </div>
      </div>
    </div>
  );
}
