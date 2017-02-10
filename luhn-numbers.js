function isNumber(number){
  if (! Number(number)) {
    return false;
  } else {
    var reverseDigits = getDigits(number).reverse();
    var firstStep = [];
    for (var i = 0; i < reverseDigits.length; i++){
      if (i % 2 === 1){
        firstStep.push(reverseDigits[i] * 2);
      } else {
        firstStep.push(reverseDigits[i])
      }
    }
  return (luhnSum(firstStep) % 10) === 0;
  };
}

function luhnSum(array){
  result = 0;
  array.forEach(function(x){
    if (x >= 10) {
      x -= 9;
    }
    result += Number(x);
  });
  console.log(result);
  return result;
}

function getDigits(number){
  return String(number).split('');
}

module.exports = {
  isNumber: isNumber,
  getDigits: getDigits,
  luhnSum: luhnSum
}
