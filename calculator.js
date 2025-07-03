function addNumbers() {
    const firstNumber = document.getElementById("num1").valueAsNumber;
    const secondNumber = document.getElementById("num2").valueAsNumber;
    const addition = firstNumber + secondNumber;
    document.getElementById("Result").textContent = "Answer: " + addition;
}