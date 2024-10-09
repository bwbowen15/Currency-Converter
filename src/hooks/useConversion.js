import { useEffect } from "react";
import { useState } from "react";

const useConversion = (selectedCurrency) => {
const [data, setdata] = useState({})
useEffect(()=> {
    const fetchData = async () => {
        //this is a free api please dont steal my key :) thank you!
        const result = await fetch(`https://v6.exchangerate-api.com/v6/fbf2c247bbdf6ef6b65058ae/latest/${selectedCurrency}`)
        result.json().then(json => {
            //console.log(json.conversion_rates)
           setdata(json.conversion_rates)
                    })
                
    }
    fetchData()
    //console.log(data)
},[selectedCurrency])
return data
}

export default useConversion;

