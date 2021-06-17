const { addLocation, dcity, inputCity, ucity } = require('./view')
const { printTable } = require('console-table-printer')
    //
let weather = {
        "apiKey": "05742665ac70e1c44830f0a44ce1a51c",
        fetchWeather: function() {
            fetch(

            )
        }
    }
    // Impure
async function app(state, update, view) {
    while (true) {
        const { model, currentView } = state
        const { title, table } = currentView
        // I/O
        //console.clear()
        console.log(title)
        printTable(table)
            // FORM (Ask user input)
        const { action, city, ucity, dcity, answers } = await addLocation(model)

        const updatedModel = update(model, action, city, ucity, dcity, answers)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
}

module.exports = {
    app
}