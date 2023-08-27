const calcForm = document.getElementById('calculator__form');
const calcInputMassa = document.getElementById('calculator__input-massa');
const calcInputHeight = document.getElementById('calculator__input-height');
const calcMessageResult = document.getElementById('calculator__message-result');
const calcMessageStatus = document.getElementById('calculator__message-status');

function calculatorOfIndex(){
    calcInputMassa.value = '';
    calcInputHeight.value = '';
    calcForm.addEventListener('submit', function(event) { 
      event.preventDefault(); 
      let massa = 0
      let height = 0
      let message = ''
      let messageResult = '';
      let messageStatus = '';
      massa = parseFloat(calcInputMassa.value)
      height = (parseFloat(calcInputHeight.value) / 100)
      let index = (massa /(height ** 2)).toFixed(2);
      if(index < 16){
        message = 'Выраженный дефицит массы тела'
      }
      if((index >= 16) && (index < 18,5)){
        message = 'Недостаточная (дефицит) масса тела'
      }
      if((index >= 18.5) && (index < 25)){
        message = 'Норма'
      }
      if(index >= 25 && index < 30){
        message = 'Избыточная масса тела (предожирение)'
      }
      if(index >= 30 && index < 35){
        message = 'Ожирение первой степени'
      }
      if(index >= 35 && index < 40){
        message = 'Ожирение второй степени'
      }
      if(index >= 40){
        message = 'Ожирение третьей степени (морбидное)'
      }
      if ((isNaN(index) == false) && (massa > 0) && (height > 0)){
        messageResult = `Индекс вашего тела равен: ${index}`;
        messageStatus = `Соответствие между массой человека и его ростом: ${message}`
      } else {
        messageResult = 'Ошибка ввода данных';
        messageStatus = 'Проверьте введенные данные';
      }
      calcMessageResult.innerHTML = messageResult;
      calcMessageStatus.innerHTML = messageStatus;
      console.log(messageResult);
      console.log(messageStatus);
    })
  }
  
  function chat(){
    chatArea.value = '';
    chatInputName.value = welcomeInput.value;
    chatInputMessage.value = '';
    let today = new Date();
    let userName = welcomeInput.value;
    let inputMessage = '';
    let timeNow = '';
    chatForm.addEventListener('submit', function(event) { 
      event.preventDefault();
      timeNow = today.toLocaleTimeString('ru-RU');
      userName = welcomeInput.value;
      
      inputMessage = chatInputMessage.value;
      messages = messages + '\n' + userName + ': '+ inputMessage + '\n' + timeNow;
      chatArea.value = messages;
      messages = chatArea.value;
      console.log(messages);
      chatInputMessage.value = '';
    });
    
  };
calculatorOfIndex();