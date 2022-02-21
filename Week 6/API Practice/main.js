const apiUrl = "https://reqres.in/api/users?page=2";

fetch (apiUrl, {
    method: 'GET'
})
.then(response => response.json())
.then(data => {console.log(data);})
.catch((error) => console.log(error.message));

let demo = document.getElementById("demo");