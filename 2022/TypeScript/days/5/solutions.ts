import { input, example } from "./input"

export function p1() {
  const { data, operations } = input
  const dataSet = buildDataset(data)
  const operationSet = buildOperationSet(operations)

  const result = performOperations(operationSet, dataSet)

  return result.map(l => l[0]).join('')
}
export function p2() {
  const { data, operations } = input
  const dataSet = buildDataset(data)
  const operationSet = buildOperationSet(operations)

  const result = performOperations(operationSet, dataSet, true)

  return result.map(l => l[0]).join('')
}

const buildDataset = (data: string) => {
  const ind = (i: number) => i ? 1 + 4 * i : 1
  const lines = data.split('\n')
  const cleaned = lines
    .map((l) => l
      .split('')
      .filter((_c, i) => Array
        .from(new Array(lines.length))
        .map((_a, i) => ind(i))
        .includes(i))
      .join(''))
    .filter(l => l.length)
  const numCols = cleaned.at(-1)?.length
  const cols = Array.from(new Array(numCols))
    .map((_c, i) => [...cleaned].slice(0, -1).reduce((acc: string[], curr) => curr[i] !== ' ' ? [...acc, curr[i]] : acc, []))
  return cols
}

const buildOperationSet = (operations: string) => {
  const lines = operations.split('\n')
  return lines.map(l => {
    const parts = l.split(' ')
    return ({ move: Number(parts[1]), from: Number(parts[3]), to: Number(parts[5]) })
  })
}

const performOperations = (operationSet: ReturnType<typeof buildOperationSet>, dataSet: ReturnType<typeof buildDataset>, ordered?: boolean) => {
  const input = [...dataSet]
  operationSet.forEach(op => {
    if (ordered) {
      input[op.to - 1].unshift(...input[op.from - 1].splice(0, op.move) ?? '')
    } else {
      for (let i = 0; i < op.move; i++) {
        input[op.to - 1].unshift(input[op.from - 1].shift() ?? '')
      }

    }
  })
  return input.map(i => i.join('').split(''))
}
