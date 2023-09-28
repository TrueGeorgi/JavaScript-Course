function buttonStyleToggle(currentClass, nextButton1, nextButton2) {
  const element = document.querySelector(`.${currentClass}`);

  if (element.classList.contains('isToggled')) {
    element.classList.remove('isToggled');
  } else {
    element.classList.add('isToggled');
    turnOffButtons(nextButton1);
    turnOffButtons(nextButton2);
  }

  function turnOffButtons(buttonToBeOff) {
    const elementToBeOff = document.querySelector(`.${buttonToBeOff}`);

    if(elementToBeOff.classList.contains('isToggled')) {
      elementToBeOff.classList.remove('isToggled');
    }
  }
};