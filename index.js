// Add your code here
// function submitData(){
//    return fetch("http://localhost:3000/users", {
//  method: "POST",
//  headers: {
//    "Content-Type": "application/json",
//    "Accept": "application/json",
//  },
//  body: JSON.stringify({
//    name: "Steve",
 //   email: "steve@steve.com",
//  }),
//});
//}



const configObj = {
    method: "POST",
    headers: {
       "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
         name: "Steve",
         email: "steve@steve.com",
  }),
}

function submitData(){   
    return fetch("http://localhost:3000/users", configObj)
      .then((response) => {
        return response.json();
      })
      .then((object) => {
        const newID = object.id;
        
        const element = document.createElement("div")
        element.textContent = newID;
        document.body.appendChild(element);

        return object
      })

      .catch((error) => {
        const element = document.createElement("div")
        element.textContent = error.message
        document.body.appendChild(element)
      });
    }


   

