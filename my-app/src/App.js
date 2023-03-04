import './app.css';
import { Component } from 'react';
import Settings from './settings';
import Board from './board';

class App extends Component {
    constructor() {
        super();
        this.state = {
            boardSize: Math.floor(window.innerWidth * .05),
            windowWidth: window.innerWidth,
            numbers: [],
            running: false
        };
    }

    componentDidMount() {
        // Set the max size of the board as the resized window width
        window.addEventListener('resize', () => this.windowResized());
    }

    windowResized = () => {
        const WINDOW_WIDTH = window.innerWidth;
        this.setState({
            windowWidth: WINDOW_WIDTH
        });
    }

    setRunning = bool => {
        this.setState({
            running: bool
        });
        
    }

    setBoardSize = size => {
        this.setState({
            boardSize: size,
        });
    }

    setNumbers = numbers => {
        this.setState({
            numbers: numbers
        });
    }

    getNumbers = () => { 
        const NUMBERS = this.state.numbers;
        return NUMBERS
    }

    switchNumbers = (indexOne, indexTwo) => {
        // indexOne = number of indexTwo, indexTwo = number of indexOne
        let numbers = [...this.state.numbers];
        let temp = numbers[indexOne];
        let numberTwo = numbers[indexTwo];
        numbers[indexOne] = numberTwo;
        numbers[indexTwo] = temp;
        this.setNumbers(numbers);
    }

    render() {
        return (
            <>
                <Settings 
                    {...this.state} 
                    setRunning={this.setRunning}
                    setBoardSize={this.setBoardSize} 
                    switchNumbers={this.switchNumbers}
                    setNumbers={this.setNumbers}
                    getNumbers={this.getNumbers}
                />
                <Board 
                    {...this.state} 
                    setNumbers={this.setNumbers} 
                />
            </>
        );
    }
}

export default App;