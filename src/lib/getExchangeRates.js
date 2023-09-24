import axios from "axios";
export const getExchangeRates = async ({base, symbols, setLatest}) => {
  try {
    const {data} = await axios(`https://api.apilayer.com/exchangerates_data/latest?${base?`base=${base}`:''}${symbols?`&symbols=${symbols}`:''}`,{headers:{
        "apikey" : "e3c1sREYmLjjTNt0zdDohowpUpiJ7cRU"
      }})
    setLatest(data)
  }catch (e) {
    throw new Error(`From getExchangeRates ${e.message}`)
  }
}




