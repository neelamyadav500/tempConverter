// Convert Celsius to Fahrenheit
const cToF = (celsius) => {
    const cTemp = celsius;
    const cToFahr = cTemp * 9 / 5 + 32;
    return cToFahr;
  };
  
  // Convert Fahrenheit Celsius
  const fToC = (fahrenheit) => {
    const fTemp = fahrenheit;
    const fToCel = (fTemp - 32) * 5 / 9;
    return fToCel;
  };
  
  // Convert Celsius to Kelvin
  const cToK = (celsius) => {
    const cTemp = celsius;
    const cToKel = cTemp + 273.15;
    return cToKel;
  };
  
  // Convert Kelvin to Celsius
  const kToC = (kelvin) => {
    const kTemp = kelvin;
    const kToCel = kTemp - 273.15;
    return kToCel;
  };
  
  // Convert Fahrenheit to Kelvin
  const fToK = (fahrenheit) => {
    const fTemp = fahrenheit;
    const fToKel = (fTemp - 32) * 5 / 9 + 273.15;
    return fToKel;
  };
  
  // Convert Kelvin to Fahrenheit
  const kToF = (kelvin) => {
    const kTemp = kelvin;
    const kToFahr = (kTemp - 273.15) * 9 / 5 + 32;
    return kToFahr;
  };
  
  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    // Get input values
    const degreeInput = document.getElementById("degree");
    const degree = parseFloat(degreeInput.value);
  
    const typeSelect = document.getElementById("type");
    const type = typeSelect.value;
  
    const resultTypeSelect = document.getElementById("result-type");
    const resultType = resultTypeSelect.value;
  
    // Convert temperature based on selected units
    let result;
    if (type === "celsius") {
      if (resultType === "celsius") {
        result = degree;
      } else if (resultType === "fahrenheit") {
        result = cToF(degree);
      } else if (resultType === "kelvin") {
        result = cToK(degree);
      }
    } else if (type === "fahrenheit") {
      if (resultType === "celsius") {
        result = fToC(degree);
      } else if (resultType === "fahrenheit") {
        result = degree;
      } else if (resultType === "kelvin") {
        result = fToK(degree);
      }
    } else if (type === "kelvin") {
      if (resultType === "celsius") {
        result = kToC(degree);
      } else if (resultType === "fahrenheit") {
        result = kToF(degree);
      } else if (resultType === "kelvin") {
        result = degree;
      }
    }
  
    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Result: ${result} ${resultType}`;
  };
  
  // Add event listener to form
  const form = document.getElementById("conversion-form");
  form.addEventListener("submit", handleFormSubmit);