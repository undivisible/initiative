
function initCursor() {
  // Calculate the maximum X and Y coordinates
  const maxX = window.innerWidth - 5; // Subtract a small value to keep the cursor fully visible
  const maxY = window.innerHeight - 5;

  // Cursor
  document.addEventListener('mousemove', handleMove); 

  function handleMove(e) {
      // Update dot cursor 
      const dotCursor = document.querySelector('.dot-cursor');
      dotCursor.style.left = Math.min(maxX, e.pageX) + 'px';
      dotCursor.style.top = Math.min(maxY, e.pageY) + 'px';
  }
}

// Initialize the cursor after the DOM is loaded
window.addEventListener('DOMContentLoaded', initCursor);

function initGlow() {
  /* -- Glow effect -- */

  const blob = document.getElementById("blob");

  window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
  }
}

initCursor();
initGlow();

const delayedLink = document.getElementById('delayed-link');

delayedLink.addEventListener('click', e => {

  e.preventDefault();
  
  setTimeout(() => {
    window.location = e.target.href; 
  }, 500); // delay 500ms
  
});

// Get trigger button
const trigger = document.getElementById('fadeout');

// Handle click
trigger.addEventListener('click', () => {

  // Add fading out class to body
  document.body.classList.add('fade-out');
  
});

// Add click event to dropdown button
document.querySelector('.dropbtn').addEventListener('click', function(){
  // Toggle show/hide dropdown content
  document.querySelector('.dropdown-content').classList.toggle('show'); 
});
