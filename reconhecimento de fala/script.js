if ("webkitSpeechRecognition" in window) {
    var recognition = new webkitSpeechRecognition();

    recognition.continuous = true;

    recognition.interimResult = true;

    var startButton = document.getElementById("start-button");

    var output = document.getElementById("output");

    var transcript = "";
    
    startButton.addEventListener('click',
     () => {
        recognition.start()
     });
     

     recognition.onresult = function (event) {
   
        for(var i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript
        };
        
        
        output.innerHTML = transcript;
        
     }
     recognition.onerror = function (event) {
        console.log('error: ' + event.error);
    }
    
} else {
    console.log("seu navegador nao suporta a web speech API")

}

function resetRecon () {
    transcript = ""
    output.innerHTML = transcript

}

