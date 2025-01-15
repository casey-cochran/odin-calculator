document.addEventListener("DOMContentLoaded", () => {
    // code...

    let num1;
    let num2;
    let operator;
    let numbersSelected = [];

    const setAnswer = ( answerValue ) => {
        const answerField = document.querySelector('.answer');
        answerField.innerText = answerValue
        return answerValue
    }

    const operate = ( num1, num2, mathSymbol ) => {
        switch(mathSymbol) {
            case '+':
                return setAnswer( num1 + num2 )
            case '/':
                return setAnswer( num1 / num2 )
            case 'x':
                return setAnswer( num1 * num2 )
            case '-':
                return setAnswer( num1 - num2 )
            default:
                return;
        }
    }


    // select all my number elements and add click events
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(numberEl => {
        numberEl.addEventListener('click', (e) => {
            const number = Number(e.target.innerText);
            numbersSelected.push(number);
            const answerDisplay = document.querySelector('.answer');
            if ( numbersSelected.length > 0 ) {
                answerDisplay.innerText = numbersSelected.join('')
            } else {
                answerDisplay.innerText = number;
            }
        });
    });


    const ancillarySymbols = document.querySelectorAll('.clear, .percent, .pos-neg');
    ancillarySymbols.forEach(symbol => {
        symbol.addEventListener('click', (e) => {
            switch(e.target.innerText) {
                case 'A/C':
                    // run logic to clear
                    const answerDisplay = document.querySelector('.answer');
                    num1 = num2 = operator = null;
                    numbersSelected = [];
                    answerDisplay.innerText = 0;
                    return;
                case '+/-':
                    //logic for pos or neg
                    console.log('pos neg here')
                    return;
                case '%':
                    //logic to get percent
                    console.log('percents here')
                    return;
                default:
                    return;
            }
        })
    })

    const equationSymbols = document.querySelectorAll('.equation-symbol');
    equationSymbols.forEach(equationSymb => {
        equationSymb.addEventListener('click', (e) => {
            const answerDisplay = document.querySelector('.answer')

            if ( !operator && !num1 ) {
                num1 = Number(numbersSelected.join(''))
                numbersSelected = []
            } else if ( operator && !num2  ) {
                num2 = Number(numbersSelected.join(''))
                num1 = operate(num1, num2, operator)
                answerDisplay.innerText = num1
                num2 = null
                numbersSelected = []
            }
            else if ( operator && operator !== '=' ) {
                num2 = Number(numbersSelected.join(''))
                num1 = operate(num1, num2, operator)
                answerDisplay.innerText = num1
                num2 = null
                numbersSelected = []
            }

            if ( e.target.innerText !== '=' ) operator = e.target.innerText;
        })
    })
  });
