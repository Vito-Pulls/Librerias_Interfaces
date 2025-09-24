function startRecognition() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Speech Recognition API no es compatible con este navegador.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "es-ES"; // Establece el idioma a español
  recognition.interimResults = false; // No queremos resultados intermedios
  recognition.maxAlternatives = 1; // Solo queremos la mejor alternativa

  recognition.start();

  recognition.onresult = (event) => {
    let salida = document.getElementById("output");
    let resultado = event.results[0][0].transcript;
    salida.innerText(resultado);
  };

  recognition.onerror = (event) => {
    console.error("Recognition error", event.error);
  };
}
