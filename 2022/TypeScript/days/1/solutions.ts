import { input } from "./input"

export function p1() {
  return sortedElfs(input)[0].toString()


}
export function p2() {
  const sorted = sortedElfs(input)

  return (sorted[0] + sorted[1] + sorted[2]).toString()
}

const sortedElfs = (input: string) => input.split('\n\n').map(elf => elf.split('\n').reduce((acc: number, curr: string) => Number(curr) + acc, 0)).sort((a, b) => b - a)

