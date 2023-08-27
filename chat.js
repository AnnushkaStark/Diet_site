const chatForm = document.getElementById('chat__form');
const chatInputName = document.getElementById('chat__input-name');
const chatArea = document.getElementById('chat__area');
const chatInputMessage = document.getElementById('chat__input-message');
const chatMessage = document.getElementById('chat__message');



function chat(){
    chatArea.value = '';
    chatInputName.value = '';
    chatInputMessage.value = '';
    let today = new Date();
    let userName = '';
    let messages = 'Привет участникам чата!';
    let inputMessage = '';
    let timeNow = '';
    chatForm.addEventListener('submit', function(event) { 
      event.preventDefault();
      timeNow = today.toLocaleTimeString('ru-RU');
      userName = chatInputName.value;
      if (userName == ''){
        chatMessage.innerHTML = 'Введите ваше имя.';
        chatMessage.innerHTML = 'Для продолжения введите ваше имя!!!';
      } else {
        inputMessage = chatInputMessage.value;
        messages = messages + '\n' + userName + ': '+ inputMessage + '\n' + timeNow;
        chatArea.value = messages;
        messages = chatArea.value;
        console.log(messages);
        chatInputMessage.value = '';
      };
    });  
  }
  
  chat();