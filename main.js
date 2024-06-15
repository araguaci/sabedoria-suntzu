// Declare our variables
const adviceId = document.querySelector(".advice-tag");
const adviceQuote = document.querySelector(".advice-quote");
const btn = document.querySelector(".btn");

function generateAdvice() {
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((response) => response.json())
    .then((response) => {
      let data = response.slip;
      let dataId = data.id;
      let dataAdvice = data.advice;

      adviceId.innerHTML = `advice # ${dataId}`;
      adviceQuote.innerHTML = dataAdvice;
    });
}

async function fetchQuoteBR() {
  isLoading = true;
  const response = await fetch("https://sheetdb.io/api/v1/0zqir3d56xf7n", {
      method: "GET"
  });
  try {
    const data = await response.json(); 
    console.log(data);
    idIndex = parseInt(Math.random() * (372));       
    const suntzuquote = data[idIndex].suntzuquotebr;
    console.log(suntzuquote);
    adviceId.innerHTML = `~~Sun Tzu # ${idIndex}`;
    adviceQuote.innerHTML = suntzuquote;

    return suntzuquote;
  } catch (error) {
    isLoading = false;
    throw new Error("Failed fetch quote!");
  }  

}

async function fetchQuote() {
  isLoading = true;
  const response = await fetch("https://api.zerosheets.com/v1/rsx", {
      method: "GET",
      headers: {
          Authorization: "Bearer TxIVjmoMot6vMCGzSodWh9UxzuzBFtpv"
      }
  });
  try {
    const data = await response.json(); 
    console.log(data);
    idIndex = parseInt(Math.random() * (372));       
    const suntzuquote = data[idIndex].suntzuquote;
    console.log(suntzuquote);
    adviceId.innerHTML = `~~Sun Tzu # ${idIndex}`;
    adviceQuote.innerHTML = suntzuquote;
/*
    const translate = require('google-translate-api');

    translate(suntzuquote, {from: 'en', to: 'pt'}).then((res: { text: any; from: { text: { autoCorrected: any; value: any; didYouMean: any; }; }; }) => {
      console.log(res.text);
        //=> Ik spreek Nederlands!
        console.log(res.from.text.autoCorrected);
        //=> true
        console.log(res.from.text.value);
        //=> I [speak] Dutch!
        console.log(res.from.text.didYouMean);
        //=> false
    });
*/

    return suntzuquote;
  } catch (error) {
    isLoading = false;
    throw new Error("Failed fetch quote!");
  }  

}

// When button is clicked, run the generateAdvice function
btn.addEventListener("click", () => {
  fetchQuoteBR();
});
