// Add your code here
function submit(name,email){
return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
return  fetch ("http://localhost:3000/users" ,{
  method: "POST",
  headers: {
    "Content-Type":"application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    name,
    email,
  }),
})
  .then(function (response) {
    return response.json();
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      document.body.innerHTML = object["id"];
    })
    .catch(function (error) {
      document.body.innerHTML = error.message;
    });
}
  .then(function (object) {
    document.body.textContent = object["id"];
  })
  .catch(function (error) {
    document.body.textContent = error.message;
  })
};