import { day1 } from "../days/1"
import { day2 } from "../days/2"
import { day3 } from "../days/3"
import { ParseResult } from "./types"

function getDate(args: string[]): number {
  const dayFlagIndex = args.indexOf('--day')
  const day = args[dayFlagIndex + 1]
  return Math.min(25, Number(day) || new Date().getDate())
}

export function getDay(args: string[]): ParseResult {
  switch (getDate(args)) {
    case 1: return buildDay(day1)
    case 2: return buildDay(day2)
    case 3: return buildDay(day3)
    default:
      return { solution1: 'day not found', solution2: 'day not found' }
  }
}

const buildDay = ({ p1, p2 }: { p1?: () => string, p2?: () => string }) => {
  return { solution1: p1?.() ?? 'day not done', solution2: p2?.() ?? 'day not done' }
}
