const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle() {
    return chalk.green(
        figlet.textSync(
            'Weather App', {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model) {
    const { table } = model
    return table

}
/*
function inputForm(model) {
    const { input } = model
    const message = 'Increase or decrease?'
    return inquirer.prompt([{
        name: 'input',
        type: 'input',
        message: message,
        default: input,
        validate: function(value) {
            if (value === '+' || value === '-') {
                return true
            } else {
                return 'Enter + or -'
            }
        }
    }])
}
*/

function addLocation(model) {
    const { city } = model
    const { cities } = model
    const message = 'Select Action'
    const choices = ['Add City', 'Update City', 'Delete City']

    return inquirer.prompt([{
            name: 'action',
            type: 'list',
            message: message,
            default: city,
            choices: choices

        }, {


            name: 'city',
            type: 'input',
            message: 'write the city',

            when: (answers) => answers.action == ('Add City'),


        },
        {
            name: 'updateCity',
            type: 'list',
            message: 'what city do you want to Update ',
            choices: cities,

            when: (answers) => answers.action == 'Update City'

        },
        {
            name: 'deleteCity',
            type: 'list',
            message: 'what city do you want to Delete ',
            choices: cities,

            when: (answers) => answers.action == 'Delete City'

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
    addLocation
}