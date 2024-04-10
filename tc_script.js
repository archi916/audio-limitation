document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById('startBtn');
  const stopAllBtn = document.getElementById('stopAllBtn');
  let isTemporalConflict = false;
  let alarm1, alarm2;
  let alarm1Timeout, alarm2Timeout;

  startBtn.addEventListener('click', function () {
    isTemporalConflict = true;
    simulateTemporalConflict(type='alarm');
  });

  metronome_start.addEventListener('click', function () {
    isTemporalConflict = true;
    simulateTemporalConflict(type='metronome');
  });

  drum_start.addEventListener('click', function () {
    isTemporalConflict = true;
    simulateTemporalConflict(tyep='drum');
  });


  stopAllBtn.addEventListener('click', function () {
    stopAll();
  });

  function simulateTemporalConflict(type,choice) {
    if (type==='metronome'){
      alarm1 = new Audio('34_metronome.mp3');
      alarm2 = new Audio('44_metronome.mp3');
    }
    else if (type==='drum'){
      alarm1 = new Audio('44_drum.mp3');
      alarm2 = new Audio('34_drum.mp3');
    }
    else if(type==='alarm'){
      if (choice==='1') alarm1 = new Audio('alarm1.wav');
      else if(choice==='2') alarm2 = new Audio('alarm2.mp3');
    }
    if(alarm1) playAlarm(alarm1, 200);
    if(alarm2) playAlarm(alarm2, 200);
  }

  function playAlarm(alarm, delay) {
    setTimeout(function () {
      if (isTemporalConflict) {
        alarm.play();
        alarm.addEventListener('ended', function () {
          playAlarm(alarm, delay);
        });
      }
    }, delay);
  }

  function stopSound(audio, timeout) {
    if (audio) {
      console.log("audio")
      audio.pause();
      audio.currentTime = 0;
      clearTimeout(timeout);
    }
  }

  function stopAll() {
    console.log("All")
    stopSound(alarm1, alarm1Timeout);
    stopSound(alarm2, alarm2Timeout);
  }
});
