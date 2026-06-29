let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML === '=') {
            try {
                string = eval(string).toString();
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }

        else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = "";
        }

        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});