import './App.css';
import React, { useState } from "react"
import axios from 'axios'
import Filter from './components/Filter';
import User from './components/UI/User'

const GENDERS = ['male','female']
const NATIONALITIES = ['AU','BR', 'CA', 'CH','DE','DK','ES','FI','FR','GB','IE','IR','NO','NL','NZ','TR','US']


const App = () => {
  const [userData, setUserData] = useState([])
  const [sortedData, setSortedData] = useState([])
  const [nationalityFilter, setNationalityFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  const onClickGetUser = () => {
    axios.get("https://randomuser.me/api/?results=500")
      .then((response) => {
        setUserData(response.data.results)
        setSortedData(response.data.results)
      })
  }


  const getNationalityFilter= (e) => {
    setNationalityFilter(e.target.value);
  }

  const getGenderFilter= (e) => {
    setGenderFilter(e.target.value);
  }

  const sortByFilter = (filterName, filterValue, dataToFilter) => {
    return dataToFilter.filter(user => {
      return user[filterName] === filterValue
    })
  }

  const onClickApplyFilter = () => {
    let dataToFilter = userData; 
    if(nationalityFilter){
      dataToFilter = sortByFilter('nat', nationalityFilter, dataToFilter)
    }
    if(genderFilter){
      dataToFilter = sortByFilter('gender', genderFilter, dataToFilter)
    }
    
    setSortedData(dataToFilter)
   }


  const showData = sortedData.length > 0
  const isFilterPicked = nationalityFilter || genderFilter;
  const renderedData = isFilterPicked ? sortedData : userData

  return (
    <div className='App' >
      <h2>App TestAPI</h2>
      <button className="button" onClick={onClickGetUser}>Get Users</button>
      <button className="button" onClick={onClickApplyFilter}>Apply Filter</button>
      <Filter onChangeFilter={getGenderFilter} options={GENDERS}/>
      <Filter onChangeFilter={getNationalityFilter} options={NATIONALITIES}/>
      <div className='cards-container'> 
      {!showData && <h3>Empty Data</h3>}
      {showData && renderedData.map((user) => <User user={user} key={user.cell}/>)}
      </div>
     
    </div>
  )
}

export default App;
