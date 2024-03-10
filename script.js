
var intervalId;
var alarmAudio = document.getElementById('alarm-sound');

document.getElementById('set-alarm-btn').addEventListener('click', function() {
  var alarmTime = document.getElementById('alarm-time').value;

  // Clear any previous interval
  clearInterval(intervalId);

  // Start a new interval to check the alarm time
  intervalId = setInterval(function() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();

    var alarmHours = parseInt(alarmTime.split(':')[0]);
    var alarmMinutes = parseInt(alarmTime.split(':')[1]);

    if (currentHours === alarmHours && currentMinutes === alarmMinutes) {
      document.getElementById('alarm-message').classList.remove('hidden');
      playAlarmSound();
   
    }
  }, 1000);

  console.log('Alarm set for: ' + alarmTime);
});

document.getElementById('stop-alarm-btn').addEventListener('click', function() {
  alarmAudio.pause();
  document.getElementById('alarm-message').classList.add('hidden');
  stopAlarmSound();
});

function playAlarmSound() {
  alarmAudio.play();
}

function stopAlarmSound() {
  alarmAudio.pause();
}
