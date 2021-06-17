const inquirer = require('inquirer')

function update(model, action, city, updateCity, deleteCity, answer) {
    const { table } = model
    const { cities } = model
    console.log(city);
    console.log(model);

    if (action == 'Add City') {
        const nextCity = city

        row = { name: city, temp: 1, max: 1, min: 1 }
        table.push(row)
        cities.push(city)

        return {
            ...model,
            name: nextCity,
            temp: 1,
            max: 1,
            min: 1,
            cities: cities,
            table: table
        }

    } else if (action == 'Update City') {
        return {
            ...model,
            name: updateCity,
            temp: 2,
            max: 2,
            min: 2


        }
    } else if (action == 'Delete City')
        return {
            ...model,
            name: deleteCity,
            temp: 3,
            max: 3,
            min: 3
        }
}


module.exports = {
    update
}