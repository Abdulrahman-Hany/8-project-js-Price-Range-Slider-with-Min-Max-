let rangeInput = document.querySelectorAll(".range-input input");
let priceInput = document.querySelectorAll(".price-input input");
let progress =document .querySelector(".Slider .progress");
let prices = 1000;

priceInput.forEach( input => {
  input.addEventListener("input", (e)=> {
    let minVal = parseInt(priceInput[0].value);
    let maxVal = parseInt(priceInput[1].value);

    if((maxVal - minVal >= prices) && maxVal <= 10000 ){
      if(e.target.className === "input-min"){
        rangeInput[0].value = minVal;
        progress.style.left = (minVal / rangeInput[0].max) * 100 + "%" ;
      }else {
        rangeInput[1].value = maxVal;
        progress.style.right = 100- (maxVal / rangeInput[1].max) * 100 + "%" ;
      }
    }
  })
})


rangeInput.forEach( input => {
  input.addEventListener("input", (e)=> {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);
    if(maxVal - minVal < prices){
      if(e.target.className === "range-min"){
        rangeInput[0].value = maxVal - prices;
      }else {
        rangeInput[1].value = minVal + prices;
      }
    }else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%" ;
      progress.style.right = 100- (maxVal / rangeInput[1].max) * 100 + "%" ;
    }
  })
})