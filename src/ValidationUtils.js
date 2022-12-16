const { ERROR_MESSAGE }  = require("./Constant");

class ValidationUtils{
  constructor(){} 

/** 1-2. 입력값 유효성 검토 */
  static validMoney(money) {    
    if((money % 1000) !== 0) {
      throw new Error(ERROR_MESSAGE.INPUT_MONEY);
    }
  }

  /** 4-2. 입력값 유효성 검토 */
  static validWinning(winningArr) {    
    let x = new Set(winningArr);
    if(winningArr.length !== 6 || winningArr.length !== x.size) {
      throw new Error(ERROR_MESSAGE.INPUT_WINNING);
    }
    if(winningArr.some(x => x > 45 || x < 1)) {
      throw new Error(ERROR_MESSAGE.INPUT_WINNING);
    }
  }

  /** 4-2. 입력값 유효성 검토 */
  static validBonus(bonus, winningArr) {    
    if(bonus < 1 || bonus > 45 || winningArr.includes(bonus)) {
      throw new Error(ERROR_MESSAGE.INPUT_BONUS);
    }
  }

}

module.exports = ValidationUtils;

