const { OUTPUT_MESSAGE } = require("./Constant");
const { Console } = require("@woowacourse/mission-utils");


class Result {
    #rank1;
    #rank2;
    #rank3;
    #rank4;
    #rank5;
    
  constructor() {
    this.#rank1 = 0;
    this.#rank2 = 0;
    this.#rank3 = 0;
    this.#rank4 = 0;
    this.#rank5 = 0;
  }

  compare(lottoArr, winningArr, bonus) {
    lottoArr.forEach(lotto => {
      let sameNumber = lotto.numbers.filter(x => winningArr.includes(x));
      let correctCount = sameNumber.length;
      let isBonus = lotto.numbers.includes(Number(bonus));
      this.classification(correctCount, isBonus);
    });
  }

//   findBonus(winningArr, bonus) {
//     if(winningArr.includes(bonus)) {
//       return true;
//     } 
//   }

  classification(correctCount, isBonus) {
    switch(correctCount) {
      case 3: this.#rank5++;
        break; 
      case 4: this.#rank4++;
        break;    
      case 5: 
        if(isBonus) {
          this.#rank2++;  
        } else {this.#rank3++;}
        break;
      case 6: this.#rank1++;
        break;    
    }
  } 

  printResult() {
    Console.print(OUTPUT_MESSAGE.RESULT_TITLE);
    Console.print(OUTPUT_MESSAGE.RANK5 + this.#rank5 + `개`);
    Console.print(OUTPUT_MESSAGE.RANK4 + this.#rank4 + `개`);
    Console.print(OUTPUT_MESSAGE.RANK3 + this.#rank3 + `개`);
    Console.print(OUTPUT_MESSAGE.RANK2 + this.#rank2 + `개`);
    Console.print(OUTPUT_MESSAGE.RANK1 + this.#rank1 + `개`);
  
  }
  
}

module.exports = Result;