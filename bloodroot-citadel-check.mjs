import {
  BOSSES,
  CLASSES,
  ENEMIES,
  FLUIDS,
  GEAR_SLOTS,
  ITEMS,
  ITEM_ICON_SPECS,
  ROOMS,
  WEAPON_FAMILIES,
  WEAPONS,
  assertDataIntegrity
} from "./bloodroot-citadel-data.mjs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const SECONDARY_RANGED_FAMILIES = new Set(["bow", "crossbow", "wand", "scepter"]);

assertDataIntegrity();

assert(ROOMS.length >= 5, "Demo should include tutorial rooms plus the split arch.");
assert(ROOMS[0].id === "wakingStones", "Demo should start in Waking Stones.");
assert(ROOMS.some((room) => room.corpse?.itemId === "corpseJournal"), "Corpse journal must exist in a room.");
assert(ROOMS.some((room) => room.bossId === "hugeRootCrawler"), "Huge Root Crawler boss room is required.");
assert(ROOMS.some((room) => room.demoComplete), "A demo-complete branch room should exist.");

assert(WEAPONS.huntingKnife, "Hunting Knife weapon missing.");
assert(WEAPONS.brokenKnife, "Broken Knife weapon missing.");
assert(WEAPONS.rustySword, "Rusty Sword weapon missing.");
assert(WEAPONS.brawlerWraps, "Brawler Wraps weapon missing.");
assert(WEAPONS.trainingBow, "Training Bow weapon missing.");
assert(WEAPONS.apprenticeStaff, "Apprentice Scepter weapon missing.");
assert(WEAPONS.ruinDagger, "Ruin Dagger weapon missing.");
assert(WEAPONS.ruinAxe, "Ruin Axe weapon missing.");
assert(WEAPONS.twinRuinBlades, "Twin Ruin Blades weapon missing.");
assert(WEAPONS.knightSword, "Knight Sword weapon missing.");
assert(WEAPONS.knightGreatsword, "Knight Greatsword weapon missing.");
assert(WEAPONS.ironSpear, "Iron Spear weapon missing.");
assert(WEAPONS.stoneHammer, "Stone Hammer weapon missing.");
assert(WEAPONS.handCrossbow, "Hand Crossbow weapon missing.");
assert(WEAPONS.sparkWand, "Spark Wand weapon missing.");
assert(WEAPONS.sunkenSaber, "Sunken Saber weapon missing.");
assert(WEAPONS.sunkenPike, "Sunken Pike weapon missing.");
assert(WEAPONS.sunkenArbalest, "Sunken Arbalest weapon missing.");
assert(WEAPONS.sunkenFang, "Sunken Fang weapon missing.");
assert(WEAPONS.rustySword.reach > WEAPONS.huntingKnife.reach, "Rusty Sword should reach farther than the tutorial knife.");
for (const familyId of Object.keys(WEAPON_FAMILIES)) {
  assert(Object.values(WEAPONS).some((weapon) => weapon.family === familyId), `Weapon family ${familyId} needs at least one weapon.`);
  assert(Object.values(ITEMS).some((item) => item.weaponId && WEAPONS[item.weaponId]?.family === familyId), `Weapon family ${familyId} needs at least one item.`);
}

assert(ITEMS.corpseJournal.type === "journal", "Corpse Journal should be a journal item.");
assert(Object.keys(ITEM_ICON_SPECS).length === Object.keys(ITEMS).length, "Every item should have exactly one custom UI icon.");
for (const itemId of Object.keys(ITEMS)) {
  assert(ITEM_ICON_SPECS[itemId]?.svg, `${itemId} needs a custom UI icon.`);
}
assert(ITEMS.rustySword.weaponId === "rustySword", "Rusty Sword item should equip the rusty sword weapon.");
assert(ITEMS.knightGreatsword.weaponId === "knightGreatsword", "Knight Greatsword should equip the greatsword weapon.");
assert(ITEMS.ruinAxe.weaponId === "ruinAxe", "Ruin Axe should equip the axe weapon.");
assert(ITEMS.twinRuinBlades.weaponId === "twinRuinBlades", "Twin Ruin Blades should equip the dual weapon.");
assert(ITEMS.knightHelm.slot === "head", "Knight Helm should fill the head slot.");
assert(ITEMS.knightChestplate.slot === "body", "Knight Chestplate should fill the body slot.");
assert(ITEMS.knightGauntlets.slot === "hands", "Knight Gauntlets should fill the hands slot.");
assert(ITEMS.knightGreaves.slot === "legs", "Knight Greaves should fill the legs slot.");
assert(ITEMS.knightBoots.slot === "feet", "Knight Boots should fill the feet slot.");
assert(ITEMS.sunkenGuardMask.slot === "head", "Sunken Guard Mask should fill the head slot.");
assert(ITEMS.sunkenGuardMail.slot === "body", "Sunken Guard Mail should fill the body slot.");
assert(ITEMS.sunkenGuardBracers.slot === "hands", "Sunken Guard Bracers should fill the hands slot.");
assert(ITEMS.sunkenGuardGreaves.slot === "legs", "Sunken Guard Greaves should fill the legs slot.");
assert(ITEMS.sunkenGuardTreads.slot === "feet", "Sunken Guard Treads should fill the feet slot.");
assert(GEAR_SLOTS.some((slot) => slot.id === "weapon"), "Equipment slots need a weapon slot.");
assert(GEAR_SLOTS.some((slot) => slot.id === "secondaryWeapon"), "Equipment slots need a secondary weapon slot.");
for (const familyId of SECONDARY_RANGED_FAMILIES) {
  assert(Object.values(ITEMS).some((item) => item.weaponId && WEAPONS[item.weaponId]?.family === familyId), `Secondary weapon family ${familyId} needs a test item.`);
}
assert(CLASSES.rootbound?.ability?.id === "thornSpear", "Rootbound needs Thorn Spear.");
assert(CLASSES.frenzied?.ability?.id === "ruinPounce", "Frenzied needs Ruin Pounce.");
assert(CLASSES.hollow?.ability?.id === "ambushCut", "Hollow needs Ambush Cut.");
for (const klass of Object.values(CLASSES)) {
  assert(!klass.weaponId && !klass.weaponItemId, `${klass.id} should not decide the post-boss weapon reward.`);
  assert(klass.ability?.cooldown > 0, `${klass.id} needs a cooldown-only R ability.`);
  assert(!klass.ability?.staminaCost, `${klass.id} R ability should not spend stamina.`);
}
assert(CLASSES.frenzied.stats.attackSpeed > CLASSES.rootbound.stats.attackSpeed, "Frenzied should have the faster pressure rhythm.");
assert(CLASSES.hollow.stats.maxStamina > CLASSES.frenzied.stats.maxStamina, "Hollow should have the deepest stamina pool.");
assert(CLASSES.hollow.stats.maxHp < CLASSES.frenzied.stats.maxHp, "Hollow should be the riskier origin.");

assert(ENEMIES.rootCrawler.fluid === "rootIchor", "Root-Bent Crawlers should use root ichor.");
assert(FLUIDS.rootIchor.primary && FLUIDS.rootIchor.stain, "Root ichor needs particle and stain colors.");
assert(BOSSES.hugeRootCrawler.knifeBreakAt > 0.5, "Knife break should happen during the first boss clash.");

console.log("random geame data check passed.");
