import { ParseResult } from "./types";
import { getDay } from "./utils";

export function parseInput(args: string[]): ParseResult {
  return getDay(args)

}

