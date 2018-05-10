import React, { Component } from "react";
import HangMan2 from "./HangMan2";
import Word from "./Word";
import ResetButton from "./ResetButton";
import UserInputForm from "./UserInputForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: 7,
      word: this.props.word[0],
      wordMap: Array(this.props.word[0].length).fill(),
      guessArr: [],
      gameOver: false
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
      if (newState.guesses - 1 === 0) {
        newState.gameOver = true;
        return this.setState(newState);
      }
      return this.setState(newState);
    }
  }

  // How Can I clean this up
  resetGame() {
    let resetState = { ...this.state };
    resetState.guesses = 7;
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
      this.state.gameOver === false && this.state.guesses - 1 !== 0
        ? `You have ${this.state.guesses - 1}`
        : this.state.gameOver && this.state.guesses - 1 > 0
          ? `Congrats You Won`
          : "Game Over";
    // Is this proper place to keep track of gameStatus
    if (this.state.gameOver) {
      return (
        <div className="App">
          <h1>Hangman</h1>
          <p>{status}</p>
          <ResetButton reset={this.resetGame.bind(this)} />
          <div className="words">{word}</div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>Hangman</h1>
          <p>{status}</p>
          <UserInputForm handleAdd={this.handleAdd} />
          <div className="words">{word}</div>
          <HangMan2 guesses={this.state.guesses} />
        </div>
      );
    }
  }
}

App.defaultProps = {
  word: ["hello world"]
};

export default App;
