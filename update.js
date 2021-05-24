const inquirer = require('inquirer')

function convertUnits(input2, first, second) {
    if (first === 'Celsius') {
        if (second === 'Celsius') {
            return input2
        } else if (second === 'Fahrenheit') {
            return input2 * (9 / 5) + 32
        } else if (second === 'Kelvin') {
            return (input2 + 273.15)
        }
    } else if (first === 'Fahrenheit') {
        if (second === 'Celsius') {
            return ((input2 - 32) * (5 / 9))
        } else if (second === 'Fahrenheit') {
            return input2
        } else if (second === 'Kelvin') {
            return (input2 - 32) * (5 / 9) + 273.15
        }
    } else if (first === 'Kelvin') {
        if (second === 'Celsius') {
            return input2 - 273.15
        } else if (second === 'Fahrenheit') {
            return (input2 - 273.15) * (9 / 5) + 32
        } else if (second === 'Kelvin') {
            return input2
        }
    }

}



function update(first, second, model, input2, input1) {
    if (input1 === 'Y') {
        return {
            ...model,
            leftValue: input2,
            leftUnit: first,
            rightValue: convertUnits(input2, first, second),
            rightUnit: second
        }
    } else if (input1 === 'n')
        return {
            ...model,
            leftValue: convertUnits(input2, first, second),
            leftUnit: second,
            rightValue: input2,
            rightUnit: first

        }
}

module.exports = {
    update
}