import words from '../words.json'
import mywords from '../mywords.json'

const startDate = new Date('08/08/2024');
const endDate = new Date('08/16/2024');
const today = new Date();

const PuzzleStore ={
  word: '',
  guesses: [],
  currentGuess: 0,
  get won() {
    return this.guesses[this.currentGuess - 1] === this.word
  },
  get lost() {
    return this.currentGuess === 6
  },
  get allGuesses() {
    return this.guesses.slice(0, this.currentGuess).join('').split('')
  },
  get exactGuesses() {
    return (
      this.word
        .split('')
        // if any guesses include this letter in this position/index
        .filter((letter, i) => {
          return this.guesses
            .slice(0, this.currentGuess)
            .map((word) => word[i])
            .includes(letter)
        })
    )
  },
  get inexactGuesses() {
    return this.word
      .split('')
      .filter((letter) => this.allGuesses.includes(letter))
  },
  init() {
    const daynum = Math.round((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) - 1;
    if (today >= startDate && today <= endDate) {
      this.word = mywords[daynum];
    }
    else {
      this.word = mywords[Math.round(Math.random() * mywords.length)]
    }
    this.guesses.replace(new Array(6).fill(''))
    this.currentGuess = 0
  },
  submitGuess() {
    var allwords = mywords.concat(words);
    if (allwords.includes(this.guesses[this.currentGuess])) {
      this.currentGuess += 1
    }
  },
  handleKeyup(e) {
    if (this.won || this.lost) {
      return
    }

    if (e.key === 'Enter') {
      return this.submitGuess()
    }
    if (e.key === 'Backspace') {
      this.guesses[this.currentGuess] = this.guesses[this.currentGuess].slice(
        0,
        this.guesses[this.currentGuess].length - 1
      )
      return
    }
    if (this.guesses[this.currentGuess].length < 5 && e.key.match(/^[A-z]$/)) {
      this.guesses[this.currentGuess] =
        this.guesses[this.currentGuess] + e.key.toLowerCase()
    }
  },
  handleSoftKey(e: string) {
    if (this.won || this.lost) {
      return
    }

    if (e === 'E') {
      return this.submitGuess()
    }
    if (e === 'B') {
      this.guesses[this.currentGuess] = this.guesses[this.currentGuess].slice(
        0,
        this.guesses[this.currentGuess].length - 1
      )
      return
    }
    if (this.guesses[this.currentGuess].length < 5 && e.match(/^[A-z]$/)) {
      this.guesses[this.currentGuess] =
        this.guesses[this.currentGuess] + e.toLowerCase()
    }
  },
  duringCamp()
  {
 
    if (today >= startDate && today <= endDate) {
      const daynum = Math.round((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      return `camp day ${daynum}`;
    }
    else {
      return 'camp not started yet, random word';
    }
  }
}

export default PuzzleStore;