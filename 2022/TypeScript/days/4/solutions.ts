import { input, example } from "./input"

export function p1() {
  const d = input.split('\n').map(inp => {
    const g = inp.split(/[-,]/)
    const s1 = Number(g[0])
    const e1 = Number(g[1])
    const s2 = Number(g[2])
    const e2 = Number(g[3])
    return (s1 <= s2 && e1 >= e2) || (s2 <= s1 && e2 >= e1)
  }).filter(p => p)
  return d.length.toString()
}
export function p2() {
  const d = input.split('\n').map(inp => {
    const g = inp.split(/[-,]/)
    const s1 = Number(g[0])
    const e1 = Number(g[1])
    const s2 = Number(g[2])
    const e2 = Number(g[3])
    return (s1 <= s2 && e1 >= s2) || (s2 <= s1 && e2 >= s1)
  })
    .filter(p => p)
  return d.length.toString()
}

