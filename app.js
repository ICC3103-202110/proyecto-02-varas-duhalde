const { addLocation, deleteCity, inputCity, updateCity } = require('./view')
const { printTable } = require('console-table-printer')

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
        const { action, city, updateCity, deleteCity, answers } = await addLocation(model)

        const updatedModel = update(model, action, city, answers, updateCity, deleteCity)
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