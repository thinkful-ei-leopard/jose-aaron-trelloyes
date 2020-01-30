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

  handleRandomCard = (etc) => {
    console.log('ive been added', etc)
    // const newRandomCard = () => {
    //   const id = Math.random().toString(36).substring(2, 4)
    //     + Math.random().toString(36).substring(2, 4);
    //   return {
    //     id,
    //     title: `Random Card ${id}`,
    //     content: 'lorem ipsum',
    //   }
    // }

    // this.setState({})
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
              mangos={this.handleRandomCard}
              watermelon={list.id}
            />
          ))}
        </div>
      </main>
    );
  }
}

console.log()

export default App;
