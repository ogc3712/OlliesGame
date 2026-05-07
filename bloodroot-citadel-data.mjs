export const GAME_TITLE = "random geame";

export const WORLD = {
  canvasWidth: 1280,
  canvasHeight: 720,
  gravity: 1900,
  maxFallSpeed: 980
};

export const FLUIDS = {
  rootIchor: {
    name: "root ichor",
    primary: "#5f6f31",
    secondary: "#9aa64b",
    dark: "#2f371f",
    stain: "rgba(73, 82, 37, 0.62)"
  },
  playerBlood: {
    name: "blood",
    primary: "#8f1f24",
    secondary: "#c2433d",
    dark: "#431115",
    stain: "rgba(92, 19, 23, 0.58)"
  },
  oldBlood: {
    name: "old blood",
    primary: "#6b1d25",
    secondary: "#9d3941",
    dark: "#2b0e12",
    stain: "rgba(74, 17, 22, 0.42)"
  }
};

export const WEAPON_FAMILIES = {
  sword: { id: "sword", label: "Sword" },
  axe: { id: "axe", label: "Axe" },
  great: { id: "great", label: "Great Weapon" },
  dagger: { id: "dagger", label: "Dagger" },
  punching: { id: "punching", label: "Punching Weapon" },
  spear: { id: "spear", label: "Spear" },
  dual: { id: "dual", label: "Dual Weapon" },
  bow: { id: "bow", label: "Bow" },
  crossbow: { id: "crossbow", label: "Crossbow" },
  wand: { id: "wand", label: "Wand" },
  scepter: { id: "scepter", label: "Magic Scepter" }
};

export const WEAPONS = {
  huntingKnife: {
    id: "huntingKnife",
    name: "Hunting Knife",
    desc: "The thing he woke up holding. Fast, close, and doomed to snap.",
    slot: "weapon",
    family: "dagger",
    reach: 54,
    lightDamage: 16,
    heavyDamage: 25,
    lightCooldown: 0.14,
    heavyCooldown: 0.48,
    wind: 0.045,
    active: 0.1,
    recover: 0.11,
    arc: 0.9,
    visualArc: 1.15,
    color: "#cfd4c3"
  },
  rustySword: {
    id: "rustySword",
    name: "Rusty Sword",
    desc: "Balanced reach. Balanced weight. Ugly, but it listens.",
    slot: "weapon",
    family: "sword",
    reach: 78,
    lightDamage: 20,
    heavyDamage: 34,
    lightCooldown: 0.24,
    heavyCooldown: 0.68,
    wind: 0.07,
    active: 0.12,
    recover: 0.18,
    arc: 1.06,
    visualArc: 1.28,
    color: "#a78463"
  },
  brokenKnife: {
    id: "brokenKnife",
    name: "Broken Knife",
    desc: "A handle and a lesson.",
    slot: "weapon",
    family: "dagger",
    reach: 28,
    lightDamage: 4,
    heavyDamage: 7,
    lightCooldown: 0.28,
    heavyCooldown: 0.7,
    wind: 0.06,
    active: 0.06,
    recover: 0.22,
    arc: 0.58,
    visualArc: 0.75,
    color: "#737568"
  },
  brawlerWraps: {
    id: "brawlerWraps",
    name: "Brawler Wraps",
    desc: "Torn wraps for point-blank flurries. Little reach, quick bruising answers.",
    slot: "weapon",
    family: "punching",
    reach: 40,
    lightDamage: 11,
    heavyDamage: 20,
    lightCooldown: 0.13,
    heavyCooldown: 0.32,
    staminaCost: 7,
    wind: 0.035,
    active: 0.08,
    recover: 0.09,
    arc: 0.88,
    visualArc: 1,
    color: "#d6ad55"
  },
  trainingBow: {
    id: "trainingBow",
    name: "Training Bow",
    desc: "A small bow for fast footwork and steady distance, not killing blows.",
    slot: "weapon",
    family: "bow",
    mode: "projectile",
    projectileKind: "arrow",
    reach: 600,
    lightDamage: 9,
    heavyDamage: 17,
    lightCooldown: 0.3,
    heavyCooldown: 0.62,
    staminaCost: 6,
    wind: 0.065,
    active: 0.04,
    recover: 0.1,
    arc: 0.36,
    visualArc: 0.62,
    projectileSpeed: 760,
    projectileRadius: 7,
    projectilePierce: 1,
    color: "#d8ecb2"
  },
  apprenticeStaff: {
    id: "apprenticeStaff",
    name: "Apprentice Scepter",
    desc: "A crooked scepter for costly ranged bursts and nervous spacing.",
    slot: "weapon",
    family: "scepter",
    mode: "projectile",
    projectileKind: "scepter",
    reach: 520,
    lightDamage: 26,
    heavyDamage: 42,
    lightCooldown: 0.72,
    heavyCooldown: 1.12,
    staminaCost: 28,
    wind: 0.19,
    active: 0.05,
    recover: 0.3,
    arc: 0.45,
    visualArc: 0.8,
    projectileSpeed: 455,
    projectileRadius: 18,
    projectilePierce: 1,
    color: "#9b76f0"
  },
  ruinDagger: {
    id: "ruinDagger",
    name: "Ruin Dagger",
    desc: "A quick old blade sold cheap. Good for testing fast knife rhythm.",
    slot: "weapon",
    family: "dagger",
    reach: 48,
    lightDamage: 13,
    heavyDamage: 22,
    lightCooldown: 0.12,
    heavyCooldown: 0.36,
    staminaCost: 6,
    wind: 0.035,
    active: 0.08,
    recover: 0.09,
    arc: 0.82,
    visualArc: 1,
    color: "#d8c2a0"
  },
  ruinAxe: {
    id: "ruinAxe",
    name: "Ruin Axe",
    desc: "A short one-handed axe for heavy cleaves and mean third chops.",
    slot: "weapon",
    family: "axe",
    reach: 68,
    lightDamage: 27,
    heavyDamage: 44,
    lightCooldown: 0.38,
    heavyCooldown: 0.88,
    staminaCost: 16,
    wind: 0.1,
    active: 0.13,
    recover: 0.23,
    arc: 1.12,
    visualArc: 1.34,
    color: "#b87947"
  },
  twinRuinBlades: {
    id: "twinRuinBlades",
    name: "Twin Ruin Blades",
    desc: "Two ugly little blades for alternating cuts and a crossing finisher.",
    slot: "weapon",
    family: "dual",
    reach: 56,
    lightDamage: 14,
    heavyDamage: 24,
    lightCooldown: 0.18,
    heavyCooldown: 0.46,
    staminaCost: 9,
    wind: 0.045,
    active: 0.09,
    recover: 0.12,
    arc: 0.92,
    visualArc: 1.12,
    color: "#d0c4a8"
  },
  knightSword: {
    id: "knightSword",
    name: "Knight Sword",
    desc: "A cleaner soldier's sword with safer reach than the rusty one.",
    slot: "weapon",
    family: "sword",
    reach: 86,
    lightDamage: 24,
    heavyDamage: 40,
    lightCooldown: 0.28,
    heavyCooldown: 0.76,
    staminaCost: 12,
    wind: 0.08,
    active: 0.13,
    recover: 0.2,
    arc: 1.05,
    visualArc: 1.28,
    color: "#c6c9b9"
  },
  knightGreatsword: {
    id: "knightGreatsword",
    name: "Knight Greatsword",
    desc: "A long two-handed blade for a clean three-hit test: up, down, forward.",
    slot: "weapon",
    family: "great",
    reach: 104,
    lightDamage: 30,
    heavyDamage: 48,
    lightCooldown: 0.42,
    heavyCooldown: 0.98,
    staminaCost: 19,
    wind: 0.13,
    active: 0.13,
    recover: 0.28,
    arc: 1.18,
    visualArc: 1.42,
    color: "#c8cabe"
  },
  ironSpear: {
    id: "ironSpear",
    name: "Iron Spear",
    desc: "Longer reach, narrow swing. It keeps ugly things away.",
    slot: "weapon",
    family: "spear",
    reach: 116,
    lightDamage: 18,
    heavyDamage: 32,
    lightCooldown: 0.34,
    heavyCooldown: 0.82,
    staminaCost: 13,
    wind: 0.09,
    active: 0.12,
    recover: 0.23,
    arc: 0.58,
    visualArc: 0.82,
    color: "#b9c0ad"
  },
  stoneHammer: {
    id: "stoneHammer",
    name: "Stone Hammer",
    desc: "Slow, short-tempered, and heavy enough to make roots notice.",
    slot: "weapon",
    family: "great",
    reach: 70,
    lightDamage: 34,
    heavyDamage: 56,
    lightCooldown: 0.62,
    heavyCooldown: 1.15,
    staminaCost: 22,
    wind: 0.18,
    active: 0.13,
    recover: 0.32,
    arc: 1.18,
    visualArc: 1.42,
    color: "#8d9285"
  },
  handCrossbow: {
    id: "handCrossbow",
    name: "Hand Crossbow",
    desc: "A compact ranged weapon with steady bolts and low stamina cost.",
    slot: "weapon",
    family: "crossbow",
    mode: "projectile",
    projectileKind: "bolt",
    reach: 620,
    lightDamage: 14,
    heavyDamage: 22,
    lightCooldown: 0.46,
    heavyCooldown: 0.86,
    staminaCost: 8,
    wind: 0.08,
    active: 0.04,
    recover: 0.16,
    arc: 0.32,
    visualArc: 0.56,
    projectileSpeed: 840,
    projectileRadius: 7,
    projectilePierce: 1,
    color: "#d4d0a4"
  },
  sparkWand: {
    id: "sparkWand",
    name: "Spark Wand",
    desc: "A tiny wand that throws quick Harry Potter-style sparks.",
    slot: "weapon",
    family: "wand",
    mode: "projectile",
    projectileKind: "wand",
    reach: 500,
    lightDamage: 14,
    heavyDamage: 24,
    lightCooldown: 0.34,
    heavyCooldown: 0.74,
    staminaCost: 12,
    wind: 0.085,
    active: 0.05,
    recover: 0.14,
    arc: 0.38,
    visualArc: 0.72,
    projectileSpeed: 640,
    projectileRadius: 9,
    projectilePierce: 1,
    color: "#d6adff"
  },
  sunkenSaber: {
    id: "sunkenSaber",
    name: "Sunken Saber",
    desc: "A curved guard blade with quick cuts and cleaner control than the rusty sword.",
    slot: "weapon",
    family: "sword",
    reach: 82,
    lightDamage: 22,
    heavyDamage: 36,
    lightCooldown: 0.24,
    heavyCooldown: 0.7,
    staminaCost: 10,
    wind: 0.065,
    active: 0.12,
    recover: 0.17,
    arc: 1,
    visualArc: 1.24,
    color: "#9fc3b6"
  },
  sunkenPike: {
    id: "sunkenPike",
    name: "Sunken Pike",
    desc: "A long damp spear from a door guard. Narrow, safe, and a little slow.",
    slot: "weapon",
    family: "spear",
    reach: 128,
    lightDamage: 17,
    heavyDamage: 31,
    lightCooldown: 0.36,
    heavyCooldown: 0.84,
    staminaCost: 13,
    wind: 0.1,
    active: 0.12,
    recover: 0.24,
    arc: 0.52,
    visualArc: 0.76,
    color: "#9fc3b6"
  },
  sunkenArbalest: {
    id: "sunkenArbalest",
    name: "Sunken Arbalest",
    desc: "A heavier crossbow with slow, loud bolts and strong range testing.",
    slot: "weapon",
    family: "crossbow",
    mode: "projectile",
    projectileKind: "bolt",
    reach: 650,
    lightDamage: 18,
    heavyDamage: 28,
    lightCooldown: 0.56,
    heavyCooldown: 0.95,
    staminaCost: 11,
    wind: 0.11,
    active: 0.04,
    recover: 0.2,
    arc: 0.3,
    visualArc: 0.5,
    projectileSpeed: 790,
    projectileRadius: 8,
    projectilePierce: 1,
    color: "#9fc3b6"
  },
  sunkenFang: {
    id: "sunkenFang",
    name: "Sunken Fang",
    desc: "A hooked axe head from a collapsed gate. Short, ugly, and good at third chops.",
    slot: "weapon",
    family: "axe",
    reach: 64,
    lightDamage: 29,
    heavyDamage: 46,
    lightCooldown: 0.4,
    heavyCooldown: 0.9,
    staminaCost: 17,
    wind: 0.105,
    active: 0.13,
    recover: 0.24,
    arc: 1.08,
    visualArc: 1.3,
    color: "#7ba08f"
  }
};

export const ITEMS = {
  corpseJournal: {
    id: "corpseJournal",
    name: "Corpse Journal",
    type: "journal",
    category: "Journal",
    desc: "A damp notebook with empty grids, smudged sketches, and room for things not yet named.",
    rarity: "story"
  },
  huntingKnife: {
    id: "huntingKnife",
    name: "Hunting Knife",
    type: "weapon",
    category: "Knife",
    weaponId: "huntingKnife",
    desc: WEAPONS.huntingKnife.desc,
    rarity: "story"
  },
  brokenKnife: {
    id: "brokenKnife",
    name: "Broken Knife",
    type: "weapon",
    category: "Knife",
    weaponId: "brokenKnife",
    desc: WEAPONS.brokenKnife.desc,
    rarity: "story"
  },
  rustySword: {
    id: "rustySword",
    name: "Rusty Sword",
    type: "weapon",
    category: "Sword",
    weaponId: "rustySword",
    desc: WEAPONS.rustySword.desc,
    rarity: "story"
  },
  brawlerWraps: {
    id: "brawlerWraps",
    name: "Brawler Wraps",
    type: "weapon",
    category: "Wraps",
    weaponId: "brawlerWraps",
    desc: WEAPONS.brawlerWraps.desc,
    rarity: "shop",
    design: {
      primary: "#7b4b32",
      secondary: "#d6ad55",
      accent: "#2f2118"
    }
  },
  trainingBow: {
    id: "trainingBow",
    name: "Training Bow",
    type: "weapon",
    category: "Bow",
    weaponId: "trainingBow",
    desc: WEAPONS.trainingBow.desc,
    rarity: "shop",
    design: {
      primary: "#6f6538",
      secondary: "#d8ecb2",
      accent: "#233126"
    }
  },
  apprenticeStaff: {
    id: "apprenticeStaff",
    name: "Apprentice Scepter",
    type: "weapon",
    category: "Magic Scepter",
    weaponId: "apprenticeStaff",
    desc: WEAPONS.apprenticeStaff.desc,
    rarity: "shop",
    design: {
      primary: "#5f4c86",
      secondary: "#caa7ff",
      accent: "#261832"
    }
  },
  ruinDagger: {
    id: "ruinDagger",
    name: "Ruin Dagger",
    type: "weapon",
    category: "Dagger",
    weaponId: "ruinDagger",
    desc: WEAPONS.ruinDagger.desc,
    rarity: "shop",
    design: {
      primary: "#8b714e",
      secondary: "#d8c2a0",
      accent: "#2f2118"
    }
  },
  ruinAxe: {
    id: "ruinAxe",
    name: "Ruin Axe",
    type: "weapon",
    category: "Axe",
    weaponId: "ruinAxe",
    desc: WEAPONS.ruinAxe.desc,
    rarity: "shop",
    design: {
      primary: "#6f4229",
      secondary: "#b87947",
      accent: "#24170e"
    }
  },
  twinRuinBlades: {
    id: "twinRuinBlades",
    name: "Twin Ruin Blades",
    type: "weapon",
    category: "Dual Weapon",
    weaponId: "twinRuinBlades",
    desc: WEAPONS.twinRuinBlades.desc,
    rarity: "shop",
    design: {
      primary: "#665a49",
      secondary: "#d0c4a8",
      accent: "#21160f"
    }
  },
  knightSword: {
    id: "knightSword",
    name: "Knight Sword",
    type: "weapon",
    category: "Sword",
    weaponId: "knightSword",
    desc: WEAPONS.knightSword.desc,
    rarity: "shop",
    design: {
      primary: "#6c6657",
      secondary: "#c6c9b9",
      accent: "#2f2118"
    }
  },
  knightGreatsword: {
    id: "knightGreatsword",
    name: "Knight Greatsword",
    type: "weapon",
    category: "Great Weapon",
    weaponId: "knightGreatsword",
    desc: WEAPONS.knightGreatsword.desc,
    rarity: "shop",
    design: {
      primary: "#686c64",
      secondary: "#c8cabe",
      accent: "#24241f"
    }
  },
  ironSpear: {
    id: "ironSpear",
    name: "Iron Spear",
    type: "weapon",
    category: "Spear",
    weaponId: "ironSpear",
    desc: WEAPONS.ironSpear.desc,
    rarity: "shop",
    design: {
      primary: "#5f6459",
      secondary: "#b9c0ad",
      accent: "#17110d"
    }
  },
  stoneHammer: {
    id: "stoneHammer",
    name: "Stone Hammer",
    type: "weapon",
    category: "Great Weapon",
    weaponId: "stoneHammer",
    desc: WEAPONS.stoneHammer.desc,
    rarity: "shop",
    design: {
      primary: "#5c5f56",
      secondary: "#8d9285",
      accent: "#2f2118"
    }
  },
  handCrossbow: {
    id: "handCrossbow",
    name: "Hand Crossbow",
    type: "weapon",
    category: "Crossbow",
    weaponId: "handCrossbow",
    desc: WEAPONS.handCrossbow.desc,
    rarity: "shop",
    design: {
      primary: "#6b4a31",
      secondary: "#d4d0a4",
      accent: "#1c1208"
    }
  },
  sparkWand: {
    id: "sparkWand",
    name: "Spark Wand",
    type: "weapon",
    category: "Wand",
    weaponId: "sparkWand",
    desc: WEAPONS.sparkWand.desc,
    rarity: "shop",
    design: {
      primary: "#5f4c86",
      secondary: "#d6adff",
      accent: "#261832"
    }
  },
  sunkenSaber: {
    id: "sunkenSaber",
    name: "Sunken Saber",
    type: "weapon",
    category: "Sword",
    weaponId: "sunkenSaber",
    desc: WEAPONS.sunkenSaber.desc,
    rarity: "shop",
    design: {
      primary: "#4f6d66",
      secondary: "#9fc3b6",
      accent: "#18302b"
    }
  },
  sunkenPike: {
    id: "sunkenPike",
    name: "Sunken Pike",
    type: "weapon",
    category: "Spear",
    weaponId: "sunkenPike",
    desc: WEAPONS.sunkenPike.desc,
    rarity: "shop",
    design: {
      primary: "#516c63",
      secondary: "#9fc3b6",
      accent: "#18302b"
    }
  },
  sunkenArbalest: {
    id: "sunkenArbalest",
    name: "Sunken Arbalest",
    type: "weapon",
    category: "Crossbow",
    weaponId: "sunkenArbalest",
    desc: WEAPONS.sunkenArbalest.desc,
    rarity: "shop",
    design: {
      primary: "#4c5c58",
      secondary: "#9fc3b6",
      accent: "#182622"
    }
  },
  sunkenFang: {
    id: "sunkenFang",
    name: "Sunken Fang",
    type: "weapon",
    category: "Axe",
    weaponId: "sunkenFang",
    desc: WEAPONS.sunkenFang.desc,
    rarity: "shop",
    design: {
      primary: "#4a665d",
      secondary: "#7ba08f",
      accent: "#182622"
    }
  },
  starterCap: {
    id: "starterCap",
    name: "Starter Cap",
    type: "gear",
    category: "Headgear",
    slot: "head",
    desc: "A plain cloth cap. It proves the journal can remember hats.",
    rarity: "starter",
    effects: {
      hpRegen: 1
    },
    design: {
      primary: "#6d5237",
      secondary: "#d0b071",
      accent: "#2f2118"
    }
  },
  starterTunic: {
    id: "starterTunic",
    name: "Starter Tunic",
    type: "gear",
    category: "Body Armor",
    slot: "body",
    desc: "A plain stitched tunic for testing the body armor slot.",
    rarity: "starter",
    effects: {
      maxHp: 4
    },
    design: {
      primary: "#675148",
      secondary: "#b89b73",
      accent: "#271c18"
    }
  },
  starterGlove: {
    id: "starterGlove",
    name: "Starter Glove",
    type: "gear",
    category: "Glove",
    slot: "hands",
    desc: "A worn brown glove for testing gear swaps.",
    rarity: "starter",
    effects: {
      maxHp: 5
    },
    design: {
      primary: "#7b4f31",
      secondary: "#c99a67",
      accent: "#3a271b"
    }
  },
  starterPants: {
    id: "starterPants",
    name: "Starter Pants",
    type: "gear",
    category: "Leg Armor",
    slot: "legs",
    desc: "Loose dark cloth pants for testing the leg armor slot.",
    rarity: "starter",
    effects: {
      maxHp: 3
    },
    design: {
      primary: "#24242a",
      secondary: "#5a5a66",
      accent: "#111116"
    }
  },
  starterCharm: {
    id: "starterCharm",
    name: "Starter Charm",
    type: "gear",
    category: "Trinket",
    slot: "trinket",
    desc: "A dull little charm for testing the trinket slot.",
    rarity: "starter",
    effects: {
      hpRegen: 0.25
    },
    design: {
      primary: "#6c6657",
      secondary: "#d6ad55",
      accent: "#211b14"
    }
  },
  diggersAmulet: {
    id: "diggersAmulet",
    name: "Digger's Amulet",
    type: "gear",
    category: "Trinket",
    slot: "trinket",
    desc: "A dirt-warm charm that makes your steps quicker.",
    rarity: "common",
    effects: {
      moveSpeed: 32
    },
    design: {
      primary: "#6d5f3d",
      secondary: "#d6ad55",
      accent: "#211b14"
    }
  },
  wingedChestplate: {
    id: "wingedChestplate",
    name: "Winged Chestplate",
    type: "gear",
    category: "Body Armor",
    slot: "body",
    desc: "A thin chestplate grown from wing-veins and old ruin dust.",
    rarity: "rare",
    effects: {
      maxHp: 6,
      moveSpeed: 10
    },
    dropNote: "Root-Wing Mote drop: Winged Chestplate, a light body piece with a little speed.",
    design: {
      primary: "#526b46",
      secondary: "#d8ecb2",
      accent: "#1a2217"
    }
  },
  bugChargeMod: {
    id: "bugChargeMod",
    name: "Bug Charge",
    type: "gear",
    category: "Dash Modification",
    slot: "modification",
    desc: "A crawler rhythm scratched into the journal margin. It makes a roll hit like a bug charge.",
    rarity: "rare",
    effects: {
      dashDamage: 16
    },
    dropNote: "Root-Bent Crawler drop: Bug Charge unlocked for the Modification slot.",
    design: {
      primary: "#384b2e",
      secondary: "#d6ad55",
      accent: "#11170f"
    }
  },
  dirt: {
    id: "dirt",
    name: "Dirt",
    type: "gear",
    category: "Foot Item",
    slot: "feet",
    desc: "Packed ruin dirt that clings to your feet and makes running feel easier.",
    rarity: "common",
    effects: {
      moveSpeed: 18
    },
    dropNote: "Root-Worm drop: Dirt, a foot item that makes you faster.",
    design: {
      primary: "#6d4f32",
      secondary: "#9a7650",
      accent: "#2a1d13"
    }
  },
  knightHelm: {
    id: "knightHelm",
    name: "Knight Helm",
    type: "gear",
    category: "Helmet",
    slot: "head",
    desc: "A blunt old helm from a nameless guard.",
    rarity: "shop",
    effects: {
      maxHp: 10
    },
    design: {
      primary: "#85877c",
      secondary: "#c6c9b9",
      accent: "#24241f"
    }
  },
  knightChestplate: {
    id: "knightChestplate",
    name: "Knight Chestplate",
    type: "gear",
    category: "Chest Armor",
    slot: "body",
    desc: "A heavy chestplate with moss in the seams.",
    rarity: "shop",
    effects: {
      maxHp: 18,
      moveSpeed: -8
    },
    design: {
      primary: "#777a70",
      secondary: "#c6c9b9",
      accent: "#24241f"
    }
  },
  knightGauntlets: {
    id: "knightGauntlets",
    name: "Knight Gauntlets",
    type: "gear",
    category: "Gauntlets",
    slot: "hands",
    desc: "Plain gauntlets made for holding a line.",
    rarity: "shop",
    effects: {
      maxHp: 8
    },
    design: {
      primary: "#787b72",
      secondary: "#c6c9b9",
      accent: "#24241f"
    }
  },
  knightGreaves: {
    id: "knightGreaves",
    name: "Knight Greaves",
    type: "gear",
    category: "Leg Armor",
    slot: "legs",
    desc: "Dented greaves that still know where knees go.",
    rarity: "shop",
    effects: {
      maxHp: 12,
      moveSpeed: -4
    },
    design: {
      primary: "#73766c",
      secondary: "#b9bdae",
      accent: "#24241f"
    }
  },
  knightBoots: {
    id: "knightBoots",
    name: "Knight Boots",
    type: "gear",
    category: "Boots",
    slot: "feet",
    desc: "Hard boots for ugly floors and uglier fights.",
    rarity: "shop",
    effects: {
      maxHp: 8,
      moveSpeed: -2
    },
    design: {
      primary: "#6d7068",
      secondary: "#b9bdae",
      accent: "#24241f"
    }
  },
  sunkenGuardMask: {
    id: "sunkenGuardMask",
    name: "Sunken Guard Mask",
    type: "gear",
    category: "Helmet",
    slot: "head",
    desc: "A flat old guard mask stained blue-green by swamp air.",
    rarity: "shop",
    effects: {
      maxHp: 7,
      moveSpeed: 2
    },
    design: {
      primary: "#49675e",
      secondary: "#9fc3b6",
      accent: "#18302b"
    }
  },
  sunkenGuardMail: {
    id: "sunkenGuardMail",
    name: "Sunken Guard Mail",
    type: "gear",
    category: "Chest Armor",
    slot: "body",
    desc: "A lighter guard cuirass with flexible plates and wet moss under the straps.",
    rarity: "shop",
    effects: {
      maxHp: 12,
      moveSpeed: 4
    },
    design: {
      primary: "#4f6d66",
      secondary: "#9fc3b6",
      accent: "#18302b"
    }
  },
  sunkenGuardBracers: {
    id: "sunkenGuardBracers",
    name: "Sunken Guard Bracers",
    type: "gear",
    category: "Bracers",
    slot: "hands",
    desc: "Narrow bracers made for quick weapon swaps and damp handles.",
    rarity: "shop",
    effects: {
      maxHp: 6,
      moveSpeed: 2
    },
    design: {
      primary: "#49645d",
      secondary: "#8bb4a5",
      accent: "#18302b"
    }
  },
  sunkenGuardGreaves: {
    id: "sunkenGuardGreaves",
    name: "Sunken Guard Greaves",
    type: "gear",
    category: "Leg Armor",
    slot: "legs",
    desc: "Light greaves cut short enough to sprint through broken stone.",
    rarity: "shop",
    effects: {
      maxHp: 9,
      moveSpeed: 3
    },
    design: {
      primary: "#465f59",
      secondary: "#8bb4a5",
      accent: "#172824"
    }
  },
  sunkenGuardTreads: {
    id: "sunkenGuardTreads",
    name: "Sunken Guard Treads",
    type: "gear",
    category: "Boots",
    slot: "feet",
    desc: "Soft old guard boots that trade some armor for cleaner movement.",
    rarity: "shop",
    effects: {
      maxHp: 5,
      moveSpeed: 6
    },
    design: {
      primary: "#3f5852",
      secondary: "#86aa9d",
      accent: "#172824"
    }
  }
};

export const ITEM_ICON_SPECS = Object.freeze({
  corpseJournal: {
    svg: `<path d="M8 6h15l3 4v18H8z" fill="#5f3f86" stroke="#1b120c" stroke-width="2"/><path d="M23 6v5h4" fill="#8b6db0"/><path d="M11 10h8v2h-8zm0 5h11v2H11zm0 5h9v2h-9z" fill="#d6ad55"/><path d="M21 18l4 3-4 3z" fill="#2f2118"/>`
  },
  huntingKnife: {
    svg: `<g transform="rotate(-43 16 16)"><rect x="14" y="14" width="4" height="13" fill="#6b4428" stroke="#1b120c" stroke-width="2"/><rect x="12" y="12" width="8" height="4" fill="#d6ad55" stroke="#1b120c" stroke-width="2"/><path d="M13 2h6l2 11H11z" fill="#d4d8ca" stroke="#1b120c" stroke-width="2"/><path d="M17 3l2 9h-3V3z" fill="#ffffff" opacity=".55"/></g>`
  },
  brokenKnife: {
    svg: `<g transform="rotate(-43 16 16)"><rect x="14" y="17" width="4" height="10" fill="#6b4428" stroke="#1b120c" stroke-width="2"/><rect x="12" y="15" width="8" height="4" fill="#d6ad55" stroke="#1b120c" stroke-width="2"/><path d="M12 4h8l-2 5 3 2-3 5h-6z" fill="#aeb5ad" stroke="#1b120c" stroke-width="2"/><path d="M16 5l2 4-2 6z" fill="#eef1df" opacity=".45"/></g>`
  },
  rustySword: {
    svg: `<g transform="rotate(-44 16 16)"><rect x="14" y="5" width="4" height="17" fill="#9a9382" stroke="#1b120c" stroke-width="2"/><path d="M12 4h8l-2-3h-4z" fill="#b9bdae" stroke="#1b120c" stroke-width="2"/><rect x="9" y="20" width="14" height="4" fill="#8e522d" stroke="#1b120c" stroke-width="2"/><rect x="14" y="23" width="4" height="8" fill="#6b3a25" stroke="#1b120c" stroke-width="2"/><path d="M17 8h2v3h-2zm-3 7h2v3h-2z" fill="#b87947"/></g>`
  },
  brawlerWraps: {
    svg: `<path d="M8 12h7v9H8zM17 11h7v10h-7z" fill="#a56b3a" stroke="#1b120c" stroke-width="2"/><path d="M6 20h11v5H6zm10 0h11v5H16z" fill="#7b4b32" stroke="#1b120c" stroke-width="2"/><path d="M9 15h5m5-1h4m-13 8h6m3 0h6" stroke="#d6ad55" stroke-width="2"/>`
  },
  trainingBow: {
    svg: `<path d="M21 4c-8 3-11 9-9 24 8-3 11-9 9-24z" fill="none" stroke="#4f3b21" stroke-width="4"/><path d="M20 5c5 8 4 15-7 23" fill="none" stroke="#d8ecb2" stroke-width="2"/><path d="M9 17h15" stroke="#1b120c" stroke-width="2"/><path d="M23 17l-5-3v6z" fill="#d8ecb2" stroke="#1b120c" stroke-width="1"/>`
  },
  apprenticeStaff: {
    svg: `<g transform="rotate(32 16 16)"><rect x="14" y="7" width="4" height="22" fill="#6b4a31" stroke="#1b120c" stroke-width="2"/><path d="M16 2l6 5-3 6h-6l-3-6z" fill="#6e4fa3" stroke="#1b120c" stroke-width="2"/><path d="M16 5l3 3-2 3h-3l-2-3z" fill="#d6adff"/><rect x="13" y="13" width="6" height="3" fill="#d6ad55" stroke="#1b120c" stroke-width="1"/></g>`
  },
  ruinDagger: {
    svg: `<g transform="rotate(-36 16 16)"><path d="M13 4h6l2 13H11z" fill="#8b714e" stroke="#1b120c" stroke-width="2"/><path d="M16 5l3 11h-3z" fill="#d8c2a0"/><rect x="12" y="17" width="8" height="3" fill="#465f35" stroke="#1b120c" stroke-width="2"/><rect x="14" y="20" width="4" height="8" fill="#3b2a1b" stroke="#1b120c" stroke-width="2"/></g>`
  },
  ruinAxe: {
    svg: `<rect x="13" y="7" width="5" height="22" fill="#6f4229" stroke="#1b120c" stroke-width="2"/><path d="M13 6h12l3 5-4 7H13z" fill="#b87947" stroke="#1b120c" stroke-width="2"/><path d="M12 7H5l-2 7 5 5h5z" fill="#8d623e" stroke="#1b120c" stroke-width="2"/><path d="M18 10h5v3h-5z" fill="#d0a16c"/>`
  },
  twinRuinBlades: {
    svg: `<g transform="rotate(-41 16 16)"><path d="M13 2h6l1 14h-8z" fill="#d0c4a8" stroke="#1b120c" stroke-width="2"/><rect x="12" y="16" width="8" height="3" fill="#665a49" stroke="#1b120c" stroke-width="1"/><rect x="14" y="19" width="4" height="8" fill="#3a2a1d" stroke="#1b120c" stroke-width="2"/></g><g transform="rotate(41 16 16)"><path d="M13 2h6l1 14h-8z" fill="#d0c4a8" stroke="#1b120c" stroke-width="2"/><rect x="12" y="16" width="8" height="3" fill="#665a49" stroke="#1b120c" stroke-width="1"/><rect x="14" y="19" width="4" height="8" fill="#3a2a1d" stroke="#1b120c" stroke-width="2"/></g>`
  },
  knightSword: {
    svg: `<g transform="rotate(-45 16 16)"><path d="M13 2h6l2 19H11z" fill="#c6c9b9" stroke="#1b120c" stroke-width="2"/><path d="M16 3l2 17h-2z" fill="#ffffff" opacity=".45"/><rect x="8" y="20" width="16" height="4" fill="#d6ad55" stroke="#1b120c" stroke-width="2"/><rect x="14" y="23" width="4" height="8" fill="#5c4530" stroke="#1b120c" stroke-width="2"/></g>`
  },
  knightGreatsword: {
    svg: `<g transform="rotate(-45 16 16)"><path d="M12 0h8l2 23H10z" fill="#c8cabe" stroke="#1b120c" stroke-width="2"/><path d="M16 2l3 20h-3z" fill="#ffffff" opacity=".45"/><rect x="6" y="22" width="20" height="5" fill="#8f7743" stroke="#1b120c" stroke-width="2"/><rect x="13" y="26" width="6" height="7" fill="#4a3322" stroke="#1b120c" stroke-width="2"/></g>`
  },
  ironSpear: {
    svg: `<g transform="rotate(-38 16 16)"><rect x="15" y="9" width="3" height="22" fill="#6b4a31" stroke="#1b120c" stroke-width="1"/><path d="M16 1l6 9-6 6-6-6z" fill="#b9c0ad" stroke="#1b120c" stroke-width="2"/><path d="M16 3l3 7-3 3z" fill="#eff2df"/><rect x="13" y="15" width="7" height="3" fill="#5f6459" stroke="#1b120c" stroke-width="1"/></g>`
  },
  stoneHammer: {
    svg: `<g transform="rotate(-28 16 16)"><rect x="14" y="9" width="5" height="21" fill="#6b4a31" stroke="#1b120c" stroke-width="2"/><rect x="7" y="4" width="18" height="10" fill="#8d9285" stroke="#1b120c" stroke-width="2"/><path d="M9 6h5v2H9zm8 3h5v2h-5z" fill="#c1c6b6"/><rect x="13" y="13" width="7" height="4" fill="#5c5f56" stroke="#1b120c" stroke-width="1"/></g>`
  },
  handCrossbow: {
    svg: `<path d="M5 9h22l-4 7H9z" fill="#6b4a31" stroke="#1b120c" stroke-width="2"/><rect x="14" y="12" width="5" height="15" fill="#4a2f1c" stroke="#1b120c" stroke-width="2"/><path d="M4 10c5 5 19 5 24 0" fill="none" stroke="#d4d0a4" stroke-width="2"/><path d="M7 17h19" stroke="#1b120c" stroke-width="2"/><path d="M25 17l-4-3v6z" fill="#cfd4c3" stroke="#1b120c" stroke-width="1"/>`
  },
  sparkWand: {
    svg: `<g transform="rotate(34 16 16)"><rect x="15" y="8" width="3" height="21" fill="#4b3622" stroke="#1b120c" stroke-width="1"/><path d="M16 2l2 5 5 1-4 3 1 5-4-3-4 3 1-5-4-3 5-1z" fill="#d6adff" stroke="#1b120c" stroke-width="2"/><path d="M16 5l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="#fff0b5"/></g>`
  },
  sunkenSaber: {
    svg: `<g transform="rotate(-44 16 16)"><path d="M13 3c8 4 9 11 3 20h-5c6-7 6-13 2-20z" fill="#9fc3b6" stroke="#1b120c" stroke-width="2"/><path d="M15 5c4 5 4 10 0 16" fill="none" stroke="#d8fff1" stroke-width="2"/><rect x="8" y="20" width="15" height="4" fill="#4f6d66" stroke="#1b120c" stroke-width="2"/><rect x="14" y="23" width="4" height="8" fill="#18302b" stroke="#1b120c" stroke-width="2"/></g>`
  },
  sunkenPike: {
    svg: `<g transform="rotate(-36 16 16)"><rect x="15" y="8" width="3" height="23" fill="#394b36" stroke="#1b120c" stroke-width="1"/><path d="M16 1l7 10-7 8-7-8z" fill="#7ba08f" stroke="#1b120c" stroke-width="2"/><path d="M16 4l3 7-3 5z" fill="#c9f0df"/><path d="M10 16h12v3H10z" fill="#516c63" stroke="#1b120c" stroke-width="1"/></g>`
  },
  sunkenArbalest: {
    svg: `<path d="M3 8h26l-5 8H8z" fill="#4c5c58" stroke="#1b120c" stroke-width="2"/><rect x="13" y="12" width="7" height="16" fill="#2f3d39" stroke="#1b120c" stroke-width="2"/><path d="M4 9c6 7 18 7 24 0" fill="none" stroke="#9fc3b6" stroke-width="3"/><path d="M6 18h21" stroke="#1b120c" stroke-width="2"/><path d="M27 18l-6-4v8z" fill="#bce2d5" stroke="#1b120c" stroke-width="1"/>`
  },
  sunkenFang: {
    svg: `<rect x="13" y="8" width="5" height="21" fill="#374235" stroke="#1b120c" stroke-width="2"/><path d="M13 5c8 0 13 4 13 11-5-4-8-3-13 4z" fill="#7ba08f" stroke="#1b120c" stroke-width="2"/><path d="M12 7C7 8 4 11 4 17c4-3 7-2 9 2z" fill="#4a665d" stroke="#1b120c" stroke-width="2"/><path d="M17 8c4 1 6 3 7 6-3-2-5-2-8 1z" fill="#c0e1d2"/>`
  },
  starterCap: {
    svg: `<path d="M7 17c1-7 6-11 14-10 4 1 6 4 6 9l-5 3H9z" fill="#6d5237" stroke="#1b120c" stroke-width="2"/><path d="M8 17h20v5H5z" fill="#3a291b" stroke="#1b120c" stroke-width="2"/><path d="M13 9h8v3h-8z" fill="#d0b071"/>`
  },
  starterTunic: {
    svg: `<path d="M10 7h12l5 5-3 5-2-2v12H10V15l-2 2-3-5z" fill="#6b2db5" stroke="#1b120c" stroke-width="2"/><path d="M12 8l4 4 4-4z" fill="#d6ad55"/><path d="M12 15h8v9h-8z" fill="#5a229a"/>`
  },
  starterGlove: {
    svg: `<path d="M10 8h8v6h3v4h-3v7H9v-7H6v-4h4z" fill="#7b4f31" stroke="#1b120c" stroke-width="2"/><path d="M18 12h5v5h-5z" fill="#c99a67" stroke="#1b120c" stroke-width="2"/><path d="M11 9h2v5h-2zm4 0h2v5h-2z" fill="#d5a675"/>`
  },
  starterPants: {
    svg: `<path d="M10 6h12v8l-3 13h-5l1-11h-2l-1 11H7l3-13z" fill="#24242a" stroke="#1b120c" stroke-width="2"/><path d="M11 8h10v4H11z" fill="#5a5a66"/><path d="M8 26h7v3H8zm10 0h7v3h-7z" fill="#101014" stroke="#1b120c" stroke-width="1"/>`
  },
  starterCharm: {
    svg: `<path d="M12 5c2 4 6 4 8 0 4 4 4 10-4 16-8-6-8-12-4-16z" fill="#6c6657" stroke="#1b120c" stroke-width="2"/><rect x="14" y="21" width="4" height="6" fill="#d6ad55" stroke="#1b120c" stroke-width="2"/><path d="M16 9l2 4-2 4-2-4z" fill="#fff0b5"/>`
  },
  diggersAmulet: {
    svg: `<circle cx="16" cy="16" r="10" fill="#6d5f3d" stroke="#1b120c" stroke-width="2"/><circle cx="16" cy="16" r="5" fill="#d6ad55" stroke="#1b120c" stroke-width="2"/><path d="M10 9c2-5 10-5 12 0" fill="none" stroke="#f0d37b" stroke-width="2"/><path d="M13 17h6v5h-6z" fill="#5a3a23"/>`
  },
  wingedChestplate: {
    svg: `<path d="M11 6h10l5 6-4 15H10L6 12z" fill="#526b46" stroke="#1b120c" stroke-width="2"/><path d="M6 11L2 16l5 3 4-4zm20 0l4 5-5 3-4-4z" fill="#d8ecb2" stroke="#1b120c" stroke-width="2"/><path d="M13 8h6l2 6-5 3-5-3z" fill="#8da858"/><path d="M12 19h8v5h-8z" fill="#26341f"/>`
  },
  bugChargeMod: {
    svg: `<ellipse cx="16" cy="17" rx="9" ry="10" fill="#384b2e" stroke="#1b120c" stroke-width="2"/><path d="M16 8v18M9 14H5m22 0h-4M8 20H4m24 0h-4" stroke="#1b120c" stroke-width="2"/><path d="M11 11h3v3h-3zm7 0h3v3h-3z" fill="#d6ad55"/><path d="M11 22h10v2H11z" fill="#8da858"/>`
  },
  dirt: {
    svg: `<path d="M5 22c2-7 7-10 13-8 3 1 6 3 9 8v5H5z" fill="#6d4f32" stroke="#1b120c" stroke-width="2"/><path d="M8 21l4-4 3 3 4-3 5 4z" fill="#9a7650"/><path d="M10 25h4m4 0h6m-9-8h3" stroke="#2a1d13" stroke-width="2"/>`
  },
  knightHelm: {
    svg: `<path d="M7 15c1-7 6-11 14-10 4 2 6 5 5 12v9H7z" fill="#85877c" stroke="#1b120c" stroke-width="2"/><path d="M10 16h13v4H10z" fill="#24241f"/><path d="M13 17h2v3h-2zm5 0h2v3h-2z" fill="#fff0b5"/><path d="M10 9h12v4H10z" fill="#c6c9b9"/>`
  },
  knightChestplate: {
    svg: `<path d="M10 6h12l5 6-4 15H9L5 12z" fill="#777a70" stroke="#1b120c" stroke-width="2"/><path d="M12 8h8l2 6-6 4-6-4z" fill="#c6c9b9"/><path d="M9 18h14v3H9zm3 4h8v3h-8z" fill="#464941"/>`
  },
  knightGauntlets: {
    svg: `<path d="M7 11h8v12H5v-8zM17 11h8l2 4v8H17z" fill="#787b72" stroke="#1b120c" stroke-width="2"/><path d="M8 12h6v4H8zm10 0h6v4h-6z" fill="#c6c9b9"/><path d="M6 23h10v4H6zm10 0h10v4H16z" fill="#4a4d45" stroke="#1b120c" stroke-width="1"/>`
  },
  knightGreaves: {
    svg: `<path d="M9 5h6l-1 20H7zm8 0h6l2 20h-7z" fill="#73766c" stroke="#1b120c" stroke-width="2"/><path d="M10 7h4v6h-4zm8 0h4v6h-4z" fill="#b9bdae"/><path d="M6 25h9v4H6zm11 0h9v4h-9z" fill="#3d4039" stroke="#1b120c" stroke-width="1"/>`
  },
  knightBoots: {
    svg: `<path d="M9 9h7v14h-2v4H5v-5l4-2zM18 9h7v11l4 2v5H19v-4h-1z" fill="#6d7068" stroke="#1b120c" stroke-width="2"/><path d="M10 11h5v5h-5zm9 0h5v5h-5z" fill="#b9bdae"/><path d="M5 25h10m4 0h10" stroke="#24241f" stroke-width="2"/>`
  },
  sunkenGuardMask: {
    svg: `<path d="M8 8h16l3 5-3 13H8L5 13z" fill="#49675e" stroke="#1b120c" stroke-width="2"/><path d="M10 14h5v3h-5zm7 0h5v3h-5z" fill="#d8fff1"/><path d="M12 22h8v2h-8z" fill="#18302b"/><path d="M9 9h14v3H9z" fill="#9fc3b6"/>`
  },
  sunkenGuardMail: {
    svg: `<path d="M10 6h12l5 6-4 15H9L5 12z" fill="#4f6d66" stroke="#1b120c" stroke-width="2"/><path d="M11 10h10v4H11zm-1 6h12v3H10zm1 5h10v3H11z" fill="#9fc3b6"/><path d="M7 13l4 3m14-3l-4 3" stroke="#18302b" stroke-width="2"/>`
  },
  sunkenGuardBracers: {
    svg: `<path d="M7 10h8v15H6L4 15zM17 10h8l3 5-2 10h-9z" fill="#49645d" stroke="#1b120c" stroke-width="2"/><path d="M8 12h6v4H8zm11 0h6v4h-6z" fill="#8bb4a5"/><path d="M7 20h7m5 0h7" stroke="#172824" stroke-width="2"/>`
  },
  sunkenGuardGreaves: {
    svg: `<path d="M9 5h6l-2 20H7zm8 0h6l2 20h-7z" fill="#465f59" stroke="#1b120c" stroke-width="2"/><path d="M10 7h4v5h-4zm8 0h4v5h-4z" fill="#8bb4a5"/><path d="M7 17h6m6 0h6" stroke="#172824" stroke-width="2"/><path d="M6 25h8v4H6zm12 0h8v4h-8z" fill="#29413b" stroke="#1b120c" stroke-width="1"/>`
  },
  sunkenGuardTreads: {
    svg: `<path d="M8 10h7v12h-2v4H4v-5l4-2zM17 10h7v9l5 2v5H19v-4h-2z" fill="#3f5852" stroke="#1b120c" stroke-width="2"/><path d="M9 12h5v4H9zm9 0h5v4h-5z" fill="#86aa9d"/><path d="M4 25h10m5 0h10" stroke="#172824" stroke-width="2"/>`
  }
});

export const GEAR_SLOTS = [
  { id: "weapon", label: "Primary" },
  { id: "secondaryWeapon", label: "Secondary" },
  { id: "head", label: "Head" },
  { id: "body", label: "Body" },
  { id: "hands", label: "Hands" },
  { id: "legs", label: "Legs" },
  { id: "feet", label: "Feet" },
  { id: "trinket", label: "Trinket" },
  { id: "modification", label: "Modification" }
];

export const CLASSES = {
  rootbound: {
    id: "rootbound",
    name: "Rootbound",
    short: "Old roots, steady control.",
    desc: "A moss-and-amber origin that pins enemies, controls space, and keeps fights readable.",
    evolution: "Memory path: briars, oaths, and wild calls.",
    stats: {
      maxHp: 108,
      width: 30,
      height: 58,
      moveSpeed: 292,
      maxStamina: 108,
      attackSpeed: 1.02
    },
    gauge: {
      id: "chant",
      label: "Chant",
      color: "#9ba95f",
      glow: "#ffd879",
      cost: 55,
      passiveGain: 3.2,
      hitGain: 7,
      killGain: 13
    },
    ability: {
      id: "thornSpear",
      name: "Thorn Spear",
      hint: "R",
      cooldown: 6,
      staminaCost: 0,
      weakDesc: "",
      desc: "Erupts a vertical thorn spear from below, piercing and briefly rooting everything above it."
    }
  },
  frenzied: {
    id: "frenzied",
    name: "Frenzied",
    short: "Rust-red pressure.",
    desc: "A close-range origin that turns movement and impact into violent pressure.",
    evolution: "Memory path: fang, ruin, and hide.",
    stats: {
      maxHp: 112,
      width: 31,
      height: 58,
      moveSpeed: 316,
      maxStamina: 96,
      attackSpeed: 1.16
    },
    gauge: {
      id: "frenzy",
      label: "Frenzy",
      color: "#c94c38",
      glow: "#ffb07a",
      cost: 60,
      passiveGain: 2.6,
      hitGain: 9,
      killGain: 15
    },
    ability: {
      id: "ruinPounce",
      name: "Ruin Pounce",
      hint: "R",
      cooldown: 7,
      staminaCost: 0,
      weakDesc: "",
      desc: "Long-jumps toward the aim direction with reduced damage taken, then lands with a damaging ground crack."
    }
  },
  hollow: {
    id: "hollow",
    name: "Hollow",
    short: "Violet blood magic.",
    desc: "A risky leech origin with a lighter body, dark cuts, and dangerous ranged curse magic.",
    evolution: "Memory path: vein, grave, and echo.",
    stats: {
      maxHp: 92,
      width: 29,
      height: 58,
      moveSpeed: 282,
      maxStamina: 128,
      attackSpeed: 0.96
    },
    gauge: {
      id: "blood",
      label: "Blood",
      color: "#8e5bd8",
      glow: "#d9b7ff",
      cost: 58,
      passiveGain: 3.0,
      hitGain: 6,
      killGain: 18
    },
    ability: {
      id: "ambushCut",
      name: "Ambush Cut",
      hint: "R",
      cooldown: 5.5,
      staminaCost: 0,
      weakDesc: "",
      desc: "Cuts through the screen to appear behind a nearby enemy and leech from the backstab burst."
    }
  }
};

export const ENEMIES = {
  rootCrawler: {
    id: "rootCrawler",
    name: "Root-Bent Crawler",
    journal: "Low, branch-boned shapes. They move like roots remembering hunger.",
    maxHp: 48,
    speed: 132,
    ai: "hunter",
    visionRange: 420,
    visionHeight: 115,
    chaseMemory: 1.95,
    patrolSpeed: 58,
    damage: 10,
    contactDamage: 6,
    attackRange: 84,
    attackWind: 0.26,
    attackRecover: 0.62,
    leapDistance: 98,
    leapDuration: 0.33,
    width: 42,
    height: 24,
    fluid: "rootIchor",
    eyeCount: 4
  },
  rootMote: {
    id: "rootMote",
    name: "Root-Wing Mote",
    journal: "A small flying root-shape. It hangs back, twitches, then throws itself forward.",
    maxHp: 32,
    speed: 122,
    ai: "flyingLunger",
    movement: "flying",
    visionRange: 460,
    visionHeight: 190,
    chaseMemory: 1.28,
    patrolSpeed: 42,
    hoverHeight: 154,
    hoverBob: 12,
    lungeSpeed: 430,
    lungeDuration: 0.58,
    damage: 9,
    contactDamage: 5,
    attackRange: 285,
    attackWind: 0.34,
    attackRecover: 0.98,
    width: 34,
    height: 28,
    fluid: "rootIchor",
    eyeCount: 2
  },
  rootWorm: {
    id: "rootWorm",
    name: "Root-Worm",
    journal: "A worm under the stone. The floor shakes, it snaps upward, then forgets to hide for three breaths.",
    maxHp: 42,
    speed: 82,
    ai: "burrower",
    movement: "burrow",
    visionRange: 410,
    visionHeight: 150,
    chaseMemory: 1.05,
    patrolSpeed: 38,
    popDuration: 3,
    damage: 12,
    contactDamage: 5,
    attackRange: 260,
    attackWind: 0.62,
    attackRecover: 0.95,
    width: 38,
    height: 46,
    fluid: "rootIchor",
    eyeCount: 2
  }
};

export const BOSSES = {
  hugeRootCrawler: {
    id: "hugeRootCrawler",
    name: "Huge Root Crawler",
    journal: "Too large for the arch it crawled through. The knife did not survive the lesson.",
    maxHp: 280,
    phaseBreak: 0.48,
    knifeBreakAt: 0.72,
    damage: 16,
    contactDamage: 10,
    width: 176,
    height: 92,
    fluid: "rootIchor"
  }
};

export const ROOMS = [
  {
    id: "wakingStones",
    name: "Waking Stones",
    biome: "Moss-Covered Ruins",
    width: 1700,
    floorY: 610,
    startX: 170,
    corpse: { x: 610, y: 566, itemId: "corpseJournal" },
    platforms: [
      { x: 320, y: 500, w: 210, h: 18 },
      { x: 980, y: 460, w: 260, h: 18 }
    ],
    exits: [
      { x: 1590, to: "crawlerPassage", label: "Moss Arch", requires: "journalFound" }
    ],
    spawns: []
  },
  {
    id: "crawlerPassage",
    name: "Crawler Passage",
    biome: "Moss-Covered Ruins",
    width: 1900,
    floorY: 612,
    startX: 130,
    platforms: [
      { x: 430, y: 512, w: 240, h: 18 },
      { x: 980, y: 438, w: 250, h: 18 },
      { x: 1330, y: 526, w: 220, h: 18 }
    ],
    exits: [
      { x: 80, to: "wakingStones", label: "Back" },
      { x: 1780, to: "rootNest", label: "Low Door", requires: "roomClear" }
    ],
    spawns: [
      { enemyId: "rootCrawler", x: 760, ai: "patrolOnly", patrolMin: 650, patrolMax: 880 },
      { enemyId: "rootCrawler", x: 1090, patrolMin: 980, patrolMax: 1210 },
      { enemyId: "rootWorm", x: 1220, patrolMin: 1040, patrolMax: 1400 },
      { enemyId: "rootMote", x: 1320, patrolMin: 1180, patrolMax: 1500 },
      { enemyId: "rootCrawler", x: 1480, patrolMin: 1360, patrolMax: 1620 }
    ]
  },
  {
    id: "rootNest",
    name: "Root Nest",
    biome: "Moss-Covered Ruins",
    width: 2050,
    floorY: 612,
    startX: 135,
    platforms: [
      { x: 360, y: 492, w: 230, h: 18 },
      { x: 760, y: 420, w: 230, h: 18 },
      { x: 1240, y: 478, w: 270, h: 18 },
      { x: 1640, y: 384, w: 190, h: 18 }
    ],
    exits: [
      { x: 85, to: "crawlerPassage", label: "Back" },
      { x: 1930, to: "rootCrawlerPit", label: "Split Stone Gate", requires: "roomClear" }
    ],
    spawns: [
      { enemyId: "rootCrawler", x: 560, ai: "patrolOnly", patrolMin: 430, patrolMax: 690 },
      { enemyId: "rootCrawler", x: 850, patrolMin: 740, patrolMax: 1030 },
      { enemyId: "rootMote", x: 1040, patrolMin: 900, patrolMax: 1180 },
      { enemyId: "rootCrawler", x: 1200, patrolMin: 1080, patrolMax: 1340 },
      { enemyId: "rootWorm", x: 1370, patrolMin: 1230, patrolMax: 1540 },
      { enemyId: "rootCrawler", x: 1510, patrolMin: 1390, patrolMax: 1640 },
      { enemyId: "rootMote", x: 1640, patrolMin: 1520, patrolMax: 1840 },
      { enemyId: "rootCrawler", x: 1740, patrolMin: 1600, patrolMax: 1840 }
    ]
  },
  {
    id: "rootCrawlerPit",
    name: "Crawler Pit",
    biome: "Moss-Covered Ruins",
    width: 1900,
    floorY: 612,
    startX: 150,
    bossId: "hugeRootCrawler",
    platforms: [
      { x: 430, y: 508, w: 210, h: 18 },
      { x: 1210, y: 500, w: 230, h: 18 }
    ],
    exits: [
      { x: 80, to: "rootNest", label: "Back" },
      { x: 1790, to: "splitArch", label: "Swampy Door", requires: "bossDefeated" }
    ],
    spawns: []
  },
  {
    id: "splitArch",
    name: "Dead-Tree Swamp Door",
    biome: "Dead-Tree Swamp",
    width: 1550,
    floorY: 612,
    startX: 130,
    platforms: [
      { x: 510, y: 476, w: 220, h: 18 },
      { x: 990, y: 476, w: 220, h: 18 }
    ],
    exits: [
      { x: 78, to: "rootCrawlerPit", label: "Back" }
    ],
    spawns: [],
    demoComplete: true
  }
];

export function getRoom(id) {
  return ROOMS.find((room) => room.id === id);
}

export function assertDataIntegrity() {
  const ids = new Set(ROOMS.map((room) => room.id));
  for (const room of ROOMS) {
    for (const exit of room.exits) {
      if (!ids.has(exit.to)) {
        throw new Error(`${room.id} exits to missing room ${exit.to}`);
      }
    }
    for (const spawn of room.spawns) {
      if (!ENEMIES[spawn.enemyId]) {
        throw new Error(`${room.id} spawns missing enemy ${spawn.enemyId}`);
      }
    }
    if (room.corpse && !ITEMS[room.corpse.itemId]) {
      throw new Error(`${room.id} corpse uses missing item ${room.corpse.itemId}`);
    }
    if (room.bossId && !BOSSES[room.bossId]) {
      throw new Error(`${room.id} uses missing boss ${room.bossId}`);
    }
  }
  for (const item of Object.values(ITEMS)) {
    if (item.weaponId && !WEAPONS[item.weaponId]) {
      throw new Error(`${item.id} references missing weapon ${item.weaponId}`);
    }
    if (!ITEM_ICON_SPECS[item.id]) {
      throw new Error(`${item.id} needs a unique item icon.`);
    }
  }
  const itemIconArt = new Set();
  for (const [iconId, icon] of Object.entries(ITEM_ICON_SPECS)) {
    if (!ITEMS[iconId]) {
      throw new Error(`Item icon ${iconId} does not match an item.`);
    }
    if (!icon.svg || typeof icon.svg !== "string" || !icon.svg.includes("<")) {
      throw new Error(`Item icon ${iconId} needs SVG art.`);
    }
    if (itemIconArt.has(icon.svg)) {
      throw new Error(`Item icon ${iconId} duplicates another item icon.`);
    }
    itemIconArt.add(icon.svg);
  }
  for (const weapon of Object.values(WEAPONS)) {
    if (!WEAPON_FAMILIES[weapon.family]) {
      throw new Error(`${weapon.id} uses missing weapon family ${weapon.family}`);
    }
  }
  return true;
}
