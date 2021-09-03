# lootmetaverse-data

Fork of https://github.com/Anish-Agnihotri/dhof-loot to support cyberpunk loot metaverse.

## Distribution

- tokenIds `1` to `7778` claimable by loot holders.
- tokenIds `7778` to `8000` claimable by contract owner.
- tokenIds `8001` to `10000` claimable by user.

## Output

- `output/loot.json` contains all tokenIds and their attributes.
- `output/occurences.json` contains the number of occurences by attribute.
- `output/rare.json` contains a mapping of `lootId` to `score` (which is the sum of number of occcrences of each child attribute for a `lootId`), sorted ascending by `score`. It also includes `rarest` which is how rare the loot bags attributes are (`1` == `rarest`, `8000` == `least rare`).
- `output/images.json` contains the base64 encoded SVG of each tokenId

## Run locally

```bash
# Install dependencies
npm install

# Collect all loot
npm run collect

# Parse statistics
npm run parse

# Collect base64 encoded images
npm run images
```

## Extras

- `derivatives/andy8052-ability-score` — Ability Score NFTs

## Credits

- [@ktasbas](https://github.com/ktasbas) for adding base64 encoded SVG retrieval support
