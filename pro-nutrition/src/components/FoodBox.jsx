import FoodData from "./resources/FoodData";
import "./FoodBox.css";
import { Component } from "react";

class FoodBox extends Component {
  constructor() {
    super();
    this.state = {
      filteredData: [...FoodData],
      clickCount : 0
    };
  }

  render() {

    let handleChange = (event) => {
      let searchText = event.target.value.toLowerCase();

      let filteredData = FoodData.filter((element) => {
        return element.name.includes(searchText);
      });

      this.setState({
        filteredData: filteredData,
      });
    };


    let handleInput = (event) =>{
        this.setState({
            clickCount : event.target.value
        })
    }

    let calCount = 0
    let handleButton = (i)=>{
        calCount =  this.state.clickCount * this.state.filteredData[i].cal
    }
    return (
      <>
        <div className="input">
            <input type="text" onChange={handleChange} placeholder="Search a Food Item" />
        </div>
        {this.state.filteredData.map((element , i) => (
          <div key={i}>
            <div className="box" >
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={element.img}/>
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{element.name.toUpperCase()}</strong> <br />
                      <small>{element.cal} calories</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input className="input" type="number" onChange={handleInput} />
                    </div>
                    <div className="control">
                      <button className="button is-info" onClick={handleButton(i)}>+</button>
                      <p>{this.state.clickCount}</p>
                      <p>{calCount}</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default FoodBox;
