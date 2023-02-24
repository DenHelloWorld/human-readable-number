module.exports = toReadable = (number) => {
        const ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
      
        let onesVal = number % 10;
        let tensVal = (number % 100 - onesVal) / 10;
        let hundredsVal = (number - (tensVal * 10) - onesVal) / 100;
      
        if (tensVal === 1) {
          return `${hundreds[hundredsVal]} ${teens[onesVal]}`;
        } else {
          return `${hundreds[hundredsVal]} ${tens[tensVal]} ${ones[onesVal]}`;
        }
      };
