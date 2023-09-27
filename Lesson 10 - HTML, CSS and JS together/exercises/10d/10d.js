function buttonStyleToggle(currentClass) {
  const element = document.querySelector(`.${currentClass}`);

  if (element.classList.contains('isToggled')) {
    element.classList.remove('isToggled');
  } else {
    element.classList.add('isToggled');
  }
};