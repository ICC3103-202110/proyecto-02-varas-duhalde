const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle() {
    return chalk.green(
        figlet.textSync(
            'Unit Converter App', {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model) {
    const { leftValue } = model
    const { leftUnit } = model
    const { rightValue } = model
    const { rightUnit } = model
    return [{
        'leftValue': leftValue,
        'leftUnit': leftUnit,
        'rightValue': rightValue,
        'rightUnit': rightUnit
    }]
}

function inputForm(model) {
    const { input1 } = model
    const message = 'Left Temperature is source?'
    return inquirer.prompt([{
        name: 'input1',
        type: 'input1',
        message: message,
        default: 'Y/n',
        validate: function(value) {
            if (value === 'Y' || value === 'n') {
                return true
            } else {
                return 'Enter Y/n'
            }

        },
    }])
}



function listForm(model) {
    const { rightValue } = model
    const { input1 } = model
    const message1 = 'Left Temperature is source?'
    const { input2 } = model
    const message2 = 'Temperature value to convert?'
    const { first } = model
    const message3 = 'From?'
    const { second } = model
    const message4 = 'to?'
    const choices = ['Celsius', 'Fahrenheit', 'Kelvin']
    return inquirer.prompt([{
            name: 'input1',
            type: 'input1',
            message: message1,
            default: 'Y/n',
            validate: function(value) {
                if (value === 'Y') {
                    return true
                } else if (value === 'n') {
                    return true

                } else {
                    return 'Enter Y/n'
                }

            }
        },
        {
            name: 'input2',
            type: 'input2',
            message: message2,
            default: rightValue,
            validate: function(value) {
                if (value >= 0 || value === 0) {
                    return true
                } else {
                    return 'Enter number'
                }

            }
        },

        {
            name: 'first',
            type: 'list',
            message: message3,
            default: first,
            choices: choices
        },
        {
            name: 'second',
            type: 'list',
            message: message4,
            default: second,
            choices: choices
        }
    ])
}


// Get actual console view
function view(model) {
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,

    listForm
}