const { addLocation, dcity, inputCity, ucity } = require('./view')
const { printTable } = require('console-table-printer')
const { getCity } = require('./update')

//

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

        await update(model, action, city, ucity, dcity, answers)
            .then((updatedModel) => {
                if (updatedModel) {
                    state = {
                        ...state,
                        model: updatedModel,
                        currentView: view(updatedModel)
                    }
                }
            });
    }
}

module.exports = {
    app
}