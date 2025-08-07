module.exports = function toReadable(number) {
  const listToNine = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };

  const listToNinety = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };

  const listToHundred = {
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  const onesNumberFunc = (num) => {
    const strNumber = num.toString();
    return listToNine[strNumber];
  };

  const teensNumberFunc = (num) => {
    const strNumber = num.toString();
    return listToNinety[strNumber];
  };

  const tensNumberFunc = (num) => {
    const strNumber = num.toString();
    const tens = (strNumber[0] * 10).toString();
    const ones = strNumber[1];

    if (ones === '0') {
      return listToHundred[tens];
    }
    return `${listToHundred[tens]} ${listToNine[ones]}`;
  };

  const hundredNumberFunc = (num) => {
    const strNumber = num.toString();
    const hundreds = strNumber[0];
    const rest = num % 100;

    if (rest === 0) {
      return `${listToNine[hundreds]} hundred`;
    }
    if (rest < 10) {
      return `${listToNine[hundreds]} hundred ${onesNumberFunc(rest)}`;
    }
    if (rest < 20) {
      return `${listToNine[hundreds]} hundred ${teensNumberFunc(rest)}`;
    }
    return `${listToNine[hundreds]} hundred ${tensNumberFunc(rest)}`;
  };

  if (number < 10) {
    return onesNumberFunc(number);
  }
  if (number < 20) {
    return teensNumberFunc(number);
  }
  if (number < 100) {
    return tensNumberFunc(number);
  }
  return hundredNumberFunc(number);
};
