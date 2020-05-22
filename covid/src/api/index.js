const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeAbleUrl = url;

    if (country) {
        changeAbleUrl = `${url}/countries/${country}`;
    }

    try {
        const response = await fetch(changeAbleUrl);
        const data = await response.json();
        console.log('data', data);
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        }
        //console.log(data);
        return modifiedData;

    } catch (error) {
        console.log('Error in Fetching Data');
    }
}

export const fetchDailyData = async () => {
    try {
        const response = await fetch(`${url}/daily`);
        const data = await response.json();
        //console.log(data);
        console.log('dai data',data);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;
    } catch (error) {
        console.log('Error in Fetching Daily Data');
    }
}

export const fetchCountries = async () => {
    try {
        const response = await fetch(`${url}/countries`);
        
        const { countries } = await response.json();
        console.log("co data", countries);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log('Error in Fetching Countries');
    }
}