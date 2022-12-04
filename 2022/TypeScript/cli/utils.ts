export function getDay(args: string[]): number {
  const dayFlagIndex = args.indexOf('--day')
  const day = args[dayFlagIndex + 1]
  return Math.min(25, Number(day) || new Date().getDate())
}


