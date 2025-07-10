::: warning Incomplete Article
This article is incomplete! So it may lack details or crucial information.

Reason: I dont wanna write all that
:::

# v3.1.0

- Added the Withered Bone Block
- Redesigned Soul Sandstone
- Added Snow Brick, Blue Nether Brick, Quartz Brick, and Soul Sandstone Walls
- Fixed and added PRB files for a handful of blocks
- Adjusted pumice minining speed to be faster
- Reverted Nether Springs to be `structure_template_feature`s instead of Jigsaw based
- Nether Springs will now properly generate (Not including terrian errors)
- Redesigned Nether Springs to be a mass of Blackstone, Basalt, Charred Rock, and more.
- Ropes will no longer suffocate the player while climbing to a rope block touching the ground
- Ropes no longer replace blocks below them when building
- All texture ids are now namespaced with `vc_` in a effort to make texture packs compatable with other addons
  - The asset destination can be changed in `terrian_texture.json` or `item_texture.json`
  ```json
  	"vc_azalea_planks": {
  		"textures": "textures/blocks/azalea_planks" // Change the destination here // [!code highlight]
  	},
  ```
- Goodlands will now spawn in badlands again
- Make it so the player can jump through custom doors, trapdoors, and fence gates like in vanilla.
- Blocks can now be placed on top of fences and stairs like normal.
- Wooden Doors can now be opened by redstone
  - Glass doors will not be affected by redstone due to this being their intended feature
- Removed `glyph_E1.png` in favor of `glyph_F2.png` for compatibility sake
- Blue Berries should spawn in plains biomes again
- Sea Pineapple SHOULD generate in deep warm oceans (they've been giving me a hard time)
- Chocolate Cake no longer uses stone sounds
- Knowladge Harvester no longer crafts 4 items
- Removed the Copper Golem in favor of the one being added in 1.21.100
- The Giant will now spawn after completing the respective ritual
- Remade the "Giant Omen" psudo-status effect
- Tumbleweed will face away from the player when spawned
- Repaired broken mob spawn rules
- Fixed the sparse not finding food
- Added `search` and `find` sounds to the sparse and respective animations
- Vanilla Upgrade's texture pack no longer requires the behavior pack to be added
  - The behavior pack still requires the texture pack however
- Vanilla Upgrade is no longer making use of Bridge to export

- Disabled Termite's natrual spawning until further notice.
  - This is due to the entire termite system, (termite mound included) being extremely unoptimized.
  - The termite will be planned to make use of `minecraft:behavior.take_block` rather than `minecraft:behavior.move_to_block`
    - When this component is released from preview, the termite system will be reworked and added back.

# v3.0.3

- Updated jigsaw structures to latest format (thus re-adding them to the game)
- Illusioner huts are now jigsaw based
- removed invisible blocks from illusioner hut
- Pack manifest now uses proper version notation

# v3.0.2

- Further fixed mob variants
- Updated the chinese translation via @TanakaLun
- Updated and fixed PRB for vibrant visuals
- Re-added gysers?
- other subtle bug fixes

# v3.0.1

- Fixed broken mob variants
- Removed some files that were suppose to be removed in the github repo

# v3.0.0 <Badge type="info" text="(In no particular order)"/>

- Rebuild the entire source code
- Completely Revamped World Generation
- Removed Lag
- Fixed Melong Golem Heads
- Cattails Now Generate in the world
- Cattails no longer crash the game
- Blocks can be placed on logs without crouching
- Reworked crafting recipies
- Optimized Fences and Compressed Copper Bars
- Spewing Chorus Now Generates in the end
- Carnivorus Chorus Generates in the end
- Re-added cotton plants
- Cotton can be used to craft leather
- Cursed Campfires now link to each other, rather than random teleportation
- Cursed campfires can now be made by cooking crystalized xp
- Doors work properly again
- Regulated Elax Biome Growth
- Added elax leaves
- Re-added elax fungus
- Elax trees can now have either leaves or fungus
- Elax syrup now has an item texture
- End stone now has varied textures
- Added endslate stairs and slabs
- Glorium Caverns no longer lag out the game
- Added green pedals
- Added lavender
- Added bubble flowers
- Added the Goodlands biome
- Reworked Lumersion biome particles
- Conjunction Rails actually work now!
- Heavily improved the rotator, blocks shouldnt disappear anymore, and it should rotate as expected now
- Soul Sandstone can be crafted
- Saloons generate now, with improved loot tables
- Added Jungle Villages!
- Nether Springs actually generate
- Termite Mounds generate more rarely and work properly now
- Junge Villages, Termite Mounds, Saloons, and Nether springs can be located with `/locate`
- Remade the water lily flower, renamed to lotus
- Redesigned and renamed the cactus flower due to the vanilla one being added. Now titles "Orchid cactus flower"
- Orchid cactus flower now prevents cactus damage
- Retextured zalu plants and blocks
- Added Chocolate Lava Cakes to complete the chocolate milk trilogy
- Aloe Plants generate now
- Blue Berry Bushes generate now
- Corn Generates now
- Advanced Hopper now uses an item texture
- Completely reworked the advanced filter (see this page)
- Retextured Blue Berries
- Optimized breezers and blazers
- Reworked Rope System
- Cattails now use an item texture
- Coconuts now use an item texture
- "Fixed" dispenser minecart
- Orchid cactus flower now uses an item texture
- Added lingering varients to all the custom potions
- Improved custom splash potions
- Improved sled animation
- Golden tomatoes now drop gold nuggets
- Added golden tomato sounds
- Updated warped wart texture
- Added cutsom textures to every mob spawn egg
- Added player clone sounds
- The button on the pause menu works now
- Reworked the title screen logo animation
- Added splash texts
- More bug fixes idr
