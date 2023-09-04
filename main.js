let btn = document.getElementById("btn");
let URL = "https://jsonplaceholder.typicode.com/users";
let user = {};
btn.addEventListener("click", (e) => {
    e.preventDefault();
    let username = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let birthdate = document.getElementById("birthdate").value;
    user = {
        name: username,
        lastname: lastname,
        date: birthdate
    }
    showData(URL)
})

async function showData() {
    try {
        let res = await fetch(URL, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json"
            }
        })
        let data = await res.json()
        console.log(data)
        if (!res) throw new Error(res.status)
    } catch (error) {
        console.log(error)
    }
}