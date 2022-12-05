const { Console,Random } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE } = require("./Constant");
const Lotto = require("./Lotto");
const result = require("./Result");


class App {

  constructor() {
    this.ticket = 0;
    this.lottoArr = [];
    this.winningArr = [];
    this.bonusNumber = [];
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
      this.validateWinning(input);
      this.winningArr =  input.split(',').map(Number);
      this.inputBonus();
    });
  }

  /** 4-1. 당첨번호 유효성 검토(중복값, 6자리)  */
  validateWinning(input) {
    let winning = input.split(',').map(Number);
    let x = new Set(winning);
    if (winning.length !== 6 ||  winning.length !== x.size) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER);
    }
  }
  // findNumber(el, num) {
  //   if(el < num) {
  //     return true;
  //   }
  // }

  /** 5. 보너스 번호 입력 */
  inputBonus() {
    Console.readLine(INPUT_MESSAGE.BONUS_NUMBER, (input) => {
      this.bonusNumber = input.split(',').map(Number);
      this.validateBonus(input);
      let compairResult = new result(this.lottoArr, this.winningArr, this.bonusNumber);

    });
  }

  /** 5-1. 보너스 번호 유효성 검토 */
  validateBonus() {
    if (this.bonusNumber.length !== 1) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER);
    }
  }

  

} 

const app = new App();
app.play();

module.exports = App;
