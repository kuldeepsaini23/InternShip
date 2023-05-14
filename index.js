const button = document.getElementById("btn-contact");

button.addEventListener("click", async () => {
  const firstName = document.getElementById("inputFirstName").value;
  const lastName = document.getElementById("inputLastName").value;
  const email = document.getElementById("inputEmail").value;
  const message = document.getElementById("message").value;
  console.log("First Name: ", firstName);
  console.log("Last Name: ", lastName);
  console.log("Email: ", email);
  console.log("Message: ", message);

  if (firstName.length > 0 || lastName.length > 0 || email.length > 0 || message.length > 0) {
    try {
      const fetchResponse = await fetch(
        `https://www.grupverse.com/companywebsitemsg`, {
          method: "POST",
          body: JSON.stringify({
            name: `${firstName} ${lastName}`,
            email: email,
            msg: message,
            completed: false,
          })
        }
      );

      if (!fetchResponse.ok) {
        throw new Error('Error sending message');
      }

      const serverResponse = await fetchResponse.json();
      Swal.fire(
        'Successful!',
        'Your email has been received.',
        'success'
      )

    } catch (err) {
      console.log(err);
      Swal.fire(
        'Error',
        'Something went wrong. Please try again later.',
        'error'
      )
    }
  }
});
