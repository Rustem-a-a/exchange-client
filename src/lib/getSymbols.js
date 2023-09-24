import axios from "axios";

export const getSymbols = async (setLatest) => {
    try {
        const {data} = await axios("https://api.apilayer.com/exchangerates_data/symbols", {
            headers: {
                "apikey": "e3c1sREYmLjjTNt0zdDohowpUpiJ7cRU"
            }
        })
        return data
    } catch (e) {
        throw new Error(`From getExchangeRates ${e.message}`)
    }
}

