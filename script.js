const calculateButton = document.getElementById("calculate");
const rateInput = document.getElementById("rate");
const resultElement = document.getElementById("result");
const goldTypeSelect = document.getElementById("gold-type");

calculateButton.addEventListener("click", () => {
  const rate = parseFloat(rateInput.value);
  const goldType = goldTypeSelect.value;
  let result;

  if (goldType === "24k") {
    gst_hatao = rate - (rate * 0.03);
    result = Math.round((gst_hatao * 22)/24).toFixed(2);
  } else if (goldType === "24k+GST") {
    result = Math.round((rate * 22)/24).toFixed(2);
  }

  resultElement.textContent = `The 22k gold rate is \u20B9${result}`;
});