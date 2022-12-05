class Lotto {
  #numbers;
 
  constructor(numbers) {
    this.validate(numbers);
    this.sortNumbers(numbers);
    this.#numbers = numbers;
    this.print();
  }

  get numbers() {
    return this.#numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    } 
  }

  sortNumbers(numbers) {
    return numbers.sort((a, b) => a-b);
  }

  print() {
    console.log(this.#numbers);
  }


  // TODO: 추가 기능 구현
}

module.exports = Lotto;
