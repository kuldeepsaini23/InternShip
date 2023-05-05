const firstName = document.getElementById("inputFirstName").value;
const lastName = document.getElementById("inputLastName").value;
const email = document.getElementById("inputEmail").value;
const message = document.getElementById("message").value;

const button = document.getElementById("btn-contact");

// button.addEventListener("click", ()=>{
//   console.log(firstName)
//   console.log(lastName)
//   console.log(email)
//   console.log(message)
// })

console.log("helllloooooo");

async function sendEmail() {
  console.log("helllloooooo2");
    try {
      const response = await fetch(
        `https://www.grupverse.com/companywebsitemsg`,
        {
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
