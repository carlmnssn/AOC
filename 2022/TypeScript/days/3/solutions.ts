import { input } from "./input"

export function p1() {
  const games = input.split('\n')

  const scores = games.map(game => {
    const [enemy, player] = game.split(' ')
    switch (player) {
      case 'X': return enemy === 'A' ? 4 : enemy === 'B' ? 1 : 7
      case 'Y': return enemy === 'B' ? 5 : enemy === 'C' ? 2 : 8
      case 'Z': return enemy === 'C' ? 6 : enemy === 'A' ? 3 : 9
      default: return 0
    }
  })

  return scores.reduce((acc: number, curr) => curr + acc, 0).toString()

}
export function p2() {
  const games = input.split('\n')

  const scores = games.map(game => {
    const [enemy, player] = game.split(' ')
    switch (enemy) {
      case 'A': return player === 'X' ? 3 + 0 : player === 'Y' ? 1 + 3 : 2 + 6
      case 'B': return player === 'X' ? 1 + 0 : player === 'Y' ? 2 + 3 : 3 + 6
      case 'C': return player === 'X' ? 2 + 0 : player === 'Y' ? 3 + 3 : 1 + 6
      default: return 0
    }
  })

  return scores.reduce((acc: number, curr) => curr + acc, 0).toString()

}


/**
 *
 * 1
 * scores: rock (x) = 1, paper (y) = 2, scissors (z) = 3  
 * lose = 0, draw = 3, win = 6
 *
 * 2
 * 
 * player x = lose, y = draw, z = win
 * a = scissor, rock, paper
 * b = rock, paper, scissor
 * c = paper, scissor, rock
 *
 * */
