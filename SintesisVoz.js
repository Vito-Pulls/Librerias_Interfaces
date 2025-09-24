function speak() {
  const utterance = new SpeechSynthesisUtterance("Hello brav");
  speechSynthesis.speak(utterance);
}
