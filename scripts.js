class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear();
    }


    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    deleteNumber() {
        this.currentOperand=this.currentOperand.toString().slice(0,-1)
    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }
    chooseOperation(operation) {
        if(this.currentOperand ==='') return
        if(this.previousOperand!=='')
        {
            this.compute()
        }
        this.operation=operation
        this.previousOperand=this.currentOperand;
        this.currentOperand=''

    }

    compute() {
        let computeResult
        const firsNum = parseFloat(this.previousOperand)
        const secondNum = parseFloat(this.currentOperand)
        if (isNaN(firsNum) || isNaN(secondNum)) return
         switch (this.operation)
         {
             case '+':
                computeResult= firsNum+secondNum
                break
            case '-':
                computeResult= firsNum-secondNum
                break
            case '÷':
                computeResult= firsNum/secondNum
                break
            case '*':
                computeResult= firsNum*secondNum
                break
            default:
                return
         }
         this.currentOperand=computeResult
         this.operation=undefined
         this.previousOperand=''

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText=this.previousOperand
    }

} //ENDCLASS


const numberButtons = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click',()=>{
    calculator.compute()
    calculator.updateDisplay()
})
    allClearButton.addEventListener('click',()=>{
        calculator.clear()
        calculator.updateDisplay()
    })


deleteButton.addEventListener('click',()=>{
    calculator.deleteNumber()
    calculator.updateDisplay()
})