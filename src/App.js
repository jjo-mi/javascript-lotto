const { Console, Random } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const ValidationUtils = require("./ValidationUtils");
const {ERROR_MESSAGE}  = require("./Constant");



class App {
  play() {
    this.inputMoney();
  }

  inputMoney() {
    InputView.money((money) => {
      ValidationUtils.validMoney(money);
      let lottoPiece = money / 1000 
      console.log('###', lottoPiece);
    })

  }


}

const app = new App();
app.play();

module.exports = App;
