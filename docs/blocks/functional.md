# Functional Blocks

## Advanced Hopper <Badge type="danger">[**Advanced System**](/advanced_system.html)</Badge>

![img](../ass-sets/blocks/advanced_hopper.png)
`vc:advanced_hopper`
| Component | Value |
|---|---|
|Breaking time (secs)|20|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|Yes|
|Waterloggable|Yes|
|Placement Style|Positional|

### About:
**Advanced Hoppers** are members of the Advanced family, they serve as an upgrade to the <img src="https://minecraft.wiki/images/Invicon_Hopper.png?2d17e" class="inline-img"> [Hopper](https://minecraft.wiki/w/Hopper)
- They are much faster to their original counterpart. Their speed compares to a <img src="https://minecraft.wiki/images/Invicon_Minecart_with_Hopper.png?2d17e" class="inline-img"> [Hopper Minecart](https://minecraft.wiki/w/Minecart_with_Hopper)
- Unlike the original, they lack an openable UI.
- Their main feature is that they can be **Filtered**
    - Interacting with the Hopper once will inform the player of the current filter
    - Interacting with the Hopper twice will set the Hoppers filter to the held item
        - If the player is not holding an item, the filter will be cleared

    - <img src="../ass-sets/items/advanced_filter.png" class="inline-img"> [Advanced Filters](/items/tools.html#advanced-filter) can also be used to create a more complex filter
        - To Learn more about this system, read [this page](/advanced_system.html)
        - Using an Advanced Filter will consume the item
            - If the Hopper's filter is later changed, the Advanced Filter will be returned.

![img](../ass-sets/settingafilter.png)
            
### Crafting
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Advanced Hopper</span> <img src="../ass-sets/blocks/advanced_hopper.png"/> </div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Advanced Filter</span> <img src="../ass-sets/items/advanced_filter.png"/> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Compressed Copper</span> <img src="../ass-sets/items/compressed_copper.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Hopper</span> <img style="image-rendering: pixelated;" src="https://minecraft.wiki/images/Invicon_Hopper.png?2d17e"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Compressed Copper</span> <img src="../ass-sets/items/compressed_copper.png"/> </div>
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Redstone</span> <img style="image-rendering: pixelated;" src="https://minecraft.wiki/images/Invicon_Redstone.png"/> </div>
    <div class="crafting-grid-item"> </div>
  </div>
</div>

## Advanced Observer <Badge type="danger">[**Advanced System**](/advanced_system.html)</Badge>

![img](../ass-sets/blocks/advanced_observer.png)
`vc:advanced_observer`
| Component | Value |
|---|---|
|Breaking time (secs)|20|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|Yes|
|Placement Style|Directional|

### About:

**Advanced Observers** are members of the Advanced family, they serve as an upgrade to the [Observer](https://minecraft.wiki/w/Observer)
- Rather than detecting block updates, they look for a specific block's presence
- Once detected, they take on a suprised expression <img src="../ass-sets/blocks/advanced_observer_lit.png" class="inline-img" style="width=64px;height=64px;"></img>
- They choose how to detect blocks via **Filters**
    - Interacting with the Observer once will inform the player of the current filter
    - Interacting with the Observer twice will set the Observer's filter to the held item
        - Unlike Advanced Hoppers, Observers cannot lack a filter. Otherwise they just don't do anything.

    - <img src="../ass-sets/items/advanced_filter.png" class="inline-img"> [Advanced Filters](/items/tools.html#advanced-filter) can also be used to create a more complex filter
        - To Learn more about this system, read ***[this page](/advanced_system.html)***
        - Using an Advanced Filter will consume the item
            - If the Observer's filter is later changed, the Advanced Filter will be returned.

![img](../ass-sets/observecake.png)
### Crafting
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Advanced Observer</span> <img src="../ass-sets/blocks/advanced_observer.png"/> </div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Advanced Filter</span> <img src="../ass-sets/items/advanced_filter.png"/> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Gloricalium Sheet</span> <img src="../ass-sets/items/gloricalium_sheet.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Observer</span> <img src="https://minecraft.wiki/images/Observer_JE4_BE3.png?39c33"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Gloricalium Sheet</span> <img src="../ass-sets/items/gloricalium_sheet.png"/> </div>
  </div>
</div>

## Breezer

![img](../ass-sets/blocks/breezer.png)
`vc:breezer`
| Component | Value |
|---|---|
|Breaking time (secs)|20|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|Yes|
|Placement Style|Directional|

### About:
**Breezers** when powered by redstone, will emmit wind gust that push entities
- The strength of the wind corrosponds to the redstone strength
- Entities with high knockback resistance, like the [Iron Golem](https://minecraft.wiki/w/Iron_Golem), cannot be moved by the breezer

<img src="../ass-sets/breezerblow.png" width="300"></img>

### Crafting
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Breezer</span> <img src="../ass-sets/blocks/breezer.png"/> </div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Wind Charge</span> <img src="https://minecraft.wiki/images/Wind_Charge_%28item%29_JE1_BE1.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Gloricalium Grate</span> <img src="../ass-sets/blocks/gloricalium_grate.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Wind Charge</span> <img src="https://minecraft.wiki/images/Wind_Charge_%28item%29_JE1_BE1.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Breeze Rod</span> <img src="https://minecraft.wiki/images/Breeze_Rod_JE1_BE1.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Iron Ignot</span> <img src="https://minecraft.wiki/images/Iron_Ingot_JE3_BE2.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Breeze Rod</span> <img src="https://minecraft.wiki/images/Breeze_Rod_JE1_BE1.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Copper Ingot</span> <img src="https://minecraft.wiki/images/Copper_Ingot_JE2_BE1.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Redstone</span> <img style="image-rendering: pixelated;" src="https://minecraft.wiki/images/Invicon_Redstone.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Copper Ingot</span> <img src="https://minecraft.wiki/images/Copper_Ingot_JE2_BE1.png"/> </div>
  </div>
</div>

## Blazer

![img](../ass-sets/blocks/blazer.png)
`vc:blazer`
| Component | Value |
|---|---|
|Breaking time (secs)|20|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|Yes|
|Placement Style|Directional|

### About:
**Blazers** when powered by redstone, will emmit fire that burns exclusively entities
- Blazers cannot set the ground on fire

### Crafting
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Blazer</span> <img src="../ass-sets/blocks/blazer.png"/> </div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Blazer Poweder</span> <img src="https://minecraft.wiki/images/Blaze_Powder_JE2_BE1.png?b5dec"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Gloricalium Grate</span> <img src="../ass-sets/blocks/gloricalium_grate.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Blazer Poweder</span> <img src="https://minecraft.wiki/images/Blaze_Powder_JE2_BE1.png?b5dec"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Blaze Rod</span> <img src="https://minecraft.wiki/images/Blaze_Rod_JE1_BE1.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Iron Ignot</span> <img src="https://minecraft.wiki/images/Iron_Ingot_JE3_BE2.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Blaze Rod</span> <img src="https://minecraft.wiki/images/Blaze_Rod_JE1_BE1.png"/> </div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Nether Brick</span> <img src="https://minecraft.wiki/images/Nether_Brick_JE2_BE2.png"/></div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Redstone</span> <img style="image-rendering: pixelated;" src="https://minecraft.wiki/images/Invicon_Redstone.png"/> </div>
    <div class="crafting-grid-item"><span class="c-tooltip-text">Nether Brick</span> <img src="https://minecraft.wiki/images/Nether_Brick_JE2_BE2.png"/></div>
  </div>
</div>

## Carnavorus Chorus Plant

![img](../ass-sets/blocks/chorus_carnavorus_plant.png)
`vc:chorus_carnavorus_plant`
| Component | Value |
|---|---|
|Breaking time (secs)|7|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|No|

### About:
**Carnavorus Chorus Plant** spawn as the source of odd growth in the End Waste
When approached by the player, stems will rapidly extend out of the center of the plant
- They can grow 2-5 blocks high
- If they grow 3+ blocks high, it will attempt to attack the player by emmiting sickening pollen
  - This pollen will give the player <img src="https://minecraft.wiki/images/EffectSprite_weakness.png?49b93" class="inline-img"/> Weakness, <img src="https://minecraft.wiki/images/EffectSprite_slowness.png?49b93" class="inline-img"/> Slowness, and <img src="https://minecraft.wiki/images/EffectSprite_nausea.png?49b93" class="inline-img"/> Nausea.

<img src="../ass-sets/chorus_poofs.gif" width=224px/>

- Around the chorus growth, <img src="../ass-sets/blocks/rooted_end_stone.png" class="inline-img"/> **Rooted End Stone** will appear.
  - When stepped on, small chompers will nibble at your feet, dealing 1-2<img class="heart"/> of damage

  <img src="../ass-sets/chorus_chomper.png" width=224px/>

- The plant was inspired by this plant by Minecraft Dungeons, and the plants from <img src="https://m.media-amazon.com/images/I/51sUAIgqOvL._SL500_.jpg" class="inline-img"/> [a book i read a while ago](https://www.goodreads.com/book/show/50215833-bloom)

<img src="https://i.redd.it/i-recreated-the-unused-chorus-plant-from-the-echoing-void-v0-j7fl1qfsa3e81.jpg?width=611&format=pjpg&auto=webp&s=57ff239fb8455c460c890749bc2ccf6bde242af5" width=224px/>

## Gunpowder Line

<img style="image-rendering: pixelated;width: 112px;" src="../ass-sets/blocks/gunpowder_line.png"/>

`vc:gunpowder_line`
| Component | Value |
|---|---|
|Breaking time (secs)|0.2|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|Yes (10)|
|Conducts Redstone|No|

### About:
<img src="https://minecraft.wiki/images/Gunpowder_JE2_BE2.png" class="inline-img"/> **Gunpowder** now should be placeable on the ground.
- When lit with a <img src="https://minecraft.wiki/images/Flint_and_Steel_JE4_BE2.png" class="inline-img"/> **Flint and Steel** the gunpowder will begin to burst in a slow chain, igniting any Gunpowder and <img src="https://minecraft.wiki/images/thumb/TNT_JE3_BE2.png/150px-TNT_JE3_BE2.png?62989" class="inline-img"/> **TNT** in it's path.

## Knowlage Harvester

![img](../ass-sets/blocks/knowlage_harvester.png)
`vc:knowlage_harvester`
| Component | Value |
|---|---|
|Breaking time (secs)|5|
|Luminous|Yes (10)|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|No|
|Placement Style|Directional|

### About:
**Knowlage Harvesters** are used to store and manage <img src="../ass-sets/items/xp.png" class="inline-img"/> **Experience** and <img src="../ass-sets/items/crystalized_experience.png" class="inline-img"/> **Crystalized Experience**
- Crystalized Experience can be obtained from [**Frozen Feathers**](/items/tools.html#frozen-feather)
- So far, there are 2 main functions of the Knowlage Harvester:
  1. Crystalized Experience can be harvested back into actual Expeirence
  2. Paper can be used to store levels of xp onto <img src="../ass-sets/items/scroll.png" class="inline-img"/> [**Scrolls**](/items/tools.html#scroll)

### Crafting
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Knowladge Harvester</span> <img src="../ass-sets/blocks/knowlage_harvester.png"/> </div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Book</span> <img src="https://minecraft.wiki/images/Book_JE1_BE1.png"/>  </div>
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Amethyst Shard</span> <img src="https://minecraft.wiki/images/Amethyst_Shard_JE2_BE1.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Obsidian</span> <img src="https://minecraft.wiki/images/Obsidian_JE3_BE2.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Amethyst Shard</span> <img src="https://minecraft.wiki/images/Amethyst_Shard_JE2_BE1.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Obsidian</span> <img src="https://minecraft.wiki/images/Obsidian_JE3_BE2.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Cystalized Experience Block</span> <img src="../ass-sets/blocks/crystalized_experience_block.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Obsidian</span> <img src="https://minecraft.wiki/images/Obsidian_JE3_BE2.png"/> </div>
  </div>
</div>

## Pumice

![img](../ass-sets/blocks/pumice.png)
`vc:pumice`
| Component | Value |
|---|---|
|Breaking time (secs)|15|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|No|

### About:
**Pumice** serves as a Lava alternative for a <img class="inline-img" src="https://minecraft.wiki/images/thumb/Sponge_JE3_BE3.png/150px-Sponge_JE3_BE3.png?ded7d"/> [**Sponge**](https://minecraft.wiki/w/Sponge)
- If it asorbs any lava, it will turn into <img class="inline-img" src="../ass-sets/blocks/saturated_pumice.png"/> [**Saturated Pumice**](/blocks/functional.html#saturated-pumice)

## Saturated Pumice

![img](../ass-sets/blocks/saturated_pumice.png)
`vc:saturated_pumice`
| Component | Value |
|---|---|
|Breaking time (secs)|15|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|No|

### About:
**Saturated Pumice** serves as a Lava alternative for a <img class="inline-img" src="https://minecraft.wiki/images/Wet_Sponge_JE2_BE2.png?ed533"/> [**Wet Sponge**](https://minecraft.wiki/w/Sponge)
- When interacted with a <img class="inline-img" src="https://minecraft.wiki/images/Bucket_JE2_BE2.png"/> **Bucket**, the lava will be extracted, and it will return to [Normal](/blocks/functional.html#pumice)

## Rotator

<img src="../ass-sets/blocks/rotator.png" style="vertical-align:middle;display:inline-block;width:112px;height:112px;">
<img src="https://media.forgecdn.net/attachments/description/null/description_5a4558b1-0b73-486a-9ecb-df67259e773f.gif" style="vertical-align:middle;display:inline-block;width:92px;height:92px;">

`vc:rotator`
| Component | Value |
|---|---|
|Breaking time (secs)|25|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|Yes|

### About:
**Roators** are a block that have the unique ability to rotate structures in 90 degree intervals
- When powered with redstone, the Rotator will rotate the block above it *Clockwise* or *Counterclockwise*
    - You can configure it's direction by interacting with the Rotator
- [Slime Block](https://minecraft.wiki/w/Slime_Block) structures on top of the rotator will spin all the blocks connected to it
- The Rotator can spin up to 24 blocks
- If a block is in the way of rotation the rotated block will break.
- Blocks that cannot be moved by pistons cannot be rotated
![img](https://media.forgecdn.net/attachments/description/null/description_925874f4-1d6d-4627-b9f9-e13580dc9ccc.gif)

### Crafting
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Rotator</span> <img src="../ass-sets/blocks/rotator.png"/> </div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Any Planks</span> <img src="https://minecraft.wiki/images/thumb/Oak_Planks.png/150px-Oak_Planks.png"/>  </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Any Planks</span> <img src="https://minecraft.wiki/images/thumb/Oak_Planks.png/150px-Oak_Planks.png"/>  </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Any Planks</span> <img src="https://minecraft.wiki/images/thumb/Oak_Planks.png/150px-Oak_Planks.png"/>  </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Cobblestone</span> <img src="https://minecraft.wiki/images/Cobblestone_JE5_BE3.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Copper Wrench</span> <img src="../ass-sets/items/copper_wrench.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Cobblestone</span> <img src="https://minecraft.wiki/images/Cobblestone_JE5_BE3.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Cobblestone</span> <img src="https://minecraft.wiki/images/Cobblestone_JE5_BE3.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Redstone</span> <img style="image-rendering: pixelated;" src="https://minecraft.wiki/images/Invicon_Redstone.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Cobblestone</span> <img src="https://minecraft.wiki/images/Cobblestone_JE5_BE3.png"/> </div>
  </div>
</div>

## Sawmill

![img](../ass-sets/blocks/sawmill.png)
`vc:sawmill`
| Component | Value |
|---|---|
|Breaking time (secs)|5|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|No|

### About:
The **Sawmill** is a Wood variant to the <img src="https://minecraft.wiki/images/Stonecutter_JE2_BE1.gif" class="inline-img"/> [**Stonecutter**](https://minecraft.wiki/w/Stonecutter)
- Placing a <img src="https://minecraft.wiki/images/thumb/Oak_Planks.png/150px-Oak_Planks.png?d9efa" class="inline-img"/> [**Plank**](https://minecraft.wiki/w/Planks) into it's corresponding slot, will convert it into that shape.
- Custom planks do not have a sign variant
- I actually did the math on all of these, relative to the model pixels, on how many of each item you should get.

![img](../ass-sets/sui.png)

### Crafting
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Sawmill</span> <img src="../ass-sets/blocks/sawmill.png"/> </div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Iron Ignot</span> <img src="https://minecraft.wiki/images/Iron_Ingot_JE3_BE2.png"/> </div>
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Any Planks</span> <img src="https://minecraft.wiki/images/thumb/Oak_Planks.png/150px-Oak_Planks.png"/>  </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Any Planks</span> <img src="https://minecraft.wiki/images/thumb/Oak_Planks.png/150px-Oak_Planks.png"/>  </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Any Planks</span> <img src="https://minecraft.wiki/images/thumb/Oak_Planks.png/150px-Oak_Planks.png"/>  </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Stick</span> <img src="https://minecraft.wiki/images/Stick_JE1_BE1.png?1fc15"/> </div>
    <div class="crafting-grid-item"> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Stick</span> <img src="https://minecraft.wiki/images/Stick_JE1_BE1.png?1fc15"/> </div>
  </div>
</div>