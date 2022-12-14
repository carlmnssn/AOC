import { input, example } from "./input"

export function p1() {
  const rucksacks = input.split('\n').map((r => {
    const a = r.substring(0, r.length / 2)
    const b = r.substring(a.length, r.length)
    const existsInBoth = a.split('').filter(l => b.includes(l))
    const unique = getUnique(existsInBoth)
    const vals = unique.map(getVal)
    return vals.reduce((a, c) => a + c, 0)
  }))

  return rucksacks.reduce((a, c) => a + c, 0).toString()
}
export function p2() {
  const groups = input.split('\n').reduce((acc: string[][], curr) => {
    const currentGroup = acc[acc.length - 1]
    return currentGroup?.length < 3 ? [...acc.filter(g => g.toString() !== currentGroup.toString()), [...currentGroup, curr]] : [...acc, [curr]]
  }, [])

  return groups.map(g => {
    const [a, b, c] = g
    const badges = a.split('').filter(l => b.includes(l) && c.includes(l))
    const vals = getUnique(badges).map(getVal)
    return vals.reduce((a, c) => a + c, 0)
  }).reduce((a, c) => a + c, 0).toString()
}


function getVal(l: string) {
  return l.toUpperCase() === l ? l.charCodeAt(0) - 65 + 27 : l.charCodeAt(0) - 96
}

function getUnique(inp: string[]) {
  return inp.reduce((acc: string[], curr) => acc.includes(curr) ? acc : [...acc, curr], [])
}
