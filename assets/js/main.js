let year = document.getElementById("year");
let age = document.getElementById("age")

function calc() {
    let result = 0;
    console.log(2022 - year.value);
    result = 2022 - year.value;
    age.innerHTML = result;
}
