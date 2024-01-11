import { Component } from 'react'
import './App.css'
import FoodData from './resources/FoodData'
import FoodBox from './components/FoodBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filteredData: [...FoodData],
    };
  }

  render() {

    let handleChange = (event) => {
      let searchText = event.target.value.toLowerCase()
    

      let filteredData = FoodData.filter((element) => {
        return element.name.includes(searchText);
      });

      this.setState({
        filteredData: filteredData,
      });
    }
    return(
      <>
        <div className="input">
            <input type="text" onChange={handleChange} placeholder="Search a Food Item" />
        </div>
        {this.state.filteredData.map((element,i) => (
          <FoodBox foodItem = {element} key={i}/>
        ))}
      </>
    )
  }
}

export default App
