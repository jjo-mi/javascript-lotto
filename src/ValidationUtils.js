const { ERROR_MESSAGE }  = require("./Constant");

class ValidationUtils{
  constructor(){} 

/** 1-2. 입력값 유효성 검토 */
  static validMoney(money) {    
    if((money % 1000) !== 0) {
      throw new Error(ERROR_MESSAGE.INPUT_MONEY);
    }
  }
}

module.exports = ValidationUtils;

