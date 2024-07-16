// let obj = {
//     name : "atif"
// }
// // let value = Object.assign({},obj);
// let value = {...obj}
// value.name="ali";
// console.log(value);
// console.log(obj);

// //  DEEP COPY;
// let obj1 = {
//     name : "hamza",
//     address:{
// country : "pak",
// city : "karachi"
//     }
// }
// let deep1 = JSON.parse(JSON.stringify(obj1));
// deep1.address.city="LAHORE"
// console.log(deep1);
// console.log(obj1);

//  "STRICT MODE" ; 
//  "use strict";
// // a = 10;
// // console.log(a);
// function my(a,b,b) {
//     console.log(a+b+b);
// }
// my(10,20,30);


const input = document.querySelector(".amount");
const convertamount = document.querySelector(".converted");
const currencyEl = document.querySelector(".currency");
const tocurrencyEl = document.querySelector(".tocurrency");

const result = document.querySelector(".result");


const countries = [{
    code: "USD", name: "United States Dllar"
}
    , { code: "PKR", name: "Pakistan Rupees" },
{ code: "AED", name: "United Arab Emirates Dirham" },
{ code: "ARS", name: "Argentina Peso" },
{ code: "AUD", name: "Austrialian Dolar" },
{ code: "BRL", name: "Brazilian Real" },
{ code: "CAD", name: "Canadian Dollar" },
{ code: "CHF", name: "Swiss Franc" },
{ code: "CLP", name: "Cilean Peso" },
{ code: "CNY", name: "cHINES Yuan" },
{ code: "COP", name: "Colombian Peso" },
{ code: "czk", name: "Czech  Korean" },
{ code: "DKK", name: "Danish Krone" },
{ code: "EGP", name: "Egyption pound" },
{ code: "EUR", name: "Euro" },
{ code: "GBP", name: "British Pound Sterling" },
{ code: "HKD", name: "Hong Kong Dollar" },
{ code: "HRK", name: "Croatian Kuna" },
{ code: "HUF", name: "Hungarian Forint" },
{ code: "IDR", name: "Indonesian Rupian" },
{ code: "INR", name: "Indian Rupee" },
{ code: "ISK", name: "Icelandic Krona" },
{ code: "JPY", name: "Japanese Yen" },
{ code: "KRW", name: "South Koren Won" },
{ code: "MXN", name: "Mexican Peso" },
{ code: "MYR", name: "Malaysian Ringgit" },
{ code: "NOK", name: "Norwegian Krone" },
{ code: "NZD", name: "New Zealand Dollar" },
{ code: "PEN", name: "Peruvian SOL" },
{ code: "PHP", name: "Philippine Peso" },
{ code: "PLN", name: "pOLISH Zolty" },
{ code: "RON", name: "Romanian lEU" },
{ code: "RUB", name: "Russian Ruble" },
{ code: "SEK", name: "SWedish Krona" },
{ code: "SGD", name: "Sinapore Dollar" },
{ code: "THB", name: "Tahi Bhat" },
{ code: "TRY", name: "Turkish Lira" },
{ code: "TWD", name: "Taiwan New Dollar" },
{ code: "UAH", name: "Ukrainian Hryvnia" },
{ code: "UYU", name: "Uruguayan Peso" },
{ code: "VND", name: "Vietnamese Dong" },
{ code: "ZAR", name: "South African Rand" },
]


countries.forEach(country => {
    const option1 = document.createElement("option");
    option1.value = country.code;
    // show content ;
    option1.textContent = `${country.code}(${country.name})`;
    currencyEl.appendChild(option1);


    const option2 = document.createElement("option");
    option2.value = country.code;
    // show content ;
    option2.textContent = `${country.code}(${country.name})`;
    tocurrencyEl.appendChild(option2);


    currencyEl.value = "USD";
    tocurrencyEl.value = "PKR"

});

// using API
const getexchangeRate = async () => {
    const amount1 = parseFloat(input.value);
    const fromCurrency = currencyEl.value;
    const tocurrency1 = tocurrencyEl.value;

    //fethch ; 
    let responce = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
let data = await responce.json();
 let change = data.rates[tocurrency1];
 let changerates = (amount1 * change);
 convertamount.value = changerates;
 result.textContent = `${amount1} ${fromCurrency} = ${changerates} ${tocurrency1}`
}

input.addEventListener("input",getexchangeRate);
// tocurrencyEl.addEventListener("input",getexchangeRate);
// currencyEl.addEventListener("input",getexchangeRate);
//window.addEventListener("load",getexchangeRate);





