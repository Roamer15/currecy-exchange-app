const EXCHANGE_RATES_URL = 'https://openexchangerates.org/api/latest.json?app_id=3451093d9dc54a29b302cf4c4e64ac7c'

export const fetchRates = async () => {
    try {
        const response = await fetch(EXCHANGE_RATES_URL)
        if(!response.ok){
            throw new Error("Rates can't be fetched at the moment")
        }
        const data = await response.json()
        console.log(data.rates)
        return data.rates
    }
    catch(error) {
        console.error(error)
    }
}