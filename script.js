class User {
    constructor(firstname, lastname, username, email, password, agreement) {
        this.firstname = firstname
        this.lastname = lastname
        this.username = username
        this.email = email
        this.password = password
        this.agreement = agreement
    }
}

var users = []
const getUser = () => {
    let firstname = document.getElementById("first-name").value
    let lastname = document.getElementById("last-name").value
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirmpass = document.getElementById("confirmpass").value
    let termsandconditions = document.getElementById("email").value
    if(password === confirmpass && password.length < 6){
        //let p = getElementById("errortext").value = "Registered successfully"
        var pass = password
    }
    else{
        //let p = document.getElementById("errortext").value = "Please enter another passwprd"
        pass = "გიჟი ხო არ ხარ შეიყვანე წესიერი პაროლი"
    }
    const user = new User(firstname,lastname, username, email, pass, termsandconditions)
    console.log(pass)
}
document.getElementById("login").addEventListener("click", getUser)

