let isEqualClicked = false;
  
    function appendToResult(value) {
      if (isEqualClicked) {
        document.getElementById("numberField").value = "";
        isEqualClicked = false;
      }
      document.getElementById("numberField").value += value;
    }
  
    function clearResult() {
      document.getElementById("numberField").value = "";
      isEqualClicked = false;
    }
  
    function calculateResult() {
      const expression = document.getElementById("numberField").value;
      const result = eval(expression);
      document.getElementById("numberField").value = result;
      isEqualClicked = true;
    }

    function clearLast() {
      let inputValue = document.getElementById("numberField");
      inputValue.value = inputValue.value.slice(0, -1);
      document.getElementById("numberField").value = inputValue.value;
    }
