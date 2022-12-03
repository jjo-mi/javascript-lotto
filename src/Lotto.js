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


  // /** 2. 로또 구매금액만큼 로또티켓 생성하기 */
  // creatLotto(ticket) {
  //   let totalLottos = [];
  //   const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);

  //   for(let i = 0; i < ticket; i++) {
  //     this.validate(numbers);
  //     totalLottos.push(numbers);  
  //   }
  //   totalLottos.forEach(el => {
  //     console.log(el)
  //   });
  //   return totalLottos;
  // }


  // TODO: 추가 기능 구현
}

module.exports = Lotto;
