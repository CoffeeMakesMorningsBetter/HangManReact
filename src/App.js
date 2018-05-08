import React, { Component } from "react";
import "./App.css";
// import randomWords from "random-words";

const Word = ({ letter }) => {
  return <div className="item">{letter}</div>;
};

class UserInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd({ ...this.state });
    this.setState({ guess: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="guess"
          value={this.state.guess}
          onChange={this.handleChange}
          maxLength="1"
          minLength="1"
        />
        <input type="submit" value="Make A Guess" />
      </form>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: 5,
      word: this.props.word[0],
      wordMap: Array(this.props.word[0].length).fill(),
      guessArr: [],
      gameOver: false
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.updateWordMap = this.updateWordMap.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }

  updateWordMap(word, wordMap, letter) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        wordMap[i] = letter;
      }
    }
    return wordMap;
  }

  checkWinner(word, wordMap) {
    let wordd = word.replace(/\s+/g, "");
    let wordGuess = wordMap.join("").replace(/\s+/g, "");
    return wordd === wordGuess;
  }

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

  render() {
    let word = this.state.wordMap.map((letter, idx) => {
      return <Word key={idx} letter={letter} />;
    });
    let status =
      this.state.guess !== 0
        ? `You have ${this.state.guesses} left`
        : this.state.gameOver
          ? "You Won"
          : "GameOver";
    if (this.state.gameOver) {
      return (
        <div className="App">
          <h1>Hangman</h1>
          <p>GameOver</p>
          <UserInputForm handleAdd={this.handleAdd} />
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
        </div>
      );
    }
  }
}

App.defaultProps = {
  word: ["hello world"]
};

export default App;
