// Imports
const fs = require("fs");

(async () => {
  const data = await fs.readFileSync("./output/loot.json");
  const loot = JSON.parse(data);

  // Calculate attribute rarities
  let rarityIndex = {};
  for (let i = 0; i < loot.length; i++) {
    console.log(i);
    const attributes = loot[i][(i + 1).toString()];

    // Add up number of occurences of attributes
    for (const attribute of Object.values(attributes)) {
      rarityIndex[attribute] = rarityIndex[attribute]
        ? rarityIndex[attribute] + 1
        : 1;
    }
  }

  // Output occurences
  await fs.writeFileSync(
    "./output/occurences.json",
    JSON.stringify(rarityIndex)
  );

  // Calculate occurence scores
  let scores = [];
  for (let i = 0; i < loot.length; i++) {
    let score = 0;
    const attributes = loot[i][(i + 1).toString()];

    for (const attribute of Object.values(attributes)) {
      score += rarityIndex[attribute];
    }
    scores.push({ lootId: i + 1, score });
  }

  // Sort by score
  scores = scores.sort((a, b) => a.score - b.score);
  // Sort by index of score
  scores = scores.map((loot, i) => ({
    ...loot,
    rarest: i + 1,
  }));

  // Print loot rarity
  await fs.writeFileSync("./output/rare.json", JSON.stringify(scores));

  const weapons = [
    "Dagg̸͔͛e̴r",
    "Shu̶rike̴n",
    "B̷͓͛last̷er",
    "Rif̴le",
    "Gre̵n̵ad̷e",
    "Gau̴ntl̵̚et̵",
  ];

  const chestArmor = ["H̵̒az̷̧͐m̵at Ś̷̠uit", "Bra̷", "Wo̴u̶nd̴", "Ŕ̷̰ippe̷͘d T-̷S̵̛ͅhi̴r̷t̴"];

  const headArmor = [
    "G̵la̴s̵s̵ Eý̷e",
    "V̵i̵s̷or ̴",
    "Sc̵ar̷̝̽",
    "M̵oha̶w̴k",
    "Pi̴erc̵i̴ng",
    "He̴lm̷et̷̡́",
  ];

  const waistArmor = [
    "P̴͠ants",
    "B̷ri̵ef̴s",
    "F̷̐anny-Pack",
    "H̴͂ula-Hoop",
    "Ouro̴boroś̶",
    "S̷h̴eath",
    "Sk̶irt",
  ];

  const footArmor = ["B̴o̵o̴ts", "Ẃ̶͝arts", "Tan̵͝k̷͘ T̴r̷eads", "Á̴nkle̴t"];

  const handArmor = [
    "B̵̓lõ̵od̵y S̵t̸ump",
    "T̴͌it̵a̵nḯ̵um̵ ̶Fĭ̴ng̴e̶rs",
    "Ni̴nte̴nd̶̽o̵ Põ̷w̵̐e̷rglove",
    "Un̵i̶vë̵́rs̷al Do̷ng̴̚le",
    "P̴͓̽l̶as̵t̶i̴c C̴law̶s",
    "Bl̵ades̵̚",
  ];

  const necklaces = [
    "Koi̵ Tatt̴̽o̷o",
    "Breat̴̝̽hing Ho̵̅le",
    "C̵͗hŏ̴ker",
    "Ca̸̅rbon St̴̯͠eel C̵͗hŏ̴ker",
    "S̸̿pĩ̴dersilk Scar̴̂f",
    "Babb̴̓le̶̊ F̵ish Imp̵lant",
  ];

  const rings = [
    "We̵d̵̏di̵n̴g Ban̶d",
    "Wo̶͝od̵e̶n̶ ̶Ring̵̚",
    "Chr̴̃om̵e Ring",
    "M̴eta̷l̴ Ri̶ng̴",
    "W̷ire ̶Ring",
  ];

  const suffixes = [
    "of N̴̐ightc̶i̷̓ty",
    "of̴̎ Redē̴mptio̴͘n",
    "o̶f Dem̶is̷e",
    "of̴ S̵had̶̑ows̵",
    "of L̶̟̽igh̴t",
    "o̵͝f ̵Deligh̵t",
    "of ̴Neo-Tokyo",
    "of Fo̴rt̴u̵̻̽ne",
    "of D̶o̷o̵͠m",
    "o̵f Punish̴̒m̵e̷n̵t",
    "o̵f ̴Cl̵ari̴ty",
    "o̴f Ch̴ao̵s̶",
    "o̴f Ra̶̻͛ge",
    "of̵ Des̵͒i̶r̵e",
    "of ̷De̴spair",
    "of Insan̴ĭ̶̧t̶y",
    "of O̵̼͛pportu̴n̸̼̿ity",
    "of Ma̶lice̷",
    "o̴f Họ̵͠pe",
    "of Generosi̵͇̊ty",
    "o̶̙̍f the Co̵sm̴os",
    "of Te̷rror",
    "of Enli̶gh̷̎tenmen̵t̴",
    "of ̵̓the Si̴th l̶o̴rd̵",
    "o̶͝f Fl̵ȧ̵mes",
    "of̷́ I̵ce",
    "of Mi̴s̴er̶y",
    "of Frien̵d̵s̵͓̽h̵i̷p̵",
    "of Rè̴ͅmorse",
  ];

  const namePrefixes = [
    "Soil̵e̴d",
    "Stolen̴̎",
    "In̵finit̸̊e",
    "Exo̵̰̎tic",
    "Fr̵oz̴e̴n̷͘",
    "To̴͈͛rn",
    "Stolen̷͚̕",
    "Du̴l̵l",
    "Ho̵l̶͌y",
    "Wa̵r̴ped̶̆",
    "Mo̴l̴ten̶",
    "Deca̴y̷͛ed",
    "Ant̴ique",
    "V̵anis̷hi̵ng",
    "S̴͎̽hattere̷d",
    "Fragm̸ente̶͎͛d",
    "C̴rooke̴d",
    "̴̑Ada̵m̶̾an̵t̵i̶ne",
    "Sili̷cone",
    "C̷arb̴id̸̽e",
    "̷̗͌D̶i̶am̶ond",
    "Lase̶̪̽r",
    "K̴a̴̦̽leid̴oscopi̵̙̽c",
    "Arti̵fi̸̍cial",
    "Hid̴d̸̈en̵",
    "P̴olym̷er̵̔",
    "P̴̃lasti̵c",
    "Au̶t̵h̵̿entic",
    "F̷o̴rbi̵dd̵en̴",
    "Tat̶t̷oo̵̾ed",
    "Swar̴m̴͊ing",
    "Tot̵alled̵",
    "Crum̴͍̚b̴liǹ̶g",
    "Ć̷̣rac̴͌ke̵d̵",
    "Tu̶̔rpid",
    "Disemb̷̮͊o̴͒die̵d̴̍",
    "Jà̶cked",
    "C̵o̶͌nc̵re̵te",
    "W̴ooden",
    "St̶͝eel̴",
    "Pa̵̰̚le",
    "Mirr̴o̴̊red",
    "Le̶athe̵r",
    "Webb̴ed",
    "Ný̴lon̴",
    "N̷͂eon",
    "Br̷oken̴",
    "Unbrea̷̽kable",
    "Cheap̵̗͆",
    "A̵lumi̴͝n̵u̷m",
    "Tran̴s̷p̵a̵re̶n̷t",
  ];

  const nameSuffixes = [
    "Pi̶nk",
    "Si̴lv̵e̵r",
    "G̴̀oĺ̵d̵",
    "Vio̴l̶͉̚et",
    "Cy̵an̶",
    "Red̶͇̀",
    "Y̴el̴low",
    "W̶̮͌hite̵",
    "Rainbö̵́w",
    "Bla̵c̴͆k",
    "Gr̵e̴̊y",
    "Ac̴̓i̵͝d Gr̴̊een",
    "Am̵̓b̵e̷r",
    "Aq̵ua",
    "Azu̶re̵",
    "Da̷r̴k ̵̠͝G̷̕rey",
    "B̷̽lu̶e Sap̶p̵h̴i̶re",
    "Bu̶rg̴͂undy",
    "Ca̷d̵͌et Gr̸ey",
    "C̷͂eles̴t̷e",
    "Chå̴rc̷o̴al",
    "Cop̷pe̷̊r",
    "C̶otto̶n C̶and̵y",
    "C̷̏ryst̴al̴",
    "C̷rims̴͐on̴",
    "Opal̶͝",
    "F̷l̸͉͛orescent",
    "G̴las̵̯̊s̷",
    "Sl̷a̴t̷e̴",
  ];

  // list of all item occurences and the number of items they appear
  const occurences = rarityIndex;

  const allItems = [
    ...weapons,
    ...chestArmor,
    ...headArmor,
    ...waistArmor,
    ...footArmor,
    ...handArmor,
    ...necklaces,
    ...rings,
  ];
  const baseItems = {};
  for (const key of Object.keys(occurences)) {
    // go through occurences and sum up occurences of weapons, chest, head, waist, foot, hand, necklace, ring.
    const value = occurences[key];
    console.log(`key: ${key} value: ${value}`);
    for (const item of allItems) {
      if (key.includes(item)) {
        baseItems[item] = baseItems[item] ? baseItems[item] + value : value;
      }
    }
  }
  await fs.writeFileSync("./output/commons.json", JSON.stringify(baseItems));
})();
