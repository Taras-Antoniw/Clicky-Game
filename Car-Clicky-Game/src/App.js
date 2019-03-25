import React from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";

import images from "./image.json";
import "./App.css";

class App extends React.Component {
  
  state = {
    images,
    clickedArray: [],
    topScore: 0,
    score: 0,
    message: "",
    shakeit: "false"
  };
  clickImage = id => {
    const shuffledArray = this.shuffleArray(images);
    this.setState({images: shuffledArray});
    if (this.state.clickedArray.includes(id)) {
      this.setState({ score: 0, clickedArray: [], message: "You got greedy - now you have nothing", shakeit: "true"});
    }
    else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        score: this.state.score + 1,
        message: "Nice choice",
        shakeit: "false"
      });
    }
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
  }
  shuffleArray = (imageArray) => {
    for (let i = imageArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imageArray[i], imageArray[j]] = [imageArray[j], imageArray[i]];
    }
    return imageArray;
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to the Car Clicky Game!!</h1>
        </header>
        <h3 className="App-intro">
          <strong>Pick any car that you like - but you can only have one of each type</strong> 
          <p className = "score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p>
          <p className="message"><strong>{this.state.message}</strong></p>
        </h3>
        <Wrapper
        shakeWrapper = {this.state.shakeit}
        logo=
          {this.state.images.map(logos => (
            <ImageCard
              clickImage={this.clickImage}
              id={logos.id}
              key={logos.id}
              name={logos.name}
              image={logos.image}
            />
          ))}
        />
        <footer className="footer">
      <div className="container">
        <span className="text-muted">Car Clicky Game</span>
      </div>
    </footer> 
      </div>
    );
  }

}

export default App;

