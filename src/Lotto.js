const { ERROR_MESSAGE }  = require("./Constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
