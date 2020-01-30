import React, { Component } from 'react';
import List from './List'
import {STORE} from './STORE'
import './App.css';

class App extends Component {
  state={
    store: STORE
  }

  handleOnDelete = (el) => {
    console.log('ive been deleted', el)
    // this.setState({
    // store: 
    // })
    const keyValue = Object.keys(this.state.store.allCards)
    const cardIndex = keyValue.indexOf(el)
    console.log(cardIndex)
    console.log(this.state.store.lists.cardIds)
    // this.setState({
    //   state: STORE.lists.splice(cardIndex, 1)
    // })
    this.setState({
      state: STORE.lists.forEach(element => element.cardIds.splice(cardIndex, 1))
    })
   
    // keyValue.splice(cardIndex, 1)
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
          {STORE.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => STORE.allCards[id])}
              bananas={this.handleOnDelete}
              // peepeepoopoo={}
            />
          ))}
        </div>
      </main>
    );
  }
}

console.log()

export default App;
