const inquirer = require('inquirer')

function update(model, action, city, updateCity, deleteCity, answer) {
    console.log(city);
    console.log(model);

    if (action == 'Add City') {
        return {
            ...model,
            name: city,
            temp: 1,
            max: 1,
            min: 1
        }
    }
}
/*
    } else if (action == 'Update City') {
        return {
            ...model,
            name: updateCity,
            temp: 2,
            max: 2,
            min: 2


        }
    }
}

    } else if (action == 'Delete City')
        return {
            ...model,
            name: deleteCity,
            temp: 3,
            max: 3,
            min: 3
        }
}*/

module.exports = {
    update
}