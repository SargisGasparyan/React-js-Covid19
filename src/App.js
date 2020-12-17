import './App.css';
import React from 'react'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import {fetchData} from './api/index'
import CountryPicker from './components/CountryPicker/CountryPicker'
class App extends React.Component {
  state={
    data:{},
    country:""
   
  }
  async componentDidMount(){
    const data= await fetchData()
    this.setState({data:data})
  }
   onChangeCountry=async(country)=>{
    const data= await fetchData(country)
    this.setState({data:data,
                   country:country})
  }
  render(){
    const{data,country}=this.state
    return (
      <div className="App">
        <Cards data={data}/>
        <Chart data={data} country={country}/>
        <CountryPicker onChangeCountry={this.onChangeCountry}/>
      </div>
    );
  }
  }
  export default App