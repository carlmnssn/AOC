import { ParseResult } from "./types"

type Day = { date: string, p1?: () => string, p2?: () => string }
function getDate(args: string[]): number {
  const dayFlagIndex = args.indexOf('--day')
  const day = args[dayFlagIndex + 1]
  return Math.min(25, Number(day) || new Date().getDate())
}

export async function getDay(args: string[]): Promise<ParseResult> {
  const date = getDate(args).toString()
  try {
    const { day } = await import(`../days/${date}`)
    return buildDay({ date, ...day })
  } catch {
    return ({ date, solution1: 'day not found', solution2: 'day not found' }
    )
  }
}
const buildDay = ({ date, p1, p2 }: Day) => {
  return { date, solution1: p1?.() ?? 'day not done', solution2: p2?.() ?? 'day not done' }
}
