// const app = require("./App");
const Lotto = require("./Lotto");


class Result {
    constructor(lottoArr, winningArr, bonusNumber) {
        this.rank5 = 0;
        this.rank4 = 0;
        this.rank3 = 0;
        this.rank2 = 0;
        this.rank1 = 0;
        this.compareLotto(lottoArr, winningArr, bonusNumber);
        this.prinsResult();
    }
    get Result() {
        return this.prinsResult();
      }

    /** 6. 당첨번호와 구매번호 비교 */
    compareLotto(lottoArr, winningArr, bonusNumber) {
        lottoArr.forEach(lotto => {
            let sameNumber = lotto.numbers.filter(x => winningArr.includes(x));
            let isBonus = this.findBonus(lotto, bonusNumber, winningArr);
            let correctCount = sameNumber.length
            this.rankFilter(correctCount, isBonus);
        });
    }

    /** 6-1. 비교한 결과 등수 별로 카운트 더하기 */
    rankFilter(correctCount, isBonus) {
        switch(correctCount) {
          case 3: 
            this.rank5++;
            break;
          case 4:
            this.rank4++;
            break;
          case 5:
            if(isBonus) {
                this.rank2++;
            } else {this.rank3++;}
            break;
          case 6:
            this.rank1++;
            break;
        }
    }

    /**6-2. 로또번호 내 보너스 번호 찾기*/
    findBonus(lotto, bonusNumber, winningArr) {
        let isfind = lotto.numbers.filter(bonusNumber => winningArr.includes(bonusNumber));
        return isfind;
    }

    prinsResult() {
        console.log('### 1: ', this.rank1);
        console.log('### 2: ', this.rank2);
        console.log('### 3: ', this.rank3);
        console.log('### 4: ', this.rank4);
        console.log('### 5: ', this.rank5);
    }
}

module.exports = Result;