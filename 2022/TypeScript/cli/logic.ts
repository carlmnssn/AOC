import { ParseResult } from "./types";
import { getDay } from "./utils";

export function parseInput(args: string[]): Promise<ParseResult> {
  return getDay(args)

}

