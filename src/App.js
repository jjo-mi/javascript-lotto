const { Console, Random } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const ValidationUtils = require("./ValidationUtils");
const Lotto  = require("./Lotto");
const { OUTPUT_MESSAGE }  = require("./Constant");



class App {
  constructor() {
    this.lottoPiece = 0;
    this.lottoArr = [];

  }
  play() {
    this.inputMoney();
  }

  /** 1-1. 구매금액 받기 및 유효성 검사 */
  inputMoney() {
    InputView.money((money) => {
      ValidationUtils.validMoney(money);
      this.lottoPiece = money / 1000 
      Console.print(`\n` + this.lottoPiece + OUTPUT_MESSAGE.LOTTO_PIECE);
      this.creatLotto();
    })
  }

  /**2. 구입금액 만큼 로또 생성 */
  creatLotto() {
    for(let i = 0; i < this.lottoPiece; i++) {
      let numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      let lotto = new Lotto(numbers);
      this.lottoArr.push(lotto);
    }
    this.printLottos();
    this.inputWinning();
  }

  /** 3. 발행 로또 출력 */
  printLottos() {
    this.lottoArr.forEach(lotto => Console.print("[" + lotto.numbers.join(", ") + "]"));
  }

  /** 4. 당첨번호 받기 */
  inputWinning() {
    InputView.winning((winning) => {
      let winningArr = Array.from(winning.split(","),Number);
      ValidationUtils.validwinning(winningArr);
      console.log("###2", winningArr);
    })
  }




}

const app = new App();
app.play();

module.exports = App;
