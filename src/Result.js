const { OUTPUT_MESSAGE } = require("./Constant");
const { Console } = require("@woowacourse/mission-utils");

class Result {
    #rank1;
    #rank2;
    #rank3;
    #rank4;
    #rank5;
    #totalMoney;
    
  constructor() {
    this.#rank1 = 0;
    this.#rank2 = 0;
    this.#rank3 = 0;
    this.#rank4 = 0;
    this.#rank5 = 0;
    this.#totalMoney = 0;
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
      case 3: 
        this.#rank5++;
        this.#totalMoney += 5000;
        break; 
      case 4: 
        this.#rank4++;
        this.#totalMoney += 50000;
        break;    
      case 5: 
        if(isBonus) {
          this.#rank2++;
          this.#totalMoney += 30000000;  
        } else {
          this.#rank3++;
          this.#totalMoney += 1500000;
        }
        break;
      case 6: 
        this.#rank1++;
        this.#totalMoney += 2000000000;
        break;    
    }
  } 

  calculate(money) {
    return (this.#totalMoney / money * 100).toFixed(1);
  }

  printResult(money) {
    let rate = this.calculate(money);
    Console.print(OUTPUT_MESSAGE.RESULT_TITLE);
    Console.print(OUTPUT_MESSAGE.RANK5 + this.#rank5 + `개`);
    Console.print(OUTPUT_MESSAGE.RANK4 + this.#rank4 + `개`);
    Console.print(OUTPUT_MESSAGE.RANK3 + this.#rank3 + `개`);
    Console.print(OUTPUT_MESSAGE.RANK2 + this.#rank2 + `개`);
    Console.print(OUTPUT_MESSAGE.RANK1 + this.#rank1 + `개`);
    Console.print(OUTPUT_MESSAGE.RATE + rate + `%입니다.`);
  }
  
}

module.exports = Result;