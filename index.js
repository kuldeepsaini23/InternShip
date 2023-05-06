const button = document.getElementById("btn-contact");

button.addEventListener("click", async() => {
  const firstName = document.getElementById("inputFirstName").value;
  const lastName = document.getElementById("inputLastName").value;
  const email = document.getElementById("inputEmail").value;
  const message = document.getElementById("message").value;
  console.log("FirstName: ", firstName);
  console.log("LastName: ", lastName);
  console.log("Email: ", email);
  console.log("Message: ", message);

  if (firstName.length > 0 || lastName.length > 0 || email.length > 0 || message.length > 0) {
    try {
      const response = await fetch(
        `https://www.grupverse.com/companywebsitemsg`, {
          method: "POST",
          body: JSON.stringify({
            name: `${firstName} ${lastName}`,
            email: email,
            msg: message,
            completed: false,
          })
          //,
          //   headers: {
          //     "Content-Type": "application/x-www-form-urlencoded",
          //   },
        }
      );

      const data = await response.json();
      Swal.fire(
        'Successfull!',
        'You email is been Recieved',
        'success'
      )

    } catch (err) {
      console.log(err);
      Swal.fire(
        'Error',
        'Something Went Wrong, Please try again later',
        'error'
      )
    }
  }
});
