function randomColor() {
      const colors = ['#f44336', '#e91e63', '#9c27b0', '#2196f3', '#4caf50', '#ff9800', '#00bcd4', 'red', 'blue'];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function createConfetti() {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.backgroundColor = randomColor();
      confetti.style.animationDuration = (2 + Math.random() * 3) + 's';
      document.body.appendChild(confetti);
      setTimeout(() => {
        confetti.remove();
      }, 4000);
    }

    function createFloatingStar() {
      const star = document.createElement('div');
      star.classList.add('star');
      const size = Math.random() * 8 + 4;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.left = Math.random() * 100 + 'vw';
      star.style.animationDuration = (5 + Math.random() * 5) + 's';
      document.body.appendChild(star);
      setTimeout(() => star.remove(), 10000);
    }

    function createFloatingHeart() {
      const heart = document.createElement('div');
      heart.innerHTML = '❤️';
      heart.style.position = 'fixed';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.top = '100%';
      heart.style.fontSize = (16 + Math.random() * 20) + 'px';
      heart.style.animation = 'riseHeart 6s linear';
      heart.style.zIndex = '0';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }


    function startCelebration() {
      // Hide overlay
      document.getElementById('startOverlay').style.display = 'none';

      // Show birthday message
      document.getElementById('birthdayMessage').style.display = 'block';

      // confettiInterval = setInterval(createConfetti, 50);

      // Play birthday song
      const song = document.getElementById('birthdaySong');
      song.play();

      // Start confetti
      for (let i = 0; i < 50; i++) {
        setTimeout(createConfetti, i * 40);
      }

      // Start floating stars
      setInterval(createFloatingStar, 150);

    }

    setInterval(createFloatingHeart, 220);