class Calculator {
    constructor(value) {
      this.result = value;
    }
  
    add(value) {
      this.result += value;
      return this;
    }
  
    subtract(value) {
      this.result -= value;
      return this;
    }
  
    multiply(value) {
      this.result *= value;
      return this;
    }
  
    divide(value) {
      if (value === 0) {
        throw new Error("Division by zero is not allowed");
      }
      this.result /= value;
      return this;
    }
  
    power(value) {
      this.result = Math.pow(this.result, value);
      return this;
    }
  
    getResult() {
      return this.result;
    }
  }
  
  // Instancia global para los botones
  const calc = new Calculator(10);
  
  function showResult() {
    try {
      const output = calc.getResult();
      document.getElementById("output").textContent = "Result: " + output;
    } catch (error) {
      document.getElementById("output").textContent = "Error: " + error.message;
    }
  }