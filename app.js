const { inputForm, listForm } = require('./view')
const { printTable } = require('console-table-printer')


async function app(state, update, view) {
    while (true) {
        const { model, currentView } = state
        const { title, table } = currentView

        console.clear()
        console.log(title)
        printTable(table)

        const { input1, input2, first, second } = await listForm(model)
        const updatedModel = update(first, second, model, input2, input1)
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