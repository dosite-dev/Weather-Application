function searchWeather() {
    var city = document.querySelector('input[type="text"]').value;
    var apikey ='77b551fe2297c66195e5d34f598a48ad';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        document.querySelector('.celcius').innerHTML = data.main.temp;
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidityP').innerHTML = data.main.humidity;
        document.querySelector('.windS').innerHTML = data.wind.speed;
      })
      .catch(error => console.error('Error:', error));
   }





