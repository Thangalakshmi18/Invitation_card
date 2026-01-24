// Get references to the heart button and ribbon elements
const heartButton = document.getElementById('heart-button');
const ribbon = document.getElementById('ribbon');

// Add click event listener to the heart button
heartButton.addEventListener('click', function() {
  // Add the 'open' class to trigger the ribbon opening animation
  ribbon.classList.add('open');

  // After the animation finishes (2 seconds), redirect to invitation.html
  setTimeout(function() {
    window.location.href = 'invitation.html';
  }, 2000); // Match the animation duration
});

// Randomize star twinkling intervals
// This code sets random animation delays for each star to create varied twinkling effects
document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => {
    const randomDelay = Math.random() * 3; // Random delay between 0 and 3 seconds
    star.style.animationDelay = randomDelay + 's';
  });
});

// Dynamic Stars Generator for all 3 segments
document.addEventListener('DOMContentLoaded', () => {
  const starsContainer = document.querySelector('.stars');
  const numStars = 60; // number of stars
  const totalHeight = window.innerHeight * 3; // cover 3 segments

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Random position across all 3 segments
    const top = Math.random() * totalHeight;
    const left = Math.random() * window.innerWidth;

    star.style.top = `${top}px`;
    star.style.left = `${left}px`;

    // Random size and delay
    const size = Math.random() * 3 + 2; // 2-5px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.animationDelay = `${Math.random() * 2}s`;

    starsContainer.appendChild(star);
  }
});
