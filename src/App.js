const { Console,Random } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE } = require("./Constant");
const Lotto = require("./Lotto");


class App {
  // ticket;

  constructor() {
    this.ticket = 0;
    this.lottoArr = [];
  }

  play() {
    this.inputPurchaseAmount();

  }

  /** 1. 로또 구입금액 받기 */
  inputPurchaseAmount() {
    Console.readLine(INPUT_MESSAGE.PURCHASE, (input) => {
      this.validatePurchase(input);
      this.ticket = input / 1000;
      console.log(this.ticket);
      this.printPurchaseAmount();
      this.creatLottos();
    });
  }

  /** 1-1. 입력값 유효성검사 */
  validatePurchase(input) {
    if (input % 1000 !== 0 || isNaN(input)) {
      throw new Error(ERROR_MESSAGE.PURCHASE);
    }
  }

  /** 2. 구매금액만큼 로또 번호 생성하기 */
  creatLottos() {
    for(let i = 0; i < this.ticket; i++) {
      let numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      let lotto = new Lotto(numbers);
      this.lottoArr.push(lotto);
    }
  }

  printPurchaseAmount() {
    Console.print(this.ticket + OUTPUT_MESSAGE.PURCHASE_AMOUNT);
  }
} 

const app = new App();
app.play();

module.exports = App;
