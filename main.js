const welcomeForm = document.getElementById('welcome__form');
const welcomeInput = document.getElementById('welcome__input');
const welcomeMessage = document.getElementById('welcome__message');


function welcome(){
  welcomeInput.value = '';
  welcomeForm.addEventListener('submit', function(event) { 
    event.preventDefault(); 
    let message = '';
    if (welcomeInput.value == ''){
      message = 'Введите ваше имя';
    } else {
      message = ` Добро пожаловать  ${welcomeInput.value}!!!`;
    };
    console.log(message);
    welcomeMessage.innerHTML = message;
  });
};





welcome();

