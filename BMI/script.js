const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function() {
  const weight = document.getElementById("weightInput").value;
  const height = document.getElementById("heightInput").value;
  const bmi = weight / (height * height);

  document.getElementById("result").value = bmi.toFixed(2);
});
