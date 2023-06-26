window.addEventListener("DOMContentLoaded", () => {
    const needle = document.querySelector(".needle");
    const speedValue = document.querySelector(".speed-value");
    const maxSpeed = 350; // Maximale snelheid van speedometer in km/h. is uiteraard aanpasbaar
  
    function setSpeed(speed) {
      const rotation = (speed / maxSpeed) * 180 - 90;
      needle.style.transform = `translate(-50%, 0) rotate(${rotation}deg)`;
      speedValue.textContent = speed;
    }
  
    // Hier wordt aangegeven dat elke 2 seconden een andere snelheid word weergegeven
    setInterval(() => {
      const speed = Math.floor(Math.random() * (maxSpeed + 1));
      setSpeed(speed);
    }, 2000); // Hier kan je de tijd aanpassen
  });
  
  