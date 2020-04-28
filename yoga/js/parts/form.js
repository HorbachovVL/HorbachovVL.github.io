function forms(){
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо,мы скоро с вами свяжемся',
        failure: 'Ошибка'
    };


    
    let formModal = document.querySelector('.main-form'),
        formContact = document.getElementById('form'),
        input = document.getElementsByTagName('input'),
        statusMassage = document.createElement('div');
 
        statusMassage.classList.add('status');
 
    function sendForm(formElement) {
        formElement.addEventListener('submit', function(event) {
            event.preventDefault();
            formElement.appendChild(statusMassage);
            let formData = new FormData(formElement);
    
            function postData(data) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    //request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); 
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); 
    
                    
                    let obj = {};
                    formData.forEach(function(value, key) {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);
    
                    //request.send(formData); 
                    request.send(json); 
    
                    request.addEventListener('readystatechange', function() {
                        if(request.readyState < 4) {
                            resolve();
                        } else if(request.readyState === 4 && request.status === 200) {
                            resolve(); 
                        } else {
                            reject(); 
                        }
                    });
    
                    
                });
            } 
            function clearInput() {
                for(let i = 0; i < input.length; i++) {
                    console.log(input[i].value);
                    input[i].value = '';
                }
            }
        
                postData(formData)
                    .then(()=> statusMassage.innerHTML = message.loading)
                    .then(()=> statusMassage.innerHTML = message.success)
                    .catch(()=> statusMassage.innerHTML = message.failure)
                    .then(clearInput);
            });
        }
 
        sendForm(formModal);
        sendForm(formContact);
}

module.exports = forms;