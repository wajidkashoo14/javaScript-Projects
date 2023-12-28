const passwordBox = document.getElementById('password')
const button = document.getElementById("button")
const img = document.getElementById('img')
const lenght = 12
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = `!@#$%^&*()-_=+[]{}|;:\'",.<>?/~`

const allChars = upperCase + lowerCase + symbols + numbers


function createPassword(){
    let password = ""
    password+= upperCase[Math.floor(Math.random() * upperCase.length)]
    password+= lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password+= numbers[Math.floor(Math.random() * numbers.length)]
    password+= symbols[Math.floor(Math.random() * symbols.length)]

    while(lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }

    passwordBox.value = password
}

function copyPassword() {
    passwordBox.select()
    document.execCommand("copy")
}

img.addEventListener('click', () => {
    copyPassword()
})

button.addEventListener('click', () => {
    createPassword()
})