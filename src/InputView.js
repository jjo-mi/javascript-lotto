const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("./Constant");


const InputView = {

  /** 1. 구매 금액 입력받기 */
  money(callback) {
    Console.readLine(INPUT_MESSAGE.MONEY, callback);
},
   
  /** 4. 당첨번호 입력받기 */
  winning(callback) {
    Console.readLine(INPUT_MESSAGE.WINNING_NUMBER, callback);
},

  /** 5. 보너스 번호 입력받기 */
  bonus(callback) {
    Console.readLine(INPUT_MESSAGE.BONUS_NUMBER, callback);
},
   
}

module.exports = InputView;