
import { createStore } from 'redux'
import utils from 'utils'

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      utils.log(action.type, state, state + 1)
      return state + 1
    case 'DECREMENT':
      utils.log(action.type, state, state - 1)
      return state - 1
    default:
      return state
  }
}

let store = createStore(counter)

function render() {
  document.body.innerText = store.getState()
}

store.subscribe(() => {
  render()
})

document.addEventListener('click', (e) => {
  if (e.shiftKey) {
    store.dispatch({ type: 'DECREMENT' })
  } else {
    store.dispatch({ type: 'INCREMENT' })
  }
})

render()