script.js

const form = document.getElementById('prediction-form');
const predictBtn = document.getElementById('predict-btn');
const predictionResult = document.getElementById('prediction-result');

predictBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    fetch('/predict', {
        method: 'POST',
        body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
        predictionResult.innerText = `Prediction: ${data.prediction}`;
    })
    .catch((error) => console.error(error));
});