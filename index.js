import {id} from './id.js';

//TODO: handle it with gitattribute or limitate access.
const url = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/Datos_Personales!A:B?key=AIzaSyA9PPOcYQLIR5clBtIpdTH9t94yie8iwF4`;

// Get the data from the Google Sheet
fetch(url)
  .then(response => response.json())
  .then(data => { 
    console.log(data);
    // Create a new array with the data
    const dataArray = data.values;
    console.log(dataArray);
  });
