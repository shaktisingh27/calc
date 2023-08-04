let string = "";
let buttons = document.querySelectorAll('.button');

//making array from the buttons and using for each
Array.from(buttons).forEach(function (button) {
    button.addEventListener('click', function (event) {
        if (event.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (event.target.innerHTML == "AC") {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (event.target.innerHTML == "sign") {
            string = -1 * string;
            document.querySelector('input').value = string;
        }
        else if (event.target.innerHTML == "%") {
            string = string / 100;
            document.querySelector('input').value = string;
        }
        else {
            console.log(event.target);
            console.log(event.currentTarget);
            string = string + event.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})