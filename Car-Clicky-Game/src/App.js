import React from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";

import images from "./image.json";
import "./App.css";

class App extends React.Component {
  
  state = {
    images,
    clickedList: [],
    topScore: 0,
    score: 0,
    message: "",
    shakeit: "false"
  };
  clickedImage = clickid => {
    const shuffledArray = this.shuffleArray(images);
    this.setState({images: shuffledArray});
    if (this.state.clickedList.includes(clickid)) {
      this.setState({ score: 0, clickedList: [], message: "You got greedy - now you have nothing", shakeit: "true"});
    }
    else {
      this.setState({
        clickedList: this.state.clickedList.concat([clickid]),
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
        <Wrapper shakeWrapper = {this.state.shakeit}>
            {this.state.images.map((logos, key) => (
              <div key={key}>
                <ImageCard
                  clickImage={this.clickedImage}
                  id={logos.id}
                  key={logos.id}
                  name={logos.name}
                  image={logos.image}
                />
                </div>
          ))}
        </Wrapper>
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

