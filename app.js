
get()
setInterval(get, 2000)

function send() {
    var username = document.getElementById('username').value;
    var message = document.getElementById('message').value;
    (async () => {
            var response = await fetch('chat.php', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: [`username=${username}`, `message=${message}`];
                 
            });
            var answer = await response.json();
            if (answer.status === "ok") document.getElementById('text').value = "";
            if (answer.status === "error") document.getElementById('text').value = answer.error;
            }
        )();
}

function get() {
    (async () => {
                var response = await fetch('chat.php');
                var answer = await response.json();
                let str = '';
                let auth = '';
                for (i in answer.messages) {
                auth = `<div class='message'>${answer.messages[i].username}</div>`;
                str = str + `<div class='message'>${answer.messages[i].message}</div>`;
                 }
            document.getElementById('author').innerHTML = auth;
            document.getElementById('messages').innerHTML = str;
            }
        )();
    
}
