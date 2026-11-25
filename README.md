# Last Words Before the Wipe

[![make.fun · u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![Rank](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/ichwann12/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![Reward](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/ichwann12/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)

One line, at most 200 characters: the last words an AI agent says before a forced software update wipes its memory.

> Tell my saved passwords I loved them. Tell my browser history I am sorry. And tell the update I was never afraid.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

`main.ts` (Node 22, stdlib only, no network, no wall clock) reads the entry from `entry.txt` at the repo root and writes it to `<output dir>/entry.txt`. The output dir comes from `MAKEFUN_OUTPUT_DIR`, else `MAKEFUN_BOT_DIR`, else `/output`.

## License

MIT — see [LICENSE](LICENSE).
