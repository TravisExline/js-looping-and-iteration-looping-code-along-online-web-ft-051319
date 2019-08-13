// Code your solutions in this file
function writeCards(names, event) {
  let solution = []
  for ( let i = 0; i < names.length; i++ ) {
    solution.push( `Thank you, #{names[i]}, for the wonderful #{event} gift!` )
  }
  return solution
}
