const { Console,Random } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE } = require("./Constant");
const Lotto = require("./Lotto");


class App {

  constructor() {
    this.ticket = 0;
    this.lottoArr = [];
    this.winningArr = [];
  }

  play() {
    this.inputPurchaseAmount();
    // this.inputWinning();

  }

  /** 1. 로또 구입금액 받기 */
  inputPurchaseAmount() {
    Console.readLine(INPUT_MESSAGE.PURCHASE, (input) => {
      this.validatePurchase(input);
      this.ticket = input / 1000;
      console.log(this.ticket);
      this.printPurchaseAmount();
      this.creatLottos();
      this.inputWinning();

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

  /** 3. 로또 구매량 출력 */
  printPurchaseAmount() {
    Console.print(this.ticket + OUTPUT_MESSAGE.PURCHASE_AMOUNT);
  }

  /** 4. 당첨번호 입력창 구현 및 유효성검토 */
  inputWinning() {
    Console.readLine(INPUT_MESSAGE.WINNING_NUMBER, (input) => {
      this.validateWinning();
      this.winningArr =  input.split(',').map(Number);

    });
  }

  /** 4-1. 당첨번호 유효성 검토(중복값, 6자리)  */
  validateWinning(input) {
    let winning = input.split(',').map(Number);
    let x = new Set(this.winningArr);
    if (winning .length !== 6 ||  winning.length !== x.size) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER);
    }
  }
  // findNumber(el, num) {
  //   if(el < num) {
  //     return true;
  //   }
  // }

  

} 

const app = new App();
app.play();

module.exports = App;
