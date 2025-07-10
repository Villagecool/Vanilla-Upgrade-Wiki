# Decoration Blocks

## Blue Nether Bricks

<div class="info-box">
<div class="radioswitcher-inputs">
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedBNB" value="1">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/blue_nether_bricks.png" width="25" height="25"></div>Block</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedBNB" value="2">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/blue_nether_brick_stairs.png" width="25" height="25"></div>Stairs</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedBNB" value="3">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/blue_nether_brick_slab.png" width="25" height="25"></div>Slab</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedBNB" value="4">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/blue_nether_brick_wall.png" width="25" height="25"></div>Wall</span>
  </label>
</div>

<!-- Transition Wrapper for Collapsible Info Box -->
<transition name="slide">
  <div class="info-box" v-html="compblueNetherBrick"></div>
</transition>

**Blue Nether Bricks** are a blue variant of [Nether Bricks](https://minecraft.wiki/w/Nether_Bricks) that originate from [Warped Warts](/items/crops.html#warped-wart)
- They are essentially the same as [Red Nether Bricks](https://minecraft.wiki/w/Red_Nether_Bricks)

</div>

## Carved Bricks

![img](../ass-sets/blocks/bricks_carved.png)
`vc:bricks_carved`
| Component | Value |
|---|---|
|Breaking time (secs)|1.1|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|No|

### About:
Carved Bricks are a simple decoration block with a carving of a fox on its face.
### Crafting
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Carved Bricks</span> <img src="../ass-sets/blocks/carvedbricks.png"/> </div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Brick Slab</span> <img src="https://minecraft.wiki/images/thumb/Brick_Slab_JE3_BE2.png/150px-Brick_Slab_JE3_BE2.png"/> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Brick Slab</span> <img src="https://minecraft.wiki/images/thumb/Brick_Slab_JE3_BE2.png/150px-Brick_Slab_JE3_BE2.png"/> </div>
  </div>
</div>

## Carved Mellon

![img](../ass-sets/blocks/carved_mellon.png)
`vc:carved_mellon`
| Component | Value |
|---|---|
|Breaking time (secs)|3|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|No|
|Placement Style|Directional|

### About:
Carved Melons come form Minecraft earth, they are worn by Melon Golems

Placing a Carved Melon on two snow blocks will spawn a melon golem
<img src="../ass-sets/mobs/melon_golem.png" height="64" width="64">

- they are created by shearing <img class="inline-img" src="https://minecraft.wiki/images/Invicon_Shears.png?b943a"> a Melon Block <img src="https://minecraft.wiki/images/Invicon_Melon.png?2fc17" class="inline-img">
- Their id is misspelled as "mellon" due to vlliage not knowing how to spell

## Speckled Carved Mellon

![img](../ass-sets/blocks/carved_mellon_speckled.png)
`vc:carved_mellon_speckled`
| Component | Value |
|---|---|
|Breaking time (secs)|3|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|No|
|Placement Style|Directional|

### About:
Speckled Carved Melons are a variant of the Carved Melon they are worn by Melon Golems

Placing a Speckled Carved Melon on two snow blocks will spawn a snow golem with a Speckled Carved Melon
<img src="../ass-sets/mobs/speckled_melon_golem.png" height="64" width="64">
- they are created by shearing <img class="inline-img" src="https://minecraft.wiki/images/Invicon_Shears.png?b943a"> a Speckled Melon Block <img src="../ass-sets/blocks/melon_speckled.png" class="inline-img">
- Their id is misspelled as "mellon" due to vlliage not knowing how to spell

## Charred Rock

![img](../ass-sets/blocks/charred_rock.png)
`vc:charred_rock`
| Component | Value |
|---|---|
|Breaking time (secs)|20|
|Luminous|No|
|Blast resistance|9|
|Flammable|No|
|Conducts Redstone|No|

### About:
*Charred Rocks* are the structure of [Nether Springs](/features.html#nether-springs) found in lava lakes.
- They typically do not spawn anywhere else in the nether
- <img src="../ass-sets/blocks/aloe_plant.png" class="inline-img"> [Aloe Plants](/items/crops.html#aloe-plant) can grow on these
- They are extremely brittle, hence not being able to be crafted with

## Dirt

<div class="info-box">
<div class="radioswitcher-inputs">
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedDIRT" value="1">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/dirt_stairs.png" width="25" height="25"></div>Stairs</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedDIRT" value="2">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/dirt_slab.png" width="25" height="25"></div>Slab</span>
  </label>
</div>

<!-- Transition Wrapper for Collapsible Info Box -->
<transition name="slide">
  <div class="info-box" v-html="compDirt"></div>
</transition>

**Dirt Slabs** and **Stairs** are simply [Dirt](https://minecraft.wiki/w/Dirt) blocks in stair and slab form
- They have almost the exact same stats of normal dirt block

</div>

## Endslate Bricks

<div class="kinda-fancy-menu" width="fit-content"> 
<div class="img"><img src="../ass-sets/blocks/endslate_bricks.png"><code data-v-4a89f8d7="">vc:endslate_bricks</code></div>
<div class="img"><img src="../ass-sets/blocks/endslate_bricks_cracked.png"><code data-v-4a89f8d7="">vc:endslate_bricks_cracked</code></div>
</div>

| Component | Value |
|---|---|
|Breaking time (secs)|20|
|Luminous|No|
|Blast resistance|9|
|Flammable|No|
|Conducts Redstone|No|

### About:
**Endlate bricks** are <img src="../ass-sets/blocks/endslate.png" class="inline-img"> [Endslate](/blocks/misc.html#endslate) based brick blocks
- Unlike their [End Stone](https://minecraft.wiki/w/End_Stone_Bricks) counterpart, they come with a cracked variant
  - To compensate, [End stone was also given a cracked variant](/blocks/deco.html#end-bricks-cracked)
  
### Crafting
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Endslate Bricks</span> <img src="../ass-sets/blocks/endslate_bricks.png"/> </div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"><span class="c-tooltip-text">Endslate</span> <img src="../ass-sets/blocks/endslate.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Endslate</span> <img src="../ass-sets/blocks/endslate.png"/></div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Endslate</span> <img src="../ass-sets/blocks/endslate.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Endslate</span> <img src="../ass-sets/blocks/endslate.png"/></div>
  </div>
</div>
<div class="smelting-background">
    <div class="smelting-item-result"> <span class="c-tooltip-text">Cracked Endslate Bricks</span> <img src="../ass-sets/blocks/endslate_bricks_cracked.png"/> </div>
    <div class="smelting-item-input"> <span class="c-tooltip-text">Endslate Bricks</span> <img src="../ass-sets/blocks/endslate_bricks.png"/> </div>
    <div class="smelting-item-fuel"> <span class="c-tooltip-text">Any Fuel</span> <img src="https://minecraft.wiki/images/Coal_JE4_BE3.png"/> </div>
</div>

## End Bricks Cracked

![img](../ass-sets/blocks/end_bricks_cracked.png)
`vc:end_bricks_cracked`
| Component | Value |
|---|---|
|Breaking time (secs)|15|
|Luminous|No|
|Blast resistance|9|
|Flammable|No|
|Conducts Redstone|No|

### About:
Because [End Stone Bricks](https://minecraft.wiki/w/End_Stone_Bricks) didnt have a cracked variant in the Vanilla Game, they were given one.
- They have the exact same stats as their vanilla counterpart

### Smelting
<div class="smelting-background">
    <div class="smelting-item-result"> <span class="c-tooltip-text">Cracked End Stone Bricks</span> <img src="../ass-sets/blocks/end_bricks_cracked.png"/> </div>
    <div class="smelting-item-input"> <span class="c-tooltip-text">End Stone Bricks</span> <img src="https://minecraft.wiki/images/End_Stone_Bricks_JE2_BE2.png?2d8bb"/> </div>
    <div class="smelting-item-fuel"> <span class="c-tooltip-text">Any Fuel</span> <img src="https://minecraft.wiki/images/Coal_JE4_BE3.png"/> </div>
</div>

## Glass Door

![img](../ass-sets/blocks/glass_door.png)
`vc:glass_door`
| Component | Value |
|---|---|
|Breaking time (secs)|0.45|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|Yes (5)|
|Conducts Redstone|No|
|Placement Style|Directional|

### About:
**Glass Doors** are a [Glass](https://minecraft.wiki/w/Glass) based door
- Glass doors cannot be opened by redstone
  - This was a intnetional feature. However, due to lag, all Vanilla Upgrade doors do not work with redstone.
    - This was changed as of v3.1.0
  
### Crafting:
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Glass Door</span> <img src="../ass-sets/blocks/glass_door.png"/></div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"><span class="c-tooltip-text">Glass</span> <img src="https://minecraft.wiki/images/Glass_JE4_BE2.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Glass</span> <img src="https://minecraft.wiki/images/Glass_JE4_BE2.png"/></div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Glass</span> <img src="https://minecraft.wiki/images/Glass_JE4_BE2.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Glass</span> <img src="https://minecraft.wiki/images/Glass_JE4_BE2.png"/></div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Glass</span> <img src="https://minecraft.wiki/images/Glass_JE4_BE2.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Glass</span> <img src="https://minecraft.wiki/images/Glass_JE4_BE2.png"/></div>
  </div>
</div>

## Glass Trapdoor

![img](../ass-sets/blocks/glass_trapdoor.png)
`vc:glass_trapdoor`
| Component | Value |
|---|---|
|Breaking time (secs)|3|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|Yes (5)|
|Conducts Redstone|No|
|Placement Style|Directional|

### About:
**Glass Trapdoors** are a [Glass](https://minecraft.wiki/w/Glass) based trapdoor
- Glass Trapdoors cannot be opened by redstone
  - This was a intnetional feature. However, due to lag, all Vanilla Upgrade trapdoors do not work with redstone.
  
### Crafting:
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Glass Trapdoor</span> <img src="../ass-sets/blocks/glass_trapdoor.png"/></div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"><span class="c-tooltip-text">Glass</span> <img src="https://minecraft.wiki/images/Glass_JE4_BE2.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Glass</span> <img src="https://minecraft.wiki/images/Glass_JE4_BE2.png"/></div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Glass</span> <img src="https://minecraft.wiki/images/Glass_JE4_BE2.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Glass</span> <img src="https://minecraft.wiki/images/Glass_JE4_BE2.png"/></div>
  </div>
</div>

## Snow Bricks

<div class="info-box">
<div class="radioswitcher-inputs">
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedSB" value="1">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/snowbrick.png" width="25" height="25"></div>Block</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedSB" value="2">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/snow_brick_stairs.png" width="25" height="25"></div>Stairs</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedSB" value="3">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/snow_brick_slab.png" width="25" height="25"></div>Slab</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedSB" value="4">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/snow_brick_wall.png" width="25" height="25"></div>Wall</span>
  </label>
</div>

<transition name="slide">
  <div class="info-box" v-html="compsnowBrick"></div>
</transition>

**Snow Bricks** are a set packed down blocks of Snow that can be used for construction.

</div>

## Soul Jack o' Lantern

![img](../ass-sets/blocks/lit_pumpkin_soul.png)
`vc:lit_pumpkin_soul`
| Component | Value |
|---|---|
|Breaking time (secs)|3|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|No|
|Placement Style|Directional|

### About:
**Soul Jack o' Lanterns** are a variant of the [Jack o' Lantern]() crafted with a soul torch

### Crafting:
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Soul Jack o' Lantern</span> <img src="../ass-sets/blocks/lit_pumpkin_soul.png"/></div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Carved Pumpkin</span> <img src="https://minecraft.wiki/images/Carved_Pumpkin_%28E%29_BE2.png?72d96"/></div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Soul Torch</span> <img style="image-rendering: pixelated;" src="https://minecraft.wiki/images/Invicon_Soul_Torch.png"/></div>
  </div>
</div>

## Quartz Brick Stairs, Slab, and Wall

<div class="kinda-fancy-menu" width="fit-content"> 
<div class="img"><img src="../ass-sets/blocks/quartz_brick_stairs.png"><p data-v-4a89f8d7=""><code data-v-4a89f8d7="">vc:quartz_brick_stairs</code></p></div>
<div class="img"><img src="../ass-sets/blocks/quartz_brick_slab.png"><p data-v-4a89f8d7=""><code data-v-4a89f8d7="">vc:quartz_brick_slab</code></p></div>
<div class="img"><img src="../ass-sets/blocks/quartz_brick_wall.png"><p data-v-4a89f8d7=""><code data-v-4a89f8d7="">vc:quartz_brick_wall</code></p></div>
</div>

| Component | Value |
|---|---|
|Breaking time (secs)|4|
|Luminous|No|
|Blast resistance|0.8|
|Flammable|No|
|Conducts Redstone|No|
|Placement Style|Directional|

### About:
**Quartz Brick Stairs and Slabs** are simple stair, slab and wall variants of [Quartz Bricks](https://minecraft.wiki/w/Quartz_Bricks)

### Crafting:
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Quartz Brick Stairs</span> <img src="../ass-sets/blocks/quartz_brick_stairs.png"/></div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"><span class="c-tooltip-text">Quartz Bricks</span> <img src="https://minecraft.wiki/images/Quartz_Bricks_JE2.png"/></div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Quartz Bricks</span> <img src="https://minecraft.wiki/images/Quartz_Bricks_JE2.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Quartz Bricks</span> <img src="https://minecraft.wiki/images/Quartz_Bricks_JE2.png"/></div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Quartz Bricks</span> <img src="https://minecraft.wiki/images/Quartz_Bricks_JE2.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Quartz Bricks</span> <img src="https://minecraft.wiki/images/Quartz_Bricks_JE2.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Quartz Bricks</span> <img src="https://minecraft.wiki/images/Quartz_Bricks_JE2.png"/></div>
  </div>
</div>
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Quartz Brick Slab</span> <img src="../ass-sets/blocks/quartz_brick_slab.png"/></div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Quartz Bricks</span> <img src="https://minecraft.wiki/images/Quartz_Bricks_JE2.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Quartz Bricks</span> <img src="https://minecraft.wiki/images/Quartz_Bricks_JE2.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Quartz Bricks</span> <img src="https://minecraft.wiki/images/Quartz_Bricks_JE2.png"/></div>
  </div>
</div>
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Quartz Brick Wall</span> <img src="../ass-sets/blocks/quartz_brick_wall.png"/></div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Quartz Bricks</span> <img src="https://minecraft.wiki/images/Quartz_Bricks_JE2.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Quartz Bricks</span> <img src="https://minecraft.wiki/images/Quartz_Bricks_JE2.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Quartz Bricks</span> <img src="https://minecraft.wiki/images/Quartz_Bricks_JE2.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Quartz Bricks</span> <img src="https://minecraft.wiki/images/Quartz_Bricks_JE2.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Quartz Bricks</span> <img src="https://minecraft.wiki/images/Quartz_Bricks_JE2.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Quartz Bricks</span> <img src="https://minecraft.wiki/images/Quartz_Bricks_JE2.png"/></div>
  </div>
</div>

## jeb_ Wool and Carpet

<div class="kinda-fancy-menu" width="fit-content"> 
<div class="img"><img src="../ass-sets/blocks/rainbow_wool.gif"><p data-v-4a89f8d7=""><code data-v-4a89f8d7="">vc:rainbow_wool</code></p></div>
<div class="img"><img src="../ass-sets/blocks/rainbow_carpet.gif"><p data-v-4a89f8d7=""><code data-v-4a89f8d7="">vc:rainbow_carpet</code></p></div>
</div>

| Component | Value |
|---|---|
|Breaking time (secs)|1.2 (Wool) 0.15 (Carpet)|
|Luminous|No|
|Blast resistance|0|
|Flammable|Yes (30)|
|Conducts Redstone|No|

### About:
**jeb_ Wool** (aka Rainbow Wool) is a new wool color sheared from sheep named "[jeb_](https://minecraft.wiki/w/Sheep#Easter_eggs)"
![img](https://minecraft.wiki/images/Jeb_Sheep_JE2.gif?2dcb4)

### Crafting:
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">jeb_ Carpet</span> <img src="../ass-sets/blocks/rainbow_carpet.gif"/></div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">jeb_ Wool</span> <img src="../ass-sets/blocks/rainbow_wool.gif"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">jeb_ Wool</span> <img src="../ass-sets/blocks/rainbow_wool.gif"/></div>
  </div>
</div>

## Silver Birch Leaves

![img](../ass-sets/blocks/silver_birch_leaves.png)
`vc:silver_birch_leaves`
| Component | Value |
|---|---|
|Breaking time (secs)|1.1|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|Yes (5)|
|Conducts Redstone|No|

### About:
**Silver Birch Leaves** are a special [Birch Leaf](https://minecraft.wiki/w/Leaves#Birch) variant that are yellow
- They are inspired by [Real Birch trees that turn yellow in autumn](https://en.wikipedia.org/wiki/Betula_pendula)

## Silver Birch Trailings

![img](../ass-sets/blocks/silver_birch_trailings.png)
`vc:silver_birch_trailings`
| Component | Value |
|---|---|
|Breaking time (secs)|1.1|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|Yes (5)|
|Conducts Redstone|No|

### About:
**Silver Birch Trailings** stem off the bottom of [Silver Birch Leaves](/blocks/deco.html#silver-birch-leaves)
- Their only purpose is to make the tree pretty lol

## Withered Bone Block

![img](../ass-sets/blocks/wither_bone_block.png)
`vc:wither_bone_block`
| Component | Value |
|---|---|
|Breaking time (secs)|10|
|Luminous|No|
|Blast resistance|2|
|Flammable|No|
|Conducts Redstone|No|
|Placement Style|Directional|

### About:
**Withered Bone Block** is the wither variant of the [Bone Block](https://minecraft.wiki/w/Bone_Block)

### Crafting:
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Withered Bone Block</span> <img src="../ass-sets/blocks/wither_bone_block.png"/></div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"><span class="c-tooltip-text">Withered Bone Meal</span> <img src="../ass-sets/items/wither_bone_meal.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Withered Bone Meal</span> <img src="../ass-sets/items/wither_bone_meal.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Withered Bone Meal</span> <img src="../ass-sets/items/wither_bone_meal.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Withered Bone Meal</span> <img src="../ass-sets/items/wither_bone_meal.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Withered Bone Meal</span> <img src="../ass-sets/items/wither_bone_meal.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Withered Bone Meal</span> <img src="../ass-sets/items/wither_bone_meal.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Withered Bone Meal</span> <img src="../ass-sets/items/wither_bone_meal.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Withered Bone Meal</span> <img src="../ass-sets/items/wither_bone_meal.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Withered Bone Meal</span> <img src="../ass-sets/items/wither_bone_meal.png"/></div>
  </div>
</div>

<script setup>
import { computed, ref } from "vue";
import { marked } from "marked";
const selectedBNB = ref("1");
const selectedDIRT = ref("1");
const selectedSB = ref("1");
const blueNetherBricks = [
    `
## Blue Nether Bricks
![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_bricks.png?raw=true)
\`vc:blue_nether_bricks\`
| Component | Value |
|---|---|
|Breaking time (secs)|5|
|Luminous|No|
|Blast resistance|6|
|Flammable|No|
|Conducts Redstone|No|

### Crafting:
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Blue Nether Bricks</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_bricks.png?raw=true"/></div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"><span class="c-tooltip-text">Nether Brick</span> <img src="https://minecraft.wiki/images/Nether_Brick_JE2_BE2.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Warped Wart</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/items/warped_wart.png?raw=true"/></div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Warped Wart</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/items/warped_wart.png?raw=true"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Nether Brick</span> <img src="https://minecraft.wiki/images/Nether_Brick_JE2_BE2.png"/></div>
  </div>
</div>
    `,
    `
## Blue Nether Brick Stairs

![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_brick_stairs.png?raw=true)
\`vc:blue_nether_brick_stairs\`
| Component | Value |
|---|---|
|Breaking time (secs)|10|
|Luminous|No|
|Blast resistance|6|
|Flammable|No|
|Conducts Redstone|No|
|Waterloggable|Yes|
|Placement Style|Directional|

### Crafting:
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Blue Nether Brick Stairs</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_brick_stairs.png?raw=true"/></div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"><span class="c-tooltip-text">Blue Nether Bricks</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_bricks.png?raw=true"/></div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Blue Nether Bricks</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_bricks.png?raw=true"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Blue Nether Bricks</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_bricks.png?raw=true"/></div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Blue Nether Bricks</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_bricks.png?raw=true"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Blue Nether Bricks</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_bricks.png?raw=true"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Blue Nether Bricks</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_bricks.png?raw=true"/></div>
  </div>
</div>
    `,
    `
## Blue Nether Brick Slab

![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_brick_slab.png?raw=true)
\`vc:blue_nether_brick_slab\`
| Component | Value |
|---|---|
|Breaking time (secs)|10|
|Luminous|No|
|Blast resistance|6|
|Flammable|No|
|Conducts Redstone|No|
|Waterloggable|Yes|
|Placement Style|Directional|

### Crafting:
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Blue Nether Brick Slab</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_brick_slab.png?raw=true"/></div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Blue Nether Bricks</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_bricks.png?raw=true"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Blue Nether Bricks</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_bricks.png?raw=true"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Blue Nether Bricks</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_bricks.png?raw=true"/></div>
  </div>
</div>
    `,
    `
## Blue Nether Brick Wall

![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_brick_wall.png?raw=true)
\`vc:blue_nether_brick_wall\`
| Component | Value |
|---|---|
|Breaking time (secs)|10|
|Luminous|No|
|Blast resistance|6|
|Flammable|No|
|Conducts Redstone|No|
|Waterloggable|Yes|
|Placement Style|Situational|

### Crafting:
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Blue Nether Brick Wall</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_brick_wall.png?raw=true"/></div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Blue Nether Bricks</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_bricks.png?raw=true"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Blue Nether Bricks</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_bricks.png?raw=true"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Blue Nether Bricks</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_bricks.png?raw=true"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Blue Nether Bricks</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_bricks.png?raw=true"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Blue Nether Bricks</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_bricks.png?raw=true"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Blue Nether Bricks</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_bricks.png?raw=true"/></div>
  </div>
</div>
    `
]
const dirt = [`
## Dirt Stairs
![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/dirt_stairs.png?raw=true)
\`vc:dirt_stairs\`
| Component | Value |
|---|---|
|Breaking time (secs)|0.75|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|No|
|Placement Style|Directional|

### Crafting:
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Dirt Stairs</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/dirt_stairs.png?raw=true"/></div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"><span class="c-tooltip-text">Dirt</span> <img src="https://minecraft.wiki/images/Dirt.png"/></div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Dirt</span> <img src="https://minecraft.wiki/images/Dirt.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Dirt</span> <img src="https://minecraft.wiki/images/Dirt.png"/></div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Dirt</span> <img src="https://minecraft.wiki/images/Dirt.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Dirt</span> <img src="https://minecraft.wiki/images/Dirt.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Dirt</span> <img src="https://minecraft.wiki/images/Dirt.png"/></div>
  </div>
</div>
`,`
## Dirt Slab

![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/dirt_slab.png?raw=true)
\`vc:dirt_slab\`
| Component | Value |
|---|---|
|Breaking time (secs)|0.75|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|No|
|Placement Style|Positional|

### Crafting:
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Dirt Stairs</span> <img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/dirt_stairs.png?raw=true"/></div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Dirt</span> <img src="https://minecraft.wiki/images/Dirt.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Dirt</span> <img src="https://minecraft.wiki/images/Dirt.png"/></div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Dirt</span> <img src="https://minecraft.wiki/images/Dirt.png"/></div>
  </div>
</div>
`]
const snow = [
  `## Snow Bricks

![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/snowbrick.png?raw=true)
\`vc:snowbrick\`
| Component | Value |
|---|---|
|Breaking time (secs)|5|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|No|
`, `## Snow Brick Stairs

![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/snow_brick_stairs.png?raw=true)
\`vc:snow_brick_stairs\`
| Component | Value |
|---|---|
|Breaking time (secs)|5|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|No|
|Placement Style|Directional|

`,
`## Snow Brick Slab

![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/snow_brick_slab.png?raw=true)
\`vc:snow_brick_slab\`
| Component | Value |
|---|---|
|Breaking time (secs)|5|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|No|
|Placement Style|Directional|

  `,
`## Snow Brick Wall

![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/snow_brick_wall.png?raw=true)
\`vc:snow_brick_wall\`
| Component | Value |
|---|---|
|Breaking time (secs)|5|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|No|
|Placement Style|Situational|

  `
]
const compblueNetherBrick = computed(() => marked(blueNetherBricks[selectedBNB.value-1]));
const compDirt = computed(() => marked(dirt[selectedDIRT.value-1]));
const compsnowBrick = computed(() => marked(snow[selectedSB.value-1]));

const formattedInfo = computed(() => {
  // Replace newline characters with <br>
  return info[selectedInfo.value].replace(/\n/g, '<br>').replace('vc:no:', 'no:');
});
</script>
<style scoped>
    
.info-box {
  padding: 16px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  margin-top: 10px;
  background-color: var(--vp-c-bg);
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  max-height: 0;
  opacity: 0;
  padding: 0 16px;
}
.slide-enter-to, .slide-leave-from {
  max-height: 500px; /* adjust as needed */
  opacity: 1;
}
</style>