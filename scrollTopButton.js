function createScrollTopButton(options = {}) {
  const {
    size = '50px',
    position = { bottom: '20px', right: '20px' },
    color = '#007bff',
    textColor = '#ffffff',
    opacity = 1,
    scrollThreshold = 200,
    borderRadius = '50%',
    fontSize = '24px',
    icon = '↑',
    zIndex = 9999,
    transitionDuration = '0.4s'
  } = options;

  const button = document.createElement('button');
  button.className = 'scroll-top-button';
  button.innerHTML = icon;

  Object.assign(button.style, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '0',
    visibility: 'hidden',
    pointerEvents: 'none',
    transition: `opacity ${transitionDuration} ease, visibility ${transitionDuration} ease`,
    
    position: 'fixed',
    width: size,
    height: size,
    backgroundColor: color,
    color: textColor,
    borderRadius: borderRadius,
    border: 'none',
    cursor: 'pointer',
    zIndex: zIndex,
    fontSize: fontSize,
    ...position
  });

  document.body.appendChild(button);

  function updateVisibility() {
    const shouldBeVisible = window.scrollY > scrollThreshold;
    if (shouldBeVisible) {
      button.style.opacity = opacity;
      button.style.visibility = 'visible';
      button.style.pointerEvents = 'auto';
    } else {
      button.style.opacity = '0';
      button.style.visibility = 'hidden';
      button.style.pointerEvents = 'none';
    }
  }

  window.addEventListener('scroll', updateVisibility);
  updateVisibility();

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return button;
}
