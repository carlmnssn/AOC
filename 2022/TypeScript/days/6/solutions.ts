import { input, example } from "./input"

export function p1() {
  return unique(input, 4)
}
export function p2() {
  return unique(input, 14)
}

const unique = (inp: string, len: number) => {
  const data = inp
  for (let i = 0; i < data.length; i++) {
    const pattern = data.substring(i, i + len)
    if (new Set(pattern).size == pattern.length) return (i + len).toString()
  }
  return ''

}

