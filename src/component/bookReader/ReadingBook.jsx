import { Component } from "react";

const defaultData = {
  name: "Dummy",
  prize: "0",
  about: ["This is a dummy book", "No details available"],
};
class ReadingBook extends Component {
  constructor(props) {
    super(props);
    const data = props.BookData || defaultData;
    this.state = {
      data: data,
      dynamicPrice: Number(data.prize),
    };
  }
  handleAddMore = () => {
    console.log("Before:", this.state.dynamicPrice);
  this.setState((prevState)=> ({
     dynamicPrice :  prevState.dynamicPrice + 50 
  }))
    console.log("After:", this.state.dynamicPrice);
  }
  render() {
    const { data, dynamicPrice } = this.state;
    return (
      <div className="book">
        <h1>{data.name} book</h1>
        {data.name === "Maths" ? (
          <p>This is a Dummy Book</p>
        ) : (
          <p>This is a real Book</p>
        )}
        {data.about.map((abc, index) => (
          <li key={index} style={{ color: "blue" }}>
            {abc}
          </li>
        ))}
        <button onClick={this.handleAddMore}>Add More</button>
        <p style={{color:'red'}}>Price ₹ {dynamicPrice}</p>
      </div>
    );
  }
}

export default ReadingBook;
