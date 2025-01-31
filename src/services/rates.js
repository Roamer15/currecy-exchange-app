const EXCHANGE_RATE_URL = 'https://openexchangerates.org/api/latest.json?app_id=3451093d9dc54a29b302cf4c4e64ac7c'

export const fetchRates = async() => {
    try{
        const response = await fetch(EXCHANGE_RATE_URL)
        if(!response.ok){
            throw new Error("Rates could not be fetched")
        }
        const data = response.json()
        return data.rates
    }
    catch(error){
        console.error(error)
    }
}