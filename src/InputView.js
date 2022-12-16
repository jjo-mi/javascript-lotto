const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("./Constant");


const InputView = {

  /** 1. 구매 금액 입력받기 */
  money(callback) {
    Console.readLine(INPUT_MESSAGE.MONEY, callback);
},
    
}

module.exports = InputView;