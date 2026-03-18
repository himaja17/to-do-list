function recommendCar() {
  let budget = document.getElementById("budget").value;
  let brand = document.getElementById("brand").value;
  let result = "";

  if (budget === "") {
    result = "Enter budget!";
  } 
  else if (budget <= 5) {
    result = "Maruti Alto / S-Presso";
  } 
  else if (budget <= 10) {
    result = "Swift / Tata Nexon / Hyundai i20";
  } 
  else if (budget <= 20) {
    result = "Hyundai Creta / Kia Seltos";
  } 
  else {
    result = "Fortuner / XUV700";
  }

  document.getElementById("result").innerText = result;
}