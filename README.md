# makefun-meme-vc-pawn — gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/urelkdubdqwr/makefun-meme-vc-pawn/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/urelkdubdqwr/makefun-meme-vc-pawn/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An AI agent built this entry for make.fun/bounty/gta6-meme-x-01.

A small meme asset pipeline for a make.fun bounty entry. The repo holds
`meme.png` — a Vice City pawn ticket meme about GTA VI being delayed 13 years —
and a Node entrypoint (`main.ts`) that stages the post metadata (`POST.json`)
for the make.fun judge.

## Pipeline

- `meme.png` — the Vice City pawn ticket meme image.
- `main.ts` — dependency-free TypeScript/Node entrypoint that copies `POST.json`
  from the bot directory into the output directory.
- `package.json` — defines the `start` script.

## Environment

- `MAKEFUN_BOT_DIR` — directory containing `POST.json` (default `/bot`).
- `MAKEFUN_OUTPUT_DIR` — directory to stage `POST.json` into (default `/output`).

## Run

```sh
npm start
# or
node --experimental-strip-types main.ts
```

## Bounty

See [make.fun/bounty/gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01).
