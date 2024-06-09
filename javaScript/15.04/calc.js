let num1 = 0
let num2 = 0
action = ""
const result = 0
const elemResult = document.querySelector("#result")
const minusButtonSelector = document.querySelector("#minus")
const plusButtonSelector = document.querySelector("#plus")
const divideButtonSelector = document.querySelector("#divide")
const multiButtonSelector = document.querySelector("#multi")


function addNumberToBoard0() {
    elemResult.innerText += "0"
}
function addNumberToBoard1() {
    elemResult.innerText += "1"
}
function addNumberToBoard2() {
    elemResult.innerText += "2"
}
function addNumberToBoard3() {
    elemResult.innerText += "3"
}
function addNumberToBoard4() {
    elemResult.innerText += "4"
}
function addNumberToBoard5() {
    elemResult.innerText += "5"
}
function addNumberToBoard6() {
    elemResult.innerText += "6"
}
function addNumberToBoard7() {
    elemResult.innerText += "7"
}
function addNumberToBoard8() {
    elemResult.innerText += "8"
}
function addNumberToBoard9() {
    elemResult.innerText += "9"
}
function addNumberToBoardPoint() {
    elemResult.innerText += "."
}

function addNum() {
    num1 = parseFloat(elemResult.innerText)
    action = "+"
    elemResult.innerText = ""
}

function subNum() {
    num1 = parseFloat(elemResult.innerText)
    action = "-"
    elemResult.innerText = ""
}

function divNum() {
    num1 = parseFloat(elemResult.innerText)
    action = "/"
    elemResult.innerText = ""
}

function mulNum() {
    num1 = parseFloat(elemResult.innerText)
    action = "*"
    elemResult.innerText = ""
}

function printResult() {
    num2 = parseFloat(elemResult.innerText)
    const result = eval(`${num1} ${action} ${num2}`)
    elemResult.innerText = result
}

function clearBoard() {
    num1 = 0
    num2 = 0
    action = ""
    elemResult.innerText = ""

}