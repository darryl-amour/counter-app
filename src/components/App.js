import React from 'react';
import Reset from './Reset.js';

class App extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleClick(action) {
        let counter = this.state.counter;
        if (action === 'minus') {
            counter -= 1;
            this.setState({...this.state,
                            counter,
                        });
        }
        if (action === 'add') {
            counter += 1;
            this.setState({...this.state,
                            counter,
                        });
        }
    }

    handleReset() {
        let counter = 0;
        this.setState({...this.state,
                        counter,
                    });
    }

    render() {
        return( 
        <div>
        <h1>Darryl's Counter App</h1>
        <div id="counter" className="counter" > 
            {this.state.counter}
        </div>
        <div>
            <button id="decrease" 
                    className="button" 
                    onClick={ () => this.handleClick("minus") } > - </button>
            <button id="increase" 
                    className="button" 
                    onClick={ () => this.handleClick("add") } > + </button>
        </div>
        <Reset handleReset={this.handleReset} />
        </div>
        );
    }
}

export default App;