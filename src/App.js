const { Console,Random } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE } = require("./Constant");


class App {
  play() {
    this.inputPurchaseAmount();

  }

  /** 1. 로또 구입금액 받기 */
  inputPurchaseAmount() {
    Console.readLine(INPUT_MESSAGE.PURCHASE, (input) => {
      let ticket = input / 1000;
      console.log(ticket);
      this.validatePurchase(input);

      
    });
  
  }

  /** 1-1. 입력값 유효성검사 */
  validatePurchase(input) {
    if (input % 1000 !== 0 || isNaN(input)) {
      throw new Error(ERROR_MESSAGE.PURCHASE);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
