import React, { Component } from "react";
import HangMan from "./HangMan";
import Word from "./Word";
import ResetButton from "./ResetButton";
import UserInputForm from "./UserInputForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: 5,
      word: this.props.word[0],
      wordMap: Array(this.props.word[0].length).fill(),
      guessArr: [],
      gameOver: false,
      images: [
        "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350",
        "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
        "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg",
        "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
        "http://www.bajiroo.com/wp-content/uploads/2015/08/amazing-wonderful-macro-photography-of-nature-pics-pictures-images-photos-13.jpg"
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.updateWordMap = this.updateWordMap.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }

  // Not Very Functional how can I imporve this?
  updateWordMap(word, wordMap, letter) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        wordMap[i] = letter;
      }
    }
    return wordMap;
  }

  //
  checkWinner(word, wordMap) {
    let wordd = word.replace(/\s+/g, "");
    let wordGuess = wordMap.join("").replace(/\s+/g, "");
    return wordd === wordGuess;
  }

  // Is this to much logic for handling add?
  // should I break this out
  handleAdd(letter) {
    let newState = { ...this.state };
    if (newState.guessArr.indexOf(letter.guess.toLowerCase()) >= 0) {
      return this.setState(newState);
    }
    if (newState.word.indexOf(letter.guess.toLowerCase()) >= 0) {
      this.updateWordMap(
        newState.word,
        newState.wordMap,
        letter.guess.toLowerCase()
      );
      if (this.checkWinner(newState.word, newState.wordMap)) {
        newState.gameOver = true;
        return this.setState(newState);
      } else {
        newState.guessArr.push(letter.guess);
        return this.setState(newState);
      }
    } else {
      newState.guessArr.push(letter.guess);
      newState.guesses -= 1;
      if (newState.guesses === 0) {
        newState.gameOver = true;
        return this.setState(newState);
      }
      return this.setState(newState);
    }
  }

  // How Can I clean this up
  resetGame() {
    let resetState = { ...this.state };
    resetState.guesses = 5;
    resetState.word = this.props.word[0];
    resetState.wordMap = Array(this.props.word[0].length).fill();
    resetState.guessArr = [];
    resetState.gameOver = false;
    return this.setState(resetState);
  }

  render() {
    let word = this.state.wordMap.map((letter, idx) => {
      return <Word key={idx} letter={letter} />;
    });
    let status =
      this.state.gameOver === false && this.state.guesses !== 0
        ? `You have ${this.state.guesses}`
        : this.state.gameOver && this.state.guesses > 0
          ? `Congrats You Won`
          : "Game Over";
    // Is this proper place to keep track of gameStatus
    if (this.state.gameOver) {
      return (
        <div className="App">
          <h1>Hangman</h1>
          <p>{status}</p>
          <ResetButton reset={this.resetGame.bind(this)} />
          <div className="container">{word}</div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>Hangman</h1>
          <p>{status}</p>
          <UserInputForm handleAdd={this.handleAdd} />
          <div className="container">{word}</div>
          {/* NOT SURE IF THIS IS  CORRECT WAY TO IMPLEMENT*/}
          <HangMan
            image={this.state.images.slice(
              0,
              this.state.images.length - this.state.guesses
            )}
          />
        </div>
      );
    }
  }
}

App.defaultProps = {
  word: ["hello world"]
};

export default App;
