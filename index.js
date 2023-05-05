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

function sendEmail() {
  console.log("helllloooooo2");
  fetch(
    "https://www.grupverse.com/companywebsitemsg?name=ritu&email=sf@GYY.ytf&msg=hi",
    {
      method: "POST",
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        email: email,
        msg: message,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error)=> console.log(error))
 
}
