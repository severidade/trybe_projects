window.onload = function() {
  let rangeValue = document.getElementById('range').value;
  const rangeInput = document.getElementById('range');

  let n = rangeValue;
  let symbol = '😀';
    let inputLine = '';
    
    for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
      inputLine = inputLine + symbol;
      let li = document.createElement('li');
      document.getElementById('myItemList').appendChild(li).innerHTML = `${inputLine}`;
    };

  document.getElementById('value').innerText = rangeValue; // valor inicial definido pelo range

  function updatedRangeValue() {
    rangeValue = document.getElementById('range').value;
    document.getElementById('value').innerText = rangeValue;
  }

  function upDateBase() {
    const remove = document.querySelectorAll('#myItemList li');
    remove.forEach((element) => {
      element.remove();
    });

    let rangeValue = document.getElementById('range').value;

    let n = rangeValue;
    let symbol = '😀';
      let inputLine = '';
      
      for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
        inputLine = inputLine + symbol;
        let li = document.createElement('li');
        document.getElementById('myItemList').appendChild(li).innerHTML = `${inputLine}`;
      };
  }

  rangeInput.addEventListener('input', updatedRangeValue);
  rangeInput.addEventListener('mouseup', upDateBase); 
  rangeInput.addEventListener('touchend', upDateBase); 

};

// https://stackoverflow.com/questions/19625334/range-slider-event-handler-javascript/19625696
//https://pt.stackoverflow.com/questions/138489/como-fa%C3%A7o-para-mostrar-o-value-do-input-type-range
  