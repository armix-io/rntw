import utilities from "./utilities";
import { createParser } from "./create-parser";

export const defaultParser = createParser({
  utilities,
});

export default defaultParser;

const test = (input: string) => console.log(input, defaultParser.parse(input));

test("unknown");

test("hidden");

test("w-10");

test("w-[100px]");

test("absolute");

test("relative");

test("text-unknown");

test("text-transparent");

test("text-white");

test("text-red-500");

test("text-[#fff]");

test("bg-unknown");

test("bg-transparent");

test("bg-white");

test("bg-red-500");

test("bg-[#fff]");

// console.log(defaultParser.cache);
