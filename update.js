const inquirer = require('inquirer')
const axios = require('axios').default;



async function getCity(cityName) {
    const axios = require('axios').default;
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=05742665ac70e1c44830f0a44ce1a51c`)

    .then((response) => {

            const temp_min = response.data.main.temp_min;
            const temp_max = response.data.main.temp_max;
            const temp = response.data.main.temp;
            return [temp_min, temp_max, temp];

        })
        .catch((error) => {
            console.log(error);
            return false;
        })
}
async function updateCity(cityName) {
    const axios = require('axios').default;
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=05742665ac70e1c44830f0a44ce1a51c`)

    .then((response) => {

            const temp_min = response.data.main.temp_min;
            const temp_max = response.data.main.temp_max;
            const temp = response.data.main.temp;
            return [temp_min, temp_max, temp];

        })
        .catch((error) => {
            console.log(error);
            return false;
        })
}
async function update(model, action, city, ucity, dcity) {
    const { table } = model
    const { cities } = model

    if (action == 'Add City') {

        const nextCity = city
        return getCity(nextCity)
            .then((getCityResponse) => {
                if (getCityResponse) {

                    const addCities = { name: nextCity, temp: getCityResponse[2] - 273, max: getCityResponse[1] - 273, min: getCityResponse[0] - 273 }
                    cities.push(nextCity)
                    table.push(addCities)
                    return {
                        ...model,
                        /*name: nextCity,
                        temp: getCityResponse[2],
                        max: getCityResponse[1],
                        min: getCityResponse[0],*/
                        cities: cities,
                        table: table
                    }

                }
                return false
            })
            .catch(() => {
                console.log('la ciudad no existe');
                return false;
            })

    } else if (action == 'Update City') {
        let findCity = table.findIndex(function(index) {
            return index.name == ucity;
        });

        return updateCity(findCity)
            .then((getCityResponse) => {
                if (getCityResponse) {

                    return {
                        ...model,
                        name: ucity,
                        temp: getCityResponse[2],
                        max: getCityResponse[1],
                        min: getCityResponse[0],
                        cities: cities,
                        table: table


                    }

                }
                return false
            })
            .catch(() => {
                console.log('');
                return false;
            })

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
    update,
    getCity,
}