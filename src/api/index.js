import axios from 'axios'
const url="https://covid19.mathdro.id/api"


export const fetchData =  async (country) => {
    let changeUrl=url
    if(country){
        changeUrl=`${changeUrl}/countries/${country}`
    }
        try {
            
            const{data:{confirmed,deaths,lastUpdate,recovered}}=await axios.get(changeUrl)
            return {confirmed,deaths,lastUpdate,recovered}
        } catch (error) {
            
        }
    }
    


export const fetchDailyData =  async () => {
    try {
        const{data}=await axios.get(`${url}/daily`)
        const modifiedData=data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            date:dailyData.reportDate,
            deaths:dailyData.deaths.total
        }))
        return modifiedData
    } catch (error) {   
    }
}

export const fetchCountryData = async () => {
        try {
            const {data:{countries}}= await axios.get(`${url}/countries`)
                return countries.map((country)=>country.name)

        } catch (error) {
            
        }
}

