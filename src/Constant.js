const INPUT_MESSAGE = {
    MONEY: "구입금액을 입력해 주세요.\n",
    WINNING_NUMBER: "당첨 번호를 입력해 주세요.\n",
    BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n"
}

const OUTPUT_MESSAGE = {
    LOTTO_PIECE: "개를 구매했습니다.",
    RESULT_TITLE: "당첨 통계\n---",
    RANK5: "3개 일치 (5,000원) - ",
    RANK4: "4개 일치 (50,000원) - ",
    RANK3: "5개 일치 (1,500,000원) - ",
    RANK2: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    RANK1: "6개 일치 (2,000,000,000원) - ",
    RATE: "총 수익률은 "
}

const ERROR_MESSAGE = {
    INPUT_MONEY: "[ERROR] 구매금액은 1,000원 단위로만 입력해야합니다.",
    INPUT_WINNING: "[ERROR] 당첨 번호는 1 ~ 45 사이의 숫자여야하며, 숫자마다 ','를 넣어 입력해주세요. ",
    INPUT_BONUS: "[ERROR] 보너스 번호는 1 ~ 45 사이 숫자로, 당첨번호와는 다른 숫자여야합니다.",
    LOTTO: "[ERROR] 로또 번호는 6개여야 합니다."
}

module.exports = {INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };