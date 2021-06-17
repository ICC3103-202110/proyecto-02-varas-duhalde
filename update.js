const inquirer = require('inquirer')

function update(model, action, city, ucity, dcity) {
    const { table } = model
    const { cities } = model

    if (action == 'Add City') {
        const nextCity = city
        console.log(city)
        addCities = { name: nextCity, temp: 1, max: 1, min: 1 }
        table.push(addCities)
        cities.push(nextCity)

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
        let findCity = table.findIndex(function(index) {
            return index.name == ucity;
        });
        const newTemp = table[findCity].temp = 123
        const newMax = table[findCity].max = 123
        const newMin = table[findCity].min = 123
        return {
            ...model,
            name: city,
            temp: newTemp,
            max: newMax,
            min: newMin,
            cities: cities,
            table: table,

        }
    } else if (action == 'Delete City') {
        var findCity = table.findIndex(function(index) {
            return index.name == dcity;
        })
        table.splice(findCity, 1)
        cities.splice(findCity, 1)
        return {
            ...model,
            cities: cities,
            table: table
        }
    }
}

module.exports = {
    update
}