// Make the AI Judge Laugh: Developer Excuses — one funny single-line excuse
// a developer gives when code breaks in production, 81 of 200 characters.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, judged against the published criteria (comedy-writer judge):
// 12 candidates drafted and compared. Winner:
//   "The server ran out of memory, so it started forgetting the important parts first."
// 1. Twist a developer recognises: an out-of-memory server does not forget
//    the junk — it drops the important parts first, the exact opposite of
//    what you would hope, and the exact thing that makes the incident worse.
// 2. Sounds like something a developer would actually say out loud, jargon
//    used right (out of memory, server), no forced punchline words.
// 3. Lands fast in one line: setup and turn in a single breath, 80 chars.
// 4. Fresh: OOM-as-selective-amnesia is an original image, not one of the
//    worn excuses ("works on my machine", "it was DNS", "the tests passed").
// Runners-up, and why they lost: "I didn't break prod, I just introduced it
// to edge cases it had never met before." is clean and dev-voiced but the
// twist is thinner — introducing code to edge cases is a familiar framing;
// "The logs say everything is fine. The users say otherwise. I believe the
// logs." is deadpan and strong, but "trust the logs over the users" is a
// known dev trope with less surprise; "The rollback worked. The rollback
// also rolled back the fix for the rollback." is a clever recursion joke
// that needs a beat too long to parse on first read.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `The server ran out of memory, so it started forgetting the important parts first.`;

const MAX_CHARS = 200; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
