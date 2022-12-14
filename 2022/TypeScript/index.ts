import { parseInput } from "./cli";


const main = async () => {
  const data = await parseInput(process.argv)
  console.log(data)
}
main()

