let lastTime = 0;

  
  const colors = ['#ff6666', '#ff66ff', '#6666ff', '#66ffff', '#66ff66', '#ffff66', '#ff9966'];

  document.addEventListener('click', function(e) {

    const currentTime = new Date().getTime();

    if (currentTime - lastTime < 600) { 
      createHeart(e.clientX, e.clientY);

    }

    lastTime = currentTime;

  });

  function createHeart(x, y) {

    var heart = document.createElement('div');

    heart.classList.add('heart');

    heart.innerHTML = '❤️';

    heart.style.left = (x - 10) + 'px';

    heart.style.top = (y - 10) + 'px';

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    heart.style.color = randomColor;

    document.body.appendChild(heart);

    setTimeout(function() {

      heart.remove();

    }, 500);

  }

  
