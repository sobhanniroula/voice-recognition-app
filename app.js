const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('Voice activated!!');
};

recognition.onresult = function(e) {
    console.log(e);
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};


// add the listener
btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}