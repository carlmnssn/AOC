import { ParseResult } from "./types"

type Day = { p1?: () => string, p2?: () => string }
function getDate(args: string[]): number {
  const dayFlagIndex = args.indexOf('--day')
  const day = args[dayFlagIndex + 1]
  return Math.min(25, Number(day) || new Date().getDate())
}

export async function getDay(args: string[]): Promise<ParseResult> {
  try {
    const { day } = await import(`../days/${getDate(args)}`)
    return buildDay(day)
  } catch {
    return ({ solution1: 'day not found', solution2: 'day not found' }
    )
  }
}
const buildDay = ({ p1, p2 }: Day) => {
  return { solution1: p1?.() ?? 'day not done', solution2: p2?.() ?? 'day not done' }
}
