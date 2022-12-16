const { Console, Random } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const ValidationUtils = require("./ValidationUtils");
const Lotto  = require("./Lotto");
const { OUTPUT_MESSAGE } = require("./Constant");
const Result = require("./Result");



class App {
  constructor() {
    this.lottoArr = [];
    this.winningArr = [];
    this.bonus = [];

  }
  play() {
    this.inputMoney();
  }

  /** 1-1. 구매금액 받기 및 유효성 검사 */
  inputMoney() {
    InputView.money((money) => {
      ValidationUtils.validMoney(money);
      let lottoPiece = money / 1000 
      Console.print(`\n` + lottoPiece + OUTPUT_MESSAGE.LOTTO_PIECE);
      this.creatLotto(lottoPiece);
    })
  }

  /**2. 구입금액 만큼 로또 생성 */
  creatLotto(lottoPiece) {
    for(let i = 0; i < lottoPiece; i++) {
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

  /** 4. 당첨 번호 받기 */
  inputWinning() {
    InputView.winning((winning) => {
      this.winningArr = Array.from(winning.split(","),Number);
      ValidationUtils.validWinning(this.winningArr);
      console.log("###2", this.winningArr);
      this.inputBonus();
    })
  }

  /** 5. 보너스 번호 받기 */
  inputBonus() {
    InputView.bonus((input) => {
      this.bonus = Number(input);
      ValidationUtils.validBonus(this.bonus, this.winningArr);
      let result = new Result();
      result.compare(this.lottoArr, this.winningArr, this.bonus);
      result.printResult();
    })
  }

}

const app = new App();
app.play();

module.exports = App;
