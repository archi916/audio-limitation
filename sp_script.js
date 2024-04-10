document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById('startBtn');
    const note1Btn = document.getElementById('note1Btn');
    const note2Btn = document.getElementById('note2Btn');
    const dashboardDiv = document.querySelector('.dashboard');

    let isGameRunning = false;
    let osc1, osc2;
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
    startBtn.addEventListener('click', function () {
      isGameRunning = true;
      startGame();
    });
  
    note1Btn.addEventListener('click', function () {
      compareNotes(1);
    });
  
    note2Btn.addEventListener('click', function () {
      compareNotes(2);
    });
  
    function startGame() {
      playNotes();
    }
  
    function playNotes() {
      osc1 = createOscillator(208); 
      osc2 = createOscillator(205); 
  
      osc1.start();
      setTimeout(function() {
        osc1.stop();
        osc2.start();
        setTimeout(function() {
          osc2.stop();
          stopGame();
        }, 2000);
      }, 2000);
    }
  
    function createOscillator(frequency) {
      const oscillator = audioContext.createOscillator();
      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      oscillator.type = 'sine';
      oscillator.connect(audioContext.destination);
      return oscillator;
    }
  
    function compareNotes(selectedNote) {
      const correctNote = (osc1.frequency.value < osc2.frequency.value) ? 1 : 2;
      if (selectedNote === correctNote) {
        dashboardDiv.style.borderColor = "green";
        note1Btn.style.borderColor = "green";
        note2Btn.style.borderColor = "green";
    } else {
        dashboardDiv.style.borderColor = "red";
        note1Btn.style.borderColor = "red";
        note2Btn.style.borderColor = "red";
    }
      stopGame();
    }
  
    function stopGame() {
      isGameRunning = false;
      if (osc1) osc1.stop();
      if (osc2) osc2.stop();
    }
  });
  