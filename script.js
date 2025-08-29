document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('weatherInfo').innerHTML = `<p>Error: ${data.error.message}</p>`;
            } else {
                const weatherInfo = `
                    <h2>Weather in ${data.city}</h2>
                    <p>Temperature: ${data.temperature}°C</p>
                    <p>Humidity: ${data.humidity}%</p>
                    <p>Wind Speed: ${data.wind_speed} m/s</p>
                    <p>Description: ${data.description}</p>
                `;
                document.getElementById('weatherInfo').innerHTML = weatherInfo;
            }
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerHTML = `<p>Error fetching data: ${error.message}</p>`;
        });
});
