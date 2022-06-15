const url = "https://sheets.googleapis.com/v4/spreadsheets/1YSI89ygeY9W5yag-dX8p4IcuB87rV1S8PGiUz4L6abk/values/Datos_Personales!A:B?key=AIzaSyA9PPOcYQLIR5clBtIpdTH9t94yie8iwF4";

// Get the data from the Google Sheet
fetch(url)
  .then(response => response.json())
  .then(data => { 
    console.log(data);
    // Create a new array with the data
    const dataArray = data.values;
    console.log(dataArray);
  });
