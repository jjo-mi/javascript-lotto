const { ERROR_MESSAGE }  = require("./Constant");
const { Console } = require("@woowacourse/mission-utils");


class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.sortData(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  validate(numbers) {
    let x = new Set(numbers);
    if (numbers.length !== 6 || numbers.length !== x.size) {
      throw new Error(ERROR_MESSAGE.LOTTO);
    }
  }

  sortData(numbers) {
    numbers.sort((a, b) => a - b);
   }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
