import React, { Component } from 'react';
import List from './List'
import {STORE} from './STORE'
import './App.css';

class App extends Component {
  state={
    ...STORE
  }

  handleOnDelete = (el) => {
    console.log('ive been deleted', el) 
    const items = this.state.lists.map(list => ({...list, cardIds: list.cardIds.filter(e => e !== el)}))
    console.log(items)
    this.setState({
      lists: items
    })
  }

  handleRandomCard = () => {
    console.log('ive been added')
  }

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              bananas={this.handleOnDelete}
            />
          ))}
        </div>
      </main>
    );
  }
}

console.log()

export default App;
