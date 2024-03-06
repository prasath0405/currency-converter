const currencyAl_one = document.getElementById('currency-one');
const currencyAl_two = document.getElementById('currency-two');
const rupeeAl_one = document.getElementById('rupee-one');
const rupeeAl_two = document.getElementById('rupee-two');
const rateAl = document.getElementById('rate');
const swap = document.getElementById('swap');


function calculate() {
  const currency_one = currencyAl_one.value;
  const currency_two = currencyAl_two.value;

  
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);

      const rate = data.rates[currency_two];
      rateAl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      rupeeAl_two.value = (rupeeAl_one.value * rate).toFixed(2);
    });
}

currencyAl_one.addEventListener('change', calculate);
rupeeAl_one.addEventListener('input', calculate);
currencyAl_two.addEventListener('change', calculate);
rupeeAl_two.addEventListener('input', calculate);

swap.addEventListener('click', function() {
  const temp = currencyAl_one.value;

  currencyAl_one.value = currencyAl_two.value;

  currencyAl_two.value = temp;
  calculate();
});

calculate();