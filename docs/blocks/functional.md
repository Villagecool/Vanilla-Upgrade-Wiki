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

## Gunpowder Line

![img](../ass-sets/blocks/gunpowder_line.png)
`vc:gunpowder_line`
| Component | Value |
|---|---|
|Breaking time (secs)|0.2|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|Yes (10)|
|Conducts Redstone|No|

### About:

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
**Pumice** is a lava sponge

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
**Saturated Pumice** is a wet lava sponge

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

## Saturated Pumice

![img](../ass-sets/blocks/saturated_pumice.png)
`vc:saturated_pumice`
| Component | Value |
|---|---|
|Breaking time (secs)|5|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|No|

### About:

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
