module.exports = function toReadable (number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const thousands = ['', 'thousand', 'million', 'billion'];

  let numString = number.toString();
  let numLength = numString.length;
  let i = 0;
  let result = '';
  if (number === 0) {
    return "zero"
  } 
  while (numLength > 0) {
    let chunkLength = numLength - 3;
    if (chunkLength < 0) {
      chunkLength = 0;
    }

    let chunk = numString.substr(chunkLength, numLength);
    let chunkNum = parseInt(chunk);

    let h = Math.floor(chunkNum / 100);
    let t = Math.floor((chunkNum % 100) / 10);
    let o = Math.floor(chunkNum % 10);

    let chunkString = '';

    if (h > 0) {
      chunkString += ones[h] + ' hundred';
    }

    if (t > 1) {
      chunkString += (h > 0 ? ' ' : '') + tens[t];
      if (o > 0) {
        chunkString += ' ' + ones[o];
      }
    } else if (t === 1) {
      chunkString += (h > 0 ? ' ' : '') + ones[t * 10 + o];
    } else {
      chunkString += (h > 0 ? ' ' : '') + ones[o];
    }

    if (chunkNum > 0) {
      chunkString += (chunkString.length > 0 ? ' ' : '') + thousands[i];
    }

    result = chunkString + (result.length > 0 ? ' ' : '') + result;

    numLength -= 3;
    i++;
  }
return result.trimEnd()
}