
window.onload = function () {
    loadSavedUsername();
};

function saveUsername() {
    let userNameInput = document.getElementById('userName');
    let userName = userNameInput.value;


    localStorage.setItem('savedUsername', userName);


    loadSavedUsername();
}

function removeUsername() {

    localStorage.removeItem('savedUsername');
    loadSavedUsername();
}

function loadSavedUsername() {
    let savedUsernameDiv = document.getElementById('savedUsername');
    let savedUsername = localStorage.getItem('savedUsername');

    if (savedUsername) {
        savedUsernameDiv.textContent = 'Nome salvato: ' + savedUsername;
    } else {
        savedUsernameDiv.textContent = 'Nessun nome salvato';
    }
}




//********************************************************************
//******************************* ESERCIZIO 2*************************//


     var intervalId;

     function startCounter() {
         intervalId = setInterval(function () {
             incrementCounter();
         }, 1000); 
     }

     function incrementCounter() {
         let counterValue = parseInt(sessionStorage.getItem('counter')) || 0;
         counterValue++;
         sessionStorage.setItem('counter', counterValue);
         updateCounter(counterValue);
     }

     function loadCounter() {
         let counterValue = parseInt(sessionStorage.getItem('counter')) || 0;
         updateCounter(counterValue);
         startCounter();
     }

     function updateCounter(value) {
         document.getElementById('counter').innerText = value;
     }
     
     window.onload = function() {
         loadCounter();
     };

     window.onbeforeunload = function() {
         clearInterval(intervalId);
     };