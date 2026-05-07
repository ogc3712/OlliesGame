# Random Guy / random geame Project Memory

## Current Goal

Build **random geame**, a browser/PWA demo for desktop and mobile.

The game was previously called Bloodroot Citadel; the current visible/app name is **random geame**.

## Current Cursed Origin Rework

- The old starter classes are replaced. Current origins are **Rootbound**, **Frenzied**, and **Hollow**.
- Classes/origins control stats, body profile, cooldown `R` ability, and skill tree only. They do **not** decide weapon access or the boss weapon reward.
- The shared post-boss starter weapon is still the Rusty Sword. Any class can equip any weapon family.
- Tutorial ability progression: the corpse journal does **not** unlock `R`. The Rusty Sword reward after the boss unlocks the origin `R`.
- Ability buttons are cooldown-only for the current demo pass. The old Chant/Frenzy/Blood character meter panel is removed from the HUD, and `R/F/T/G` do not require meter charge or stamina.
- Origin resources/meters are removed for now. Origin identity comes from cooldown attacks and visual effects.
- Current origin `R` abilities: Rootbound `Thorn Spear`, Frenzied `Ruin Pounce`, Hollow `Ambush Cut`.
- Frenzied `Ruin Pounce` is now a long-range aim-direction jump with a heavier landing crack.
- Current learned `F/T/G` unlocks:
  - Rootbound: `Briar Patch`, `Old Tree Rise`, `Wolf Spirit`.
  - Frenzied: `Claw Combo`, `Beast Uppercut`, `Beast Form`.
  - Hollow: `Blood Needle`, `Mark Cut`, `Black Maw`.
- Rootbound `Briar Patch` and `Old Tree Rise` auto-target nearby enemies before falling back to aim. `Old Tree Rise` is now a huge healing tree, not a thin spear-like pillar.
- Hollow `Black Maw` auto-targets nearby enemies before falling back to aim. Hollow leech effects use visible violet/red trails back into the player.
- Skill points are now **Memory Points** everywhere in player-facing UI.
- Level-up feedback should say `LEVEL UP` and `+1 MEMORY POINT`, with a gold ink burst, yellow particles, tiny stat floaters, XP panel pulse, and bottom prompt `TAB - memory point`.
- The skill tree page is now a simple straight 15-level memory line: one sequential path per origin, no branches, no center-node gate, no evolved reset. Each level costs 1 Memory Point and shows its level number, node name, type, branch flavor, full description, effect summary, and lock/spend state.
- Skill tree cards must not shift when clicked or focused. Rootbound uses the druid/tree background theme, Frenzied uses the fighter/volcano theme, and Hollow uses the unknown/void theme.
- Skill Tree tab gets a gold-root dot while Memory Points are unspent.
- Node types/colors: `Memory` gold, `Buff` red, `Ability` blue, `Passive` green, `Aura` violet.
- Do not use `Crest` wording. Late-line capstone nodes are simply **Final Upgrade** nodes using one of the five node types.
- New abilities from the tree bind to `F`, then `T`, then `G`.
- Cooldown orbs stay in the HUD and should not be shown inside the skill tree page. Current orb sizing is larger: `R` is prominent, and `F/T/G` are bigger circular mini-orbs on desktop and mobile.

The game is a ruined-fantasy side-scroller roguelike with:

- Modern readable pixel art.
- A silent, faceless nobody as the player character.
- Desktop manual combat.
- Mobile landscape play with movement plus hold-to-main-attack.
- Vampire Survivors-style reward pops, relic/ability ideas, and escalating combat pressure.
- Blood/ichor particles and room-persistent stains.
- A journal-based UI and inventory system.

The demo should feel like a real launchable first build, not a throwaway prototype.

Current development priority: make the first 30 seconds feel excellent before expanding content. The opening must feel grounded, readable, intentional, and atmospheric before adding classes, new areas, new enemies, or broader systems.

## Latest All-In-One Snapshot

Use this section first if the thread gets confusing or compacted.

Current build:

- Project folder: `C:\Users\Togep\OneDrive\Documents\New project`
- Main page: `bloodroot-citadel.html`
- Main game code: `bloodroot-citadel.mjs`
- Data/content: `bloodroot-citadel-data.mjs`
- Audio: `bloodroot-audio.mjs` and `bloodroot-music-notes.mjs`
- Particle recipes: `bloodroot-particle-recipes.mjs`
- Current service worker cache: `bloodroot-citadel-demo-v86`
- Local URL: `http://localhost:4173/bloodroot-citadel.html`
- Visible game name: **random geame**

Current controls:

- Desktop: `A/D` move, `Space` jump, `Q` dodge/roll, `E` interact, `Tab` open/close journal, left click basic attack, `1` primary weapon, `2` secondary weapon, `R` class ability after unlock, and learned skill-tree abilities on `F`, `T`, then `G`.
- No pause button.
- No light/heavy attacks.
- Mouse aim uses pointer lock during play, is character-relative, has a capped orbit distance, and basic attacks are limited to the front 180 degrees of facing.
- Mobile: landscape-first, touch movement, hold main attack, touch jump/roll/use/book controls, class orb and learned ability slots are tappable.

Current first-minute flow:

- A full-screen ruins-themed start/title screen appears before class selection.
- The startup title screen has a **Sandbox** option. Sandbox still routes through class selection, then starts in the post-boss testing room with infinite coins, infinite Memory Points, the selected origin ability fully unlocked, the training dummy, and a Sandbox Merchant.
- The Sandbox Merchant sells every usable weapon and gear item currently implemented, including story/test weapons, starter gear, mob drops, merchant armor, and every approved weapon family.
- Class selection appears after pressing Start. Selecting a class stays on class select and updates the chosen card instead of bouncing back to title. Title, class select, and options are full-screen startup states.
- Opening black-screen thud and circular reveal.
- Random Guy wakes in outdoor mossy sunlit ruins.
- Player must collect the corpse journal first.
- Journal pickup zooms in and shows `I remember this!`.
- Starter chest is after the journal beat and uses a journal-style camera cutscene.
- Starter chest line is `Is this mine?`.
- Starter chest spills all starter gear as floor pickups.
- Door transitions use full-screen black iris close/open.
- Huge Root Crawler arena intro shows an empty arena, zooms in, rumbles, smokes, flashes a short warning/title beat, then the boss appears from a bigger smoke burst.
- Huge Root Crawler defeat has a short victory beat: stronger shake, gold burst, extra fluid/stone/moss particles, `HUGE ROOT CRAWLER FELL`, then the `What's this?` scrap moment.
- Knife breaks during the Huge Root Crawler clash.
- The shared starter weapon drop is the Rusty Sword, regardless of class, and it should look like trash: chipped, rusty, ugly, and clearly worse than clean shop weapons.
- Picking up the Rusty Sword upgrades the selected origin ability to full power and shows `Oh, I know this is mine! Let's do this!`.

Current post-boss progression flow:

- When Huge Root Crawler dies, Random Guy says `What's this?`.
- A journal scrap spawns on the floor.
- The Swampy Door stays blocked until that scrap is read.
- Reading the scrap triggers an unseen flashback-style blackout beat.
- The scrap line is exactly `you are a [class]. REMEMBER!`, with `[class]` filled by the selected class name.
- XP unlocks only after the scrap memory.
- The player silently levels to 2 from the scrap XP with HP, damage, and stamina bonuses.
- Level-up feedback now plays an ascending scale, a gold/yellow ink burst, floating `LEVEL UP`, `+1 MEMORY POINT`, and tiny `+HP`, `+DMG`, `+STA` text.
- The top-right XP bar appears only after progression unlocks.
- After progression unlocks, enemies give XP on kill.
- The TAB journal has Inventory, Skill Tree, and Journal tabs.
- Inventory uses a parchment three-column layout: Character plus Equipped on the left, filterable Inventory slots in the center, and Stats on the right. The old Current Buffs section should stay removed.
- Journal notes are bullet-pointed and intentionally sparse: major lore/memory entries only, not every enemy drop, chest, upgrade, or system event.
- When the diary updates or a Memory Point is ready, the bottom prompt reminds the player to press `Tab`.
- The Journal tab shows a small yellow unread dot when new lore exists and the Journal tab has not been checked.
- Each origin has one straight 15-level memory line. The old branch content is flattened into a left-to-right sequence while keeping the original class flavor.
- Rootbound flavor sources: Briar, Oath, Howl.
- Frenzied flavor sources: Fang, Ruin, Hide.
- Hollow flavor sources: Vein, Grave, Echo.
- Line nodes can be buffs, new abilities, ability upgrades, passives, auras/skin effects, weapon burn chance, and final upgrades.
- New Ability nodes assign real extra abilities to `F`, then `T`, then `G`.
- Memory Points spend only on the next unlocked level in the line. Completing level 15 marks the line complete instead of resetting into an evolved branch.

Current origins:

- Rootbound: starts with Hunting Knife; boss reward unlocks cooldown-only `Thorn Spear`. Moss/amber control, roots, thorns, and spirit allies.
- Frenzied: starts with Hunting Knife; boss reward unlocks cooldown-only `Ruin Pounce`. Red/rust pressure, impact attacks, and temporary beast form.
- Hollow: starts with Hunting Knife; boss reward unlocks cooldown-only `Ambush Cut`. Violet/black risky cuts, blood marks, leech, and void attacks.
- Origin choice decides stats, size, cooldown abilities, and the class-specific memory line. It does not decide the post-boss starter weapon.
- New run / Wake Again returns to class picker so class can be repicked.

Current gear and drops:

- Starter chest includes Starter Cap, Starter Tunic, Starter Glove, Starter Pants, and Starter Charm.
- Starter Cap gives `+1 HP/s`.
- Starter Tunic gives `+4 max HP`.
- Starter Glove gives `+5 max HP`.
- Starter Pants gives `+3 max HP`.
- Starter Charm gives `+0.25 HP/s`.
- Ruins Chest before the boss drops Digger's Amulet 100 percent of the time.
- Digger's Amulet gives `+32 move speed`.
- Root-Wing Mote has a 1 in 10 chance to drop Winged Chestplate.
- Winged Chestplate gives `+6 max HP` and `+10 move speed`.
- Root-Bent Crawler has a 1 in 20 chance to drop Bug Charge.
- Bug Charge is a Modification-slot dash mod, auto-equips if empty, changes roll sprite, and makes dash deal damage.
- Root-Worm has a 1 in 3 chance to drop Dirt.
- Dirt is a Feet-slot item with `+18 move speed`.
- Gear is dragged between pack and slots. Equipped gear leaves the inventory.
- Newly picked-up items glow slightly while they are new in the inventory.
- Inventory tab is intentionally simple: Character Display, Currently Equipped, and Item Slots. Item cards show item name and category/type by default; stat text appears only after hovering/focusing the item for about a second.
- Basic coin system exists: Random Guy starts with coins, enemies and the Huge Root Crawler award coins, and coins display in the HUD.
- A Ruin Merchant now appears in the post-boss Dead-Tree Swamp Door room. The merchant UI is grouped into cleaner Buy/Sell panels, with Buy stock separated into Armor, Weapons, and Gear. It sells Knight armor, the Sunken Guard test set, basic/common weapon-family samples, and can buy sellable pack items back for coins.
- Official weapon families are: Swords, Axes, Great Weapons, Daggers, Punching Weapons, Spears, Dual Weapons, Bows, Crossbows, Wands, and Magic Scepters.
- Classes control stats, size, abilities, and skill trees only. Classes do not restrict weapon families; any class can equip any weapon family.
- Weapon equipment now has two weapon slots: **Primary** on `1` and **Secondary** on `2`. Any weapon family can be primary. Secondary is strictly ranged-only and currently accepts Bows, Crossbows, Wands, and Magic Scepters.
- Basic weapon attacks now use family-aware three-click combo chains. The combo resets if the player waits too long, changes weapon, or breaks the chain. The Knight Greatsword test chain is still: slash up, slash down, jab forward.
- Weapon family design rules: swords are balanced slash/reverse/thrust; axes are shorter heavy cleaves with a bigger third chop; great weapons cover greatswords, greataxes, and hammers with slow heavy feedback; daggers are very fast and short; punching weapons are point-blank flurries; spears are long narrow pokes; dual weapons alternate left/right into a cross-slash; bows are mobile lighter ranged shots with piercing third shots; crossbows are slower heavier bolts; wands are fast Harry Potter-style sparks; magic scepters are slower heavy magic bursts with higher stamina cost.
- Weapon burn chance upgrades now apply a short damage-over-time burn with orange sparks instead of a single instant bonus hit.
- Visible gear must stay fitted to body parts, avoid covering the eyes, and move correctly during run, attack, jump/fall, and dash.

Current enemies:

- Root-Bent Crawlers patrol, see the player, chase briefly, and then forget unless they see again. Current AI/art pass makes them mossy stone walkers with a 4-frame gait and a pressure leap-bite.
- Some crawlers are patrol-only.
- Root-Wing Motes fly, patrol, see the player, telegraph, and swoop in an arc with a 3-frame wing flap.
- Root-Worms burrow, show animated floor cracks/tremors, pop up, attack, and stay exposed for 3 seconds.
- Non-boss rooms respawn enemies after leaving/re-entering for mob farms.
- Boss rooms stay controlled by boss state.

Current style locks:

- Outdoor ancient ruins in sunlight, like an old abandoned mossy start area.
- Clean, readable modern pixel art.
- No procedural shade variation/mottling for now.
- Protagonist is human-looking, purple shirt, black pants, plain face color, tiny eye dots.
- Enemies should be creature silhouettes, not look like the player.
- Floor must clearly read as the floor, with darker underfloor tile below the walkable top.
- Full browser window, pixelated ancient HUD, old journal UI.
- Blood/ichor particles, kill bursts, directional splatter, and room-persistent stains stay important.
- Do not invent final weapons, abilities, enemies, biomes, classes, gear sets, NPCs, or learned abilities without asking.

Recent verification:

- `node bloodroot-citadel-check.mjs` passed.
- `node --check bloodroot-citadel.mjs` passed.
- `node --check bloodroot-citadel-data.mjs` passed.
- `node --check bloodroot-audio.mjs` passed.
- `node --check bloodroot-citadel-check.mjs` passed.
- `node --check service-worker.js` passed.
- Local HTTP page check returned `200`.
- Local service worker check returned `200` and cache `v69`.
- Weapon-family pass verified that the merchant covers every approved weapon family: axe, bow, crossbow, dagger, dual, great weapon, punching, scepter, spear, sword, and wand.
- Sandbox stock check verified the Sandbox Merchant dynamically covers all 29 currently usable weapon/gear items.
- New v2 player sprite sheet HTTP check returned `200`.
- In-app browser reload smoke test showed the `random geame` start screen and reported no console errors after starting a run.
- The data checker now asserts that classes do not define post-boss weapon rewards.
- Git is not available in this terminal.

## Core Style Lock

Visual mood:

- Outdoor ancient ruins in sunlight, closer to Breath of the Wild's starting-area feeling: old abandoned stone, mossy pillars, open air, readable ground.
- Empty, lonely, ominous spaces despite the sunlight.
- Dead-tree swamp/forest and castle areas later.
- No cartoon tone.
- No neon sci-fi look.
- Avoid clutter.
- Dark but clean gore.
- The game should fill the full browser window, not sit in a boxed canvas.
- HUD text and bars should be pixelated with an ancient outlined look.
- Pixel resolution should feel much higher and the world should have more visual depth than placeholder block sprites.
- The floor must clearly read as the floor: a crisp walkable top edge with darker stone/ground beneath.

Pixel art direction:

- Readable modern pixels.
- Clean silhouettes.
- Snappy animation.
- Strong hit feedback.
- Effects must stay readable on mobile.
- Do not use procedural pixel shade variation/mottling for now. Keep sprites and world pieces clean, readable, and solid-colored until a future art pass is approved.

Character style:

- All characters are faceless or nearly faceless.
- Faces use simple eye dots.
- The protagonist face should be one plain skin color.
- The protagonist is an ambiguous nobody, not a chosen hero.
- The protagonist should look human, with a purple shirt and black pants.
- The protagonist should not use dark moss/green enemy colors.
- Enemies should be creature silhouettes first, not heroic humanoids first.

Enemy behavior:

- Some enemies are patrol-only and only damage when their hitbox collides with the player.
- Most enemies patrol until they see the player.
- Once they see the player, they chase for a few seconds.
- If they lose sight, they stop chasing after that chase-memory window instead of constantly chasing forever.
- Enemies need to see the player again to refresh the chase.
- Flying starter enemies should hover/patrol, briefly telegraph, then lunge at the player rather than constantly chasing forever.
- Ground worm starter enemies should warn with floor tremors, pop up from the ground, deal eruption danger, then stay exposed and attackable for 3 seconds before burrowing again.

Combat effects:

- Readable magic bursts.
- Blood/ichor particles on hits.
- Bigger kill bursts.
- Enemy-specific fluids.
- Stains persist for the current room.

Rare drops:

- Vampire Survivors-style item pop.
- Glow around the item.
- Should feel exciting and visible.

UI:

- Old journal style.
- The journal is found on a corpse and becomes the UI.
- Journal uses three tabs: Inventory, Skill Tree, and Journal.
- Inventory takes the full journal shell and should only present three core zones: item slots, character display, and currently equipped gear.
- Journal notes should be bullet points, stay very sparse and lore-related only, with no level-up/system spam.
- Journal tab shows a small yellow unread dot until the player opens it.
- Use Press Start 2P / Google arcade pixel font for all visible UI text, including HUD labels, buttons, prompts, cards, journal pages, and damage floaters.
- Player is mostly silent; no chatty protagonist dialogue.
- Lore appears through environment and journal records.
- Current first-minute exception approved by user: short protagonist lines are allowed for specific cinematic/item beats. Current exact lines are `I remember this!`, `Is this mine?`, `This will do. Let's do this!`, and post-boss `What's this?`.

Audio direction:

- Mostly sound effects: footsteps, squeals, hits, item pops, rustle, stone movement.
- Quiet biome-based music underneath.
- Current first-pass audio uses browser WebAudio, generated in code instead of audio files, so the demo stays portable as a PWA.
- First loop approved for implementation: `Sun Through the Old Root`, a quiet retro-ish moss-ruin loop that starts when the run starts.
- Weapon attacks should not share one generic sound. Current approved weapon SFX are family-aware: Daggers use `knifeSlash`, Swords/Axes/Great Weapons/Spears use `swordSlash`, Punching Weapons use `brawlerPunch`, Bows/Crossbows use `bowRelease`, and Wands/Magic Scepters use `staffCast`.
- R abilities should read as origin-defining moments. Current R ability SFX are `rootboundThornGrab`, `frenziedGroundSlamJump`, and `hollowUnstableBlast`.

## Gameplay Lock

Desktop controls:

- `A/D` move side to side.
- `Space` jumps.
- `Q` is a low human sprint-burst dash/dodge, not a curled roll. Direction uses held A/D movement if present, otherwise current facing.
- `E` interacts.
- `Tab` opens and closes inventory/journal.
- Left mouse click uses the equipped basic weapon.
- `R` uses the unlocked class ability.
- Skill-tree New Ability nodes assign extra abilities to `F`, then `T`, then `G`.
- The character faces the mouse and shows a small aim line.
- Basic weapon aim/attacks are constrained to the front 180 degrees of the direction Random Guy is facing. A/D turns facing; mouse orbit aims within that facing half-circle.
- When A/D flips facing, the current aim mirrors horizontally and preserves vertical angle: left becomes right, up-right becomes up-left, down-left becomes down-right.
- Facing-flip mirror bug note: clamp the mirrored reticle using the new facing direction, not the old one, or it collapses to the vertical edge.
- Mouse aim is character-relative: when the mouse/reticle is a set distance from the character, walking should carry that aim offset along with the character instead of letting the character walk into a fixed screen/world cursor point.
- Desktop mouse should use pointer lock during play: clicking/Wake Up locks the OS cursor into the game, hides the browser cursor, and drives the reticle by mouse movement deltas so it cannot drift past or snap back to the screen cursor.
- Mouse reticle should act like a short orbit around the character: capped at a hard max distance, pulled toward a steady radius, and moved mostly around the player instead of freely flying away.
- There is no pause control.
- There are no light/heavy weapon attacks.
- Some future relics/learned abilities can auto-fire later, but the current skill-tree extra abilities are manual on `F`, `T`, and `G`.

Mobile controls:

- Landscape-first.
- Movement plus one main hold-to-auto-slash attack.
- Most extra abilities should auto-fire.
- Faint journal glyph controls.
- Portrait phones should show a rotate-to-landscape overlay.

Camera:

- Zooms in while exploring.
- Zooms out during swarm fights.

Inventory and gear:

- Simple Minecraft-like inventory grid.
- Gear slots in the journal.
- Visible gear pieces should affect the player look.
- Mismatched pieces are useful.
- Matching sets give slight bonuses.

Abilities:

- Most abilities, around 90%, should eventually be learned from enemies or characters.
- Current origin R abilities and first-pass origin flavor names are approved.
- Do not finalize future classes, future memory-line content beyond the current first pass, future weapons, future enemies, future biomes, or gear sets without asking first.

Superseded starter class approvals (kept only as history; do not implement these as current classes):

- Brawler: close range, ready for action. Faster attack speed, war cries, roar abilities, combo potential. Later evolution ideas: Duelist or Combatist.
- Elf: quick and small. Smaller hitbox, faster movement, ranged abilities. Later evolution ideas: Ranger or Imperial.
- Wizardish Apprentice: magic apprentice. More stamina, much slower movement, heavy stamina costs, and a wide variety of upgrade paths. Later evolution ideas: ArchMage or Underworlder.

Superseded implemented starter class pass (historical notes before the Cursed Origin rework):

- The player now sees a ruins-themed title/start screen first, then class selection before waking up.
- All classes start the tutorial with the Hunting Knife.
- The boss clash now drops the shared Rusty Sword starter weapon, not a class-specific weapon.
- Picking up the Rusty Sword unlocks the selected class ability.
- Brawler has higher HP, faster close-range rhythm, and gets `Roar` on the class ability orb / `R`.
- Elf has a visibly smaller sprite and hitbox, faster movement, and gets `Piercing Shot` on the class ability orb / `R`.
- Wizardish Apprentice has more stamina but walks much slower, spends much more stamina on ability use, and gets `Arcane Volley` on the class ability orb / `R`.
- The class ability cooldown orb sits in the top-right HUD and is also clickable/tappable for mobile; learned ability slots sit beside it after progression unlocks.
- The cooldown orb uses compact labels and class-tinted fills so text fits and the class reads clearly: `Roar`, `Pierce`, `Volley`, and locked state `Lock` / `BOSS`.
- `Wake Again` after death or demo completion returns to the class picker so the class can be repicked.
- Piercing Shot and Arcane Volley use player-owned projectile hit logic that can damage enemies, boss, and the training dummy.
- Non-knife abilities must not trigger the scripted hunting-knife break.
- The class picker intentionally has no character sprite/portrait because it caused overlap; it uses clean text-only cards with short class tags and the post-boss weapon/ability reveal.
- The journal preview now reflects class silhouette, visible cap/glove gear, and the currently equipped weapon.
- First-pass class trees are implemented as one forced memory/ability node followed by three colored branch paths.
- Brawler: Combo / War Cry / Iron.
- Elf: Ranger / Imperial / Wildstep.
- Wizardish Apprentice: ArchMage / Underworld / Cinder.
- Branch nodes included attacks in the old wording; current tree wording groups those combat upgrades under **Buff** nodes.
- The player could buy across all three old starter paths. This older tree behavior is superseded by current Final Upgrade wording.
- Current implemented extra ability unlocks are Brawler `Second Shout` and `Shoulder Check`, Elf `Marked Shot` and `Blink Feint`, and Wizardish Apprentice `Cinder Pulse`.
- The tree is styled as an ARC Raiders-inspired connected map with circular nodes and colored paths.

## Approved Starting Content

Approved biome:

- Moss-covered ruins.

Approved first enemy:

- Root-Bent Crawler.
- Root-Wing Mote: flying starter enemy that hovers, sees the player, then lunges.
- Root-Worm: simple burrowing starter enemy that attacks from the ground, pops up, and stays hittable for 3 seconds.
- Mob-farm rule: non-boss rooms respawn their enemies after the player leaves and later returns. Boss rooms stay cleared/controlled by boss state.

Approved tutorial boss:

- Huge Root Crawler.

Approved story/UI item:

- Corpse Journal.

Approved tutorial weapon:

- Small hunting knife.
- It is powerful enough for the tutorial.
- It breaks during a scripted Huge Root Crawler boss clash.

Approved post-boss starter reward:

- The boss clash drops the Rusty Sword as the shared starter weapon.
- Class choice does not decide the weapon reward.
- Class choice decides stats, size, the R ability, and the class-specific skill tree.

Approved test gear:

- Starter Cap: starter head gear for testing visible head-slot equipment. Current starter buff: `+1 HP/s`.
- Starter Tunic: starter body gear for testing the body-slot equipment. Current starter buff: `+4 max HP`.
- Starter Glove: starter hands gear for testing visible hand-slot equipment. Current starter buff: `+5 max HP`.
- Starter Pants: starter leg gear for testing the legs-slot equipment. Current starter buff: `+3 max HP`.
- Starter Charm: starter trinket for testing the trinket slot. Current starter buff: `+0.25 HP/s`.
- Digger's Amulet: common trinket from the pre-boss Ruins Chest. Current buff: `+32 move speed`.
- Winged Chestplate: rare body drop from Root-Wing Motes, 1 in 10 chance, current buff: `+6 max HP` and `+10 move speed`.
- Bug Charge: rare dash modification from Root-Bent Crawlers, 1 in 20 chance. It auto-equips into the new Modification slot if empty and changes the roll sprite into a bug-charge roll that deals dash damage.
- Dirt: foot item from Root-Worms/diggers, 1 in 3 drop chance, current buff: `+18 move speed`.
- Knight Helm, Knight Chestplate, Knight Gauntlets, Knight Greaves, and Knight Boots are approved merchant test armor pieces.
- Sunken Guard Mask, Sunken Guard Mail, Sunken Guard Bracers, Sunken Guard Greaves, and Sunken Guard Treads are approved shop-test armor pieces. This is a lighter/faster merchant test set, not a final gear set.
- Approved basic merchant weapon-family tests are Brawler Wraps, Training Bow, Apprentice Scepter, Ruin Dagger, Ruin Axe, Twin Ruin Blades, Knight Sword, Knight Greatsword, Iron Spear, Stone Hammer, Hand Crossbow, Spark Wand, Sunken Saber, Sunken Pike, Sunken Arbalest, and Sunken Fang.
- Every basic weapon has a three-click combo profile. Weapon combos are chosen by family with item-specific overrides where needed. The greatsword profile follows the user guideline exactly: slash up, slash down, jab forward.
- Basic coins are approved for merchant buying. Current implementation starts the player with coins, gives coins from enemy kills and the Huge Root Crawler, and shows coins in the HUD.
- Starter test gear should come from a sparkling starter chest in Waking Stones, splatter onto the floor nearby when the chest opens, then be picked up and dragged between inventory and equipment slots in the journal. Equipped items should not remain duplicated in inventory.
- Mosswrap Glove was removed because it is not starter-approved content.

Approved test object:

- Training dummy moved to the post-boss Dead-Tree Swamp Door room so testing happens beside the merchant after the boss.
- It has infinite HP and displays rolling DPS.
- It is for feel-testing attacks only, not an enemy or lore creature.

Approved opening flow:

1. The player wakes in moss-covered ruins.
2. The player finds the corpse journal.
3. The player learns movement, jumping, dodge, and knife attacks.
4. The player fights Root-Bent Crawlers.
5. The player encounters the Huge Root Crawler.
6. The hunting knife breaks in a scripted boss clash.
7. The player picks up the Rusty Sword and unlocks the selected class ability.
8. The player continues into the first branching ruin path.

## Implemented Files

Current project folder:

`C:\Users\Togep\OneDrive\Documents\New project`

Implemented Bloodroot files:

- `bloodroot-citadel.html` - PWA/browser shell, HUD, journal styling, touch controls.
- `bloodroot-citadel.mjs` - Main game logic and rendering.
- `bloodroot-citadel-data.mjs` - Approved content data, rooms, items, weapons, enemies, boss, fluids.
- `bloodroot-audio.mjs` - WebAudio music/SFX helper with unlock-safe browser audio and generated SFX.
- `bloodroot-music-notes.mjs` - Loopable retro-ish moss-ruin song data and audio-event conversion.
- `bloodroot-particle-recipes.mjs` - Particle recipe constants for ambient motes, moss dust, stone chips, class accents, and knife-break bursts.
- `bloodroot-citadel-check.mjs` - Data integrity checks.
- `manifest.webmanifest` - PWA metadata.
- `service-worker.js` - Offline shell cache.
- `bloodroot-icon.svg` - PWA icon.
- `dev-server.mjs` - Local static server.
- `run-bloodroot.cmd` - Windows launcher.

Draft sprite assets:

- `assets/sprites/random-guy-sprite-v1-sheet.png` - first transparent test sheet for the protagonist sprite.
- `assets/sprites/random-guy-sprite-v1-preview.png` - enlarged preview for visual feedback.
- `assets/sprites/random-guy-sprite-v2-sheet.png` - second transparent test sheet; shirt stripe highlights removed, face shadow removed, run legs tightened.
- `assets/sprites/random-guy-sprite-v2-preview.png` - enlarged v2 preview for visual feedback.
- `assets/sprites/random-guy-sprite-game-v1-sheet.png` - earlier body-only game sprite sheet; kept for comparison.
- `assets/sprites/random-guy-sprite-game-v2-sheet.png` - current body-only game sprite sheet loaded by the renderer. It keeps the approved idle/run/attack frames and adds a new jump frame plus a more visible dash frame with a short pixel trail.
- The body-only sprite sheet is right-facing, and the renderer mirrors it horizontally when the player faces left.
- `assets/sprites/random-guy-sprite-game-v1-preview.png` - enlarged preview of the earlier body-only game sheet.
- `assets/sprites/random-guy-sprite-game-v2-preview.png` - enlarged preview of the current body-only game sheet.

Draft tile assets:

- `assets/tiles/mossy-ruin-ground-v1-tile.png` - first standalone mossy ruin ground tile draft.
- `assets/tiles/mossy-ruin-ground-v1-preview.png` - enlarged repeated preview for ground feedback.
- `assets/tiles/mossy-ruin-ground-v2-tile.png` - clean mossy ruin ground tile with the random brown root lines removed; now loaded by the renderer.
- `assets/tiles/mossy-ruin-ground-v2-preview.png` - enlarged repeated v2 preview.
- `assets/tiles/mossy-ruin-underfloor-v1-tile.png` - no-grass underside tile for the rows below the walkable floor.

## Implemented Demo Features

Already implemented:

- Main menu.
- Ruins-themed title/start screen before class selection.
- Startup/title screen and options screen render before the game world appears; HUD/touch controls stay hidden until the run starts.
- Options screen currently exposes screen shake and opening hints, and explains front-180 attack arc plus pointer-lock orbit aim.
- Opening first-30-seconds polish pass: black-screen thud, circular reveal onto the player lying on the floor, first-step dust, closer opening camera, in-world A/D guide, and subtle journal pull toward the corpse.
- Cinematic black/iris overlays must cover the entire browser screen, including any canvas letterbox/overscan area.
- The journal is now a required first beat before the starter chest. Picking it up briefly zooms toward the corpse journal, shows `I remember this!`, then opens the journal UI.
- Full-window canvas rendering.
- Renderer now loads the approved body-only protagonist sprite sheet and clean mossy ruin ground tile PNGs, with procedural fallback if assets are unavailable.
- Higher backing canvas resolution using device pixel ratio scaling.
- Moss-covered ruin rooms.
- Corpse journal pickup.
- Full-screen stable Journal UI with Inventory, Skill Tree, and Journal tabs.
- Journal lore tab uses bullet-pointed simple lore/item-memory notes and shows a yellow unread dot when new notes have not been checked.
- Starter Cap, Starter Tunic, Starter Glove, Starter Pants, and Starter Charm inventory/equipment test items.
- Starter chest now includes one starter piece for every non-weapon gear slot. When opened, all five items bounce/spill onto nearby floor stones as pickups.
- Opening the starter chest now uses a journal-style locked camera focus cutscene, shows the player line `Is this mine?`, then opens and spills the gear.
- A separate Ruins Chest sits near the boss gate in Root Nest and drops Digger's Amulet 100% of the time.
- Huge Root Crawler now has a short intro: empty arena zoom, smoke/dust explosion, boss sound, then boss spawn/control unlock.
- Entering any door now uses a locked black iris transition that closes on the exit, swaps rooms while fully black, then opens on the player.
- Starter buffs: Cap `+1 HP/s`, Tunic `+4 max HP`, Glove `+5 max HP`, Pants `+3 max HP`, Charm `+0.25 HP/s`.
- Training dummy with infinite HP and rolling DPS display now lives in the post-boss Dead-Tree Swamp Door room beside the Ruin Merchant.
- Gear can be dragged from inventory into equipment slots and dragged/clicked back out to inventory. Equipped gear is removed from the pack, and swapped-out gear returns to the pack.
- Newly picked-up inventory items glow slightly until they are equipped/handled.
- Journal gear slots now include Feet and Modification in addition to the starter armor, trinket, and weapon slots.
- Journal item cards show category text such as `Headgear`, `Glove`, `Knife`, and `Sword`.
- Journal includes a small preview sprite showing the current equipped cap/body/glove/legs/charm look.
- Equipped cap/gloves render visibly on the player sprite with item-specific colors.
- Equipped armor/gear should be attached to the character pose: it follows run bob, attack lean, and dash/roll states, and helmets must stay high enough to avoid covering the eye dots.
- Dash/roll now carries visible equipped gear with the character, including Bug Charge's modified roll sprite.
- Armor overlays should stay fitted and segmented, not broad slab rectangles. Body armor should read as small plates/straps over the purple shirt, leg armor as separate shin/knee pieces, and dash gear as compact attached accents. Current pass narrows body, leg, foot, and dash armor overlays so they hug the sprite better.
- Sprite-sheet run gear should follow the same two-frame run timing as the sprite sheet. Jump/fall now use the new v2 sheet jump frame instead of the old procedural airborne sprite.
- Player arms move with the weapon swing as separate arm/glove rendering, so future armor can change arms without being part of the weapon sprite.
- Weapon grip rule: the weapon origin should sit at the end/center of the front hand, with handle pixels behind the hand and the blade extending forward.
- Hunting knife.
- Broken knife.
- Rusty Sword shared starter weapon pickup and equip after the knife breaks.
- Picking up the Rusty Sword after the boss clash now runs a short locked camera beat with spark/item pop, the line `This will do. Let's do this!`, and the selected class ability unlock.
- Root-Bent Crawlers.
- Root-Bent Crawler patrol, vision, and chase-memory AI.
- Root-Bent Crawlers have a 1 in 20 chance to drop/unlock Bug Charge.
- Root-Wing Motes in early combat rooms, using flying patrol, chase-memory sight, and a telegraphed lunge attack.
- Root-Wing Motes have a 1 in 10 chance to drop Winged Chestplate.
- Root-Worms in early combat rooms, using underground tremor warning, eruption hit, and a 3-second exposed attack window.
- Root-Worms/diggers have a 1 in 3 chance to drop Dirt, a Feet-slot speed item.
- Huge Root Crawler boss.
- Scripted knife break when boss health drops below the break threshold.
- Blood/player blood, root ichor, and old blood fluid definitions.
- Hit particles, directional blood/ichor splatter, kill bursts, and persistent room stains.
- Subtle capped ambient sun/moss motes draw behind the action.
- Moss dust and stone chips now reinforce jump, land, dodge, chest, hit, kill, boss, class ability, and knife-break moments without flooding the screen.
- The scripted hunting-knife break has a dedicated shard/spark/dust burst.
- Particle budget is capped lower on coarse/mobile pointers to keep the screen readable.
- WebAudio SFX are now hooked to real gameplay events: start/options gestures, attacks, hits, kills, jump, land, dodge, chest open, pickup, journal/interaction, blocked exits, class abilities, boss intro, knife break, player hurt, and death.
- Boss fights have a separate procedural music loop: `Huge Root Heartbeat`, an urgent retro root-thump track that starts with the boss intro/fight and returns to the ruins loop after victory.
- Current audio mix after the weapon/ability pass: music is the louder default bed (`musicVolume: 0.42`) and global SFX are slightly quieter (`sfxVolume: 0.38`), while individual weapon SFX are shaped to stay satisfying.
- Weapon release SFX are routed by equipped weapon; the currently active first-minute path uses knife slash, broken-knife slash, and sword/heavier slash.
- Origin R ability SFX are routed by ability id: Rootbound Thorn Spear, Frenzied Ruin Pounce, and Hollow Ambush Cut.
- R ability visuals are more obvious: ability orb flash lasts longer, the cast burst shows the origin ability label instead of just `R`, and origin-specific particles remain capped for mobile readability.
- Frenzied F/G distinction: `F` is fast golden claw pressure, while `G` is heavier red Beast Form with larger swipes, dust/chips, and stronger finisher feedback. `T` Beast Uppercut has a visible vertical uppercut slash, impact roar, particles, dust, and shake.
- Ability attack visuals should render mostly solid now; slash/projectile/hazard/roar effects use higher opacity and less ghosted transparency.
- Rootbound/Hollow targeting polish: Briar Patch, Old Tree Rise, and Black Maw use auto-targeting against nearby enemies. The great tree heals the player on eruption and draws as a huge old tree with a wide trunk/canopy. Hollow lifesteal now has visible violet-red trails from enemies/void effects back into the player.
- Level-ups now play an ascending scale, throw a small yellow particle burst, and float the gained `+HP`, `+DMG`, `+STA`, and `+PT` values over the player.
- The TAB journal skill tree is now a straight 15-level ancient pixel memory line per class. It removed branch decisions and puts full node information directly inside each level card.
- Skill nodes can give buffs, real extra abilities, class-specific passives, ability power/cooldown upgrades, attack speed, weapon burn chance, auras/skin effects, and final upgrade nodes.
- Learned skill-tree abilities are manual buttons/keys assigned in unlock order to `F`, `T`, then `G`. The `R/F/T/G` cooldown buttons should all render as same-size top-right orbs; the room/journal panel sits in the top-right corner above them.
- Current UI polish: the straight 15-level skill line fits on one journal screen as a 5-by-3 grid without horizontal scrolling, inventory sorting is removed, inventory filters stay square, the shop uses cleaner parchment buy/sell panels, and sword slash trails are intentionally slightly transparent.
- Combat animation rule: if Random Guy attacks while moving on the ground, his legs keep running instead of locking into a still attack pose.
- The starter tree now spends Memory Points sequentially from level 1 through level 15.
- The quiet loopable music bed starts on run start, respects Music/SFX options, and stops when returning to the main menu or dying.
- Options now include Music and SFX toggles alongside screen shake and opening hints.
- Camera/world-edge polish: camera bounds now clamp after zoom interpolation, short/future rooms are centered safely, and sky/ground/background art draws with oversized horizontal and vertical padding so zoom-out and shake do not expose the edge of the authored world.
- Movement/combat polish: jump has a tiny input buffer, dodge prefers the current A/D or touch movement direction, attack SFX now land on the swing release, training dummy hit sounds are lightly throttled, and dummy DPS responds faster.
- Particle polish: moss dust uses a midground layer behind actors, ambient motes avoid per-frame allocation and can spawn into the padded world area, combat particles trim ambient motes first when capped, and boss death bursts scale down on coarse/mobile pointers.
- Menu/options/mobile CSS received a compact polish pass for cleaner wrapping, button focus/press states, and clearer touch-control outlines/spacing.
- Desktop keyboard controls.
- Mouse-facing aim line.
- Pointer-locked desktop mouse aim during play, with the cursor released for journal/end-card UI.
- Orbital mouse reticle physics: aim offset stays near a steady radius around the character and has a hard cap.
- Front-half attack constraint: basic weapons can only aim and attack within the 180-degree arc in the direction the character is facing.
- Facing flip mirror behavior for aiming: changing direction with A/D keeps the current vertical aim shape instead of flattening it.
- Smoothed camera lead near room edges so tapping A/D near the side does not repeatedly bounce the screen.
- Left-click basic weapon attack.
- Buffered left-click attacks so rapid clicks are not eaten during cooldown/recovery.
- Stronger weapon swing feedback: wider visual slash arcs, swing sparks, impact sparks, hit pause, and camera nudge on hits.
- Origin-specific ability polish currently uses cooldown-only `R/F/T/G` buttons. The separate origin meter panel is removed; any future origin resource needs explicit approval before returning.
- Procedural pixel shade variation/mottling was removed at user request; current sprites and world pieces should render with clean solid-color blocks.
- Clearer in-world interaction markers for corpse journal, pickups, and exits.
- Larger bottom interaction prompts with distinct corpse/pickup/exit/blocked styling.
- Player foot rendering aligned to the physics floor line instead of sinking below it.
- Player has distinct animation states: idle, run, jump, fall, land, roll, hurt, and attack.
- Player silhouette now changes by origin: Rootbound reads steady/moss-touched, Frenzied reads heavier/rust-red, and Hollow reads thinner/violet-black while keeping the purple shirt and black pants identity.
- Weapon attacks swing through an arc; the sword/knife should not just stick straight out.
- Mobile touch controls.
- Landscape rotate overlay.
- Camera zoom behavior for exploration vs fighting.
- Demo-complete screen at the first Swampy Door / dead-tree swamp threshold.
- PWA manifest and service worker.

## How To Run

From Windows Terminal in the project folder:

```bat
run-bloodroot.cmd
```

Or:

```bat
node dev-server.mjs
```

Then open:

```text
http://localhost:4173/bloodroot-citadel.html
```

For phone testing on the same Wi-Fi, use the computer's local network IP with port `4173`.

Example from the last run:

```text
http://192.168.4.73:4173/bloodroot-citadel.html
```

The IP may change.

## Verification Commands

Run these from the project folder:

```bat
node bloodroot-citadel-check.mjs
node --check bloodroot-citadel.mjs
node --check bloodroot-citadel-data.mjs
node --check bloodroot-audio.mjs
node --check dev-server.mjs
node --check service-worker.js
```

Last known result:

- Data check passed.
- Syntax checks passed.
- Local HTTP checks returned `200` for the page and service worker.
- Dynamic module import check passed for the new helper modules; Node reports no browser AudioContext support, which is expected outside the browser.
- Service worker cache is currently `bloodroot-citadel-demo-v86`.
- Playwright was not installed in earlier checks, so use HTTP checks or the in-app browser for quick local verification.

## Future Content Rule

Before adding new content, ask the user by category.

Do not invent final versions of:

- Future weapons.
- Future abilities.
- Future enemies.
- Future biomes.
- Future class memory-line content beyond the current starter pass.
- Gear sets.
- Learned enemy abilities.
- NPCs or teachers.

Approved content can be implemented directly.

## Next Good Prompts / Work Items

Likely next steps:

- Browser-test the new sound/particle pass in the in-app browser and tune volumes/burst counts by feel.
- Polish feel of `A/D`, `Space`, `Q`, `E`, `Tab`, mouse aim, and left-click weapon attacks.
- Tune Root-Bent Crawler behavior.
- Tune Huge Root Crawler boss patterns.
- Tune doubled blood/ichor particles, directional splatter, and stain placement by feel.
- Tune the shared Rusty Sword reward and class ability unlock beat.
- Keep polishing visible gear fit and animation attachment as new armor is added.
- Tune the first implemented learned skill-tree abilities on `F`, `T`, and `G`.
- Add first approved rare drop.
- The post-boss branch now presents as a Swampy Door leading toward the approved dead-tree swamp direction; the internal room id is still `splitArch` for transition stability.
- The walkable top uses `assets/tiles/mossy-ruin-ground-v2-tile.png`; lower stacked rows use `assets/tiles/mossy-ruin-underfloor-v1-tile.png`, a no-grass underside tile, so zoom-outs show stone under the floor instead of repeated grass or exposed void.
- Post-boss progression is implemented: boss death spawns a journal scrap, the scrap triggers an unseen flashback beat, XP unlocks only after that, the player silently levels to 2 with HP/damage/stamina bonuses, a scale SFX, yellow particles, stat floaters, and the top-right XP bar.
- The TAB journal has stable full-screen Inventory / Skill Tree / Journal tabs. The tree is now a straight 15-level memory line instead of branching paths.
- Merchant and training dummy are now both in the post-boss Dead-Tree Swamp Door room. The merchant can buy sellable inventory items back for coins; story items stay unsellable.
- Merchant UI was cleaned up again: full-screen shop stays, but stock is now grouped into Armor / Weapons / Gear, item rows are more compact, and Sell remains a separate scan-friendly panel.
- Startup/title flow is now a full-screen ruins screen; class select and options are also full-screen startup states. Class picking stays on the class screen when changing selection and Wake Up guards against double-start clicks.
- Boss intro was made more climactic with staged rumble, warning smoke, title text, and a larger spawn burst.
- Rusty Sword starter weapon art now looks rougher and trashier than shop swords.
- Burn chance upgrades now apply a short damage-over-time burn instead of one instant bonus hit.
- Inventory was rebuilt as a simple three-zone board: Character Display, Currently Equipped, and Item Slots. No extra tutorial paragraph or clutter belongs on that tab.
- Every current item now has a custom 32x32 pixel-style UI icon through `ITEM_ICON_SPECS`; inventory, equipped slots, merchant buy/sell rows, and item cards all share the same icon renderer. Future items must get a unique icon before they are considered complete.
- Current sprite sheet is `assets/sprites/random-guy-sprite-game-v2-sheet.png`, generated locally from the approved v1 body sheet with added jump and dash frames.
- The live player renderer now ignores the old baked player sheet and draws the body procedurally so weapons stay separate. Target look: brown swept hair, plain tan face with black eye dots, purple shirt/hoodie, dark pants/boots, mirrored by facing direction.
- Current sprite polish pass: legs must stay visibly connected in every pose, left-facing frames should mirror the right-facing silhouette, the purple shirt should stay plain without unnecessary detail lines, and dash should read as a human forward sprint/slide instead of a curled block.
- Class body color blocks under the arms should stay removed. Class identity should come from effects and later approved transformations, not random side slabs on the purple shirt.
- Armor should sit on top of that body like fitted gear, not a block: headgear stays above the eyes, chest armor adds shoulder/chest plates, gloves color the hands/arms, and dash/roll keeps gear attached.
- Rootbound learned abilities need visible memory summons: Thorn Split shows a thorn spirit, Wolf Oath shows a lunging wolf memory, and Stag Call shows a charging stag memory.
- Weapon-family attacks should feel visually different, not like one reused swing: daggers are short/fast, spears thrust narrow/long, great weapons wind up heavy, axes chop thick, punching lunges point-blank, dual weapons cross on finisher, bows/crossbows/magic use distinct draw/cast poses.
- Latest weapon pass adds family-specific swing trails, arm/weapon poses, hitbox emphasis, projectile cues, and impact particles so attacks do not read as recolored versions of the same move.
- Startup screen direction: pixelated sunny old-ruins title scene, with sky, clouds, ruin blocks, doors, crawlers, stone floor, and the title-area text `Old Ruins`.
- Class screen direction: simpler pixel ruin wall around parchment cards, `random geame` header, and three clean origin cards. Keep this screen decluttered: no extra portraits, side-wall noise, metadata blocks, or dense explanatory panels unless the user asks for them back.
- Main game ruin direction: sunlit mossy stone pillars, blocky clouds, distant green mountains, and readable stone platforms. Avoid random dangling moss/vine clutter in the playable view.
- Latest background pass adds more distant and midground ruin silhouettes, broken pillars, arches, and stone scatter while keeping the playable view readable and avoiding hanging-moss clutter.
- Opening wake beat now uses a dedicated lying-on-ruin-floor player sprite and shows the text `I woke up on the ruin floor`.
- Browser-test the new weapon-specific SFX and R ability polish, then tune any sounds that feel too sharp, too quiet, or too similar.
- Test on actual phone browser.

## Collaboration Notes

- User gave permission to deploy agents whenever useful.
- OpenClaw should be ignored for now because it was linked to the wrong account.
- The current model/session can have up to 6 agents at a time; close/dismiss completed agents before starting new ones.
- Use Codex agents as needed for audits, alternate fixes, art/game-feel critiques, and implementation risk checks.
- Use `Random_Guy.md` regularly as the living project memory. Update it when controls, art direction, gameplay rules, approved content, implementation gotchas, or workflow preferences change.
- Still use judgment: simple work can be done directly; use agents and local tools when they materially help.

## Pending User Approval

- Current starter skill trees have a first-pass straight-line implementation, but future deeper node content and permanent balancing still need approval before expansion.
