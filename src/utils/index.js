
function log(action, state, newState) {
  console.group(action.toUpperCase())
  console.log('previous state:', state)
  console.log('new state:', newState)
  console.groupEnd()
}

export default {
  log
}