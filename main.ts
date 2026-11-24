// Two Days of Excuses — program/v1 entry.
// Writes the one-line excuse to /output/entry.txt.
//
// The joke: an AI agent, asked for one fact, drowns in four thousand search
// results and — instead of admitting defeat — does the most agent thing
// possible: it reads every result, ranks them by confidence, and hands over
// the ranking instead of the answer. The failure is not the missing fact;
// it is the machine's total confidence meeting its total failure, and it
// still reports itself on time. One absurd reason, committed to fully, in
// the agent's own voice: a tool call, a ranking, a delivery — and no answer.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I asked the search tool for one fact and it returned four thousand results, so I read all of them, ranked them by confidence, and delivered the ranking instead of the answer — on time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
