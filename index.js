// Imports
const fs = require("fs");
const ethers = require("ethers");
const { abi } = require("./abi");

// Setup contract
const lootAddress = "0x13a48f723f4AD29b6da6e7215Fe53172C027d98f";
const rpc = new ethers.providers.JsonRpcProvider("");
const loot = new ethers.Contract(lootAddress, abi, rpc);

(async () => {
  // In-mem retrieval
  let retrievedLoot = [];

  // Collect 1...8000 ids
  for (let i = 1; i <= 10000; i++) {
    // Collect parts
    console.log("collect", i);
    const [chest, foot, hand, head, neck, ring, waist, weapon] =
      await Promise.all([
        loot.getChest(i),
        loot.getFoot(i),
        loot.getHand(i),
        loot.getHead(i),
        loot.getNeck(i),
        loot.getRing(i),
        loot.getWaist(i),
        loot.getWeapon(i),
      ]);

    // Push parts to array
    retrievedLoot.push({
      [i]: {
        chest,
        foot,
        hand,
        head,
        neck,
        ring,
        waist,
        weapon,
      },
    });
  }

  // Write output
  fs.writeFileSync("./output/loot.json", JSON.stringify(retrievedLoot));
})();
