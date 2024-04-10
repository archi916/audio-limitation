document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById('startBtn');
    const stopAllBtn = document.getElementById('stopAllBtn');
    const note1Btn = document.getElementById('note1Btn');
    const note2Btn = document.getElementById('note2Btn');
    const note1 = document.getElementById('note1');
    const note2 = document.getElementById('note2');
    let isTemporalConflict = false;
    let alarm1Timeout, alarm2Timeout;
  
    startBtn.addEventListener('click', function () {
      isTemporalConflict = true;
      startGame();
    });
  
    stopAllBtn.addEventListener('click', function () {
      stopGame();
    });
  
    note1Btn.addEventListener('click', function () {
      compareNotes(1);
    });
  
    note2Btn.addEventListener('click', function () {
      compareNotes(2);
    });
  
    function startGame() {
      simulateTemporalConflict();
    }
  
    function simulateTemporalConflict() {
      // Generate random note files or use your own logic here
      const note1File = 'note1.mp3'; // Example
      const note2File = 'note2.mp3'; // Example
  
      note1.src = note1File;
      note2.src = note2File;
  
      note1.play();
      note2.play();
    }
  
    function compareNotes(selectedNote) {
      // Your logic to compare the notes
      if (selectedNote === 1) {
        // Note 1 selected
      } else {
        // Note 2 selected
      }
      stopGame();
    }
  
    function stopGame() {
      isTemporalConflict = false;
      stopSound(note1);
      stopSound(note2);
    }
  
    function stopSound(audio) {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    }
  });
  