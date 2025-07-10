# Blocks Families
::: warning Incomplete Article
This article is incomplete! So it may lack details or crucial information.

**Reason: I *REALLY* dont want to add crafting recipies for all of these 😅** just use the recipie book >:3
:::

## Azalea Wood
<!--::: details Click to Expand ![img](../ass-sets/azalea.png) -->

<div class="info-box">
<div v-if="isOpen" class="radioswitcher-inputs">
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoa" value="option1">
    <span class="name"><div class="img"><img src="../ass-sets/blocks/azalea_planks.png" width="25" height="25"></div>Planks</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoa" value="option2">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/azalea_stairs.png" width="25" height="25"></div>Stairs</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoa" value="option3">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/azalea_slab.png" width="25" height="25"></div>Slab</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoa" value="option4">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/azalea_door.png" width="25" height="25"></div>Door</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoa" value="option5">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/azalea_trapdoor.png" width="25" height="25"></div>Trapdoor</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoa" value="option6">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/azalea_fence.png" width="25" height="25"></div>Fence</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoa" value="option7">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/azalea_fence_gate.png" width="25" height="25"></div>Fence Gate</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoa" value="option8">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/azalea_log.png" width="25" height="25"></div>Log</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoa" value="option9">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/azalea_wood.png" width="25" height="25"></div>Wood</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoa" value="option10">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/stripped_azalea_log.png" width="25" height="25"></div>Stripeped Log</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoa" value="option11">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/stripped_azalea_wood.png" width="25" height="25"></div>Stripped Wood</span>
  </label>
</div>
<button @click="isOpen = !isOpen">
  {{ isOpen ? "▲ Read Less" : "▼ Read More" }}
</button>
<!-- Transition Wrapper for Collapsible Info Box -->
<transition name="slide">
  <div v-if="isOpen" class="info-box" v-html="compiledMarkdownAza"></div>
</transition>

### About:
**Azalea Wood** is a simple addition to give fully grown [**Azalea Bushes**](https://minecraft.wiki/w/Azalea) a custom woodset
![img](../ass-sets/azalea_tree.png)

</div>
<!--:::-->

## Elax Wood/Biome 
<!-- ::: details Click to Expand ![img](../ass-sets/elax.png) -->

<div class="info-box">
<div v-if="isOpena"class="radioswitcher-inputs">
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoe" value="eoption1">
    <span class="name"><div class="img"><img src="../ass-sets/blocks/zalu_block.png" width="25" height="25"></div>Zalu Block</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoe" value="eoption2">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/zalu_plant.png" width="25" height="25"></div>Zalu Plant</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoe" value="eoption3">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/zalu_roots.png" width="25" height="25"></div>Zalu Roots</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoe" value="eoption7">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/elax_fungus.png" width="25" height="25"></div>Fungus</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoe" value="eoption8">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/elax_fungus_crystalized.png" width="25" height="25"></div>Fungus (Crystalized)</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoe" value="eoption9">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/elax_leaves.png" width="25" height="25"></div>Leaves</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoe" value="eoption6">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/elax_floor_leaves.png" width="25" height="25"></div>Leaves (Floor)</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoe" value="eoption11">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/elax_planks.png" width="25" height="25"></div>Planks</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoe" value="eoption12">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/elax_slab.png" width="25" height="25"></div>Slab</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoe" value="eoption13">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/elax_stairs.png" width="25" height="25"></div>Stairs</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoe" value="eoption18">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/elax_door.png" width="25" height="25"></div>Door</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoe" value="eoption14">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/elax_trapdoor.png" width="25" height="25"></div>Trapdoor</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoe" value="eoption4">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/elax_fence.png" width="25" height="25"></div>Fence</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoe" value="eoption5">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/elax_fence_gate.png" width="25" height="25"></div>Fence Gate</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoe" value="eoption10">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/elax_log.png" width="25" height="25"></div>Log</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoe" value="eoption15">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/elax_wood.png" width="25" height="25"></div>Wood</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoe" value="eoption16">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/stripped_elax_log.png" width="25" height="25"></div>Stripeped Log</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoe" value="eoption17">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/stripped_elax_wood.png" width="25" height="25"></div>Stripped Wood</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoe" value="eoption19">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/sapling_elax.png" width="25" height="25"></div>Sapling</span>
  </label>
</div>

<button @click="isOpena = !isOpena">
{{ isOpena ? "▲ Read Less" : "▼ Read More" }}
</button>

<!-- Transition Wrapper for Collapsible Info Box -->
<transition name="slide">
  <div v-if="isOpena" class="info-box" v-html="compiledMarkdownEla"></div>
</transition>

### About: 
The **Elax** woodset originates from the respective biome in [The End](https://minecraft.wiki/w/The_End)

Most of Elax Wood has a unique trait:
- Stepping on Elax Blocks without a supporting block underneath will cause it to **shake**
- After stepping off, the respective block will fall to the ground

<img src="../ass-sets/elax_demo.gif" width=224px/>

- The design of the floating trees was inspired by some weird trees I saw in [Cyberchase](https://en.wikipedia.org/wiki/Cyberchase)

</div>

<!--:::-->

## Palm Wood 
<!--::: details Click to Expand ![img](../ass-sets/palm.png)-->

<div class="info-box">
<div v-if="isOpenp" class="radioswitcher-inputs">
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfop" value="poption5">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/palm_planks.png" width="25" height="25"></div>Planks</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfop" value="poption6">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/palm_stairs.png" width="25" height="25"></div>Stairs</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfop" value="poption7">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/palm_slab.png" width="25" height="25"></div>Slab</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfop" value="poption1">
    <span class="name"><div class="img"><img src="../ass-sets/blocks/palm_fence.png" width="25" height="25"></div>Fence</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfop" value="poption2">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/palm_fence_gate.png" width="25" height="25"></div>Fence Gate</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfop" value="poption9">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/palm_trapdoor.png" width="25" height="25"></div>Trapdoor</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfop" value="poption3">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/palm_leaves.png" width="25" height="25"></div>Leaves</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfop" value="poption8">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/palm_trailings.png" width="25" height="25"></div>Trailings</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfop" value="poption4">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/palm_log.png" width="25" height="25"></div>Log</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfop" value="poption10">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/palm_wood.png" width="25" height="25"></div>Wood</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfop" value="poption11">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/stripped_palm_log.png" width="25" height="25"></div>Stripped Log</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfop" value="poption12">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/stripped_palm_wood.png" width="25" height="25"></div>Stripped Wood</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfop" value="poption13">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/sapling_palm.png" width="25" height="25"></div>Sapling</span>
  </label>
</div>

<button @click="isOpenp = !isOpenp">
{{ isOpenp ? "▲ Read Less" : "▼ Read More" }}
</button>

<!-- Transition Wrapper for Collapsible Info Box -->
<transition name="slide">
  <div v-if="isOpenp" class="info-box" v-html="compiledMarkdownPal"></div>
</transition>

### About:
The **Palm** woodset unsuprisingly comes from palm trees
![img](../ass-sets/palm_tree.png)
- Palm tree's are found near beaches and oasises in the desert
- They can also be found in [**Saloons**](/features.html#saloon)
- The door was originally a full block before it was changed to resemble saloon doors.

</div>
<!--:::-->

## Compressed Copper 
<!--::: details Click to Expand ![img](../ass-sets/compressed_copper.png)-->

<div class="info-box">
<div v-if="isOpenc" class="radioswitcher-inputs">
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoc" value="coption2">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/compressed_copper_block.png" width="25" height="25"></div>Block</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoc" value="coption3">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/compressed_copper_door.png" width="25" height="25"></div>Door</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoc" value="coption7">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/compressed_copper_trapdoor.png" width="25" height="25"></div>Trapdoor</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoc" value="coption4">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/compressed_copper_stairs.png" width="25" height="25"></div>Stairs</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoc" value="coption5">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/compressed_copper_slab.png" width="25" height="25"></div>Slab</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoc" value="coption1">
    <span class="name"><div class="img"><img src="../ass-sets/blocks/compressed_copper_bars.png" width="25" height="25"></div>Bars</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfoc" value="coption6">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/compressed_copper_tiles.png" width="25" height="25"></div>Tiles</span>
  </label>
</div>

<button @click="isOpenc = !isOpenc">
{{ isOpenc ? "▲ Read Less" : "▼ Read More" }}
</button>

<!-- Transition Wrapper for Collapsible Info Box -->
<transition name="slide">
  <div v-if="isOpenc" class="info-box" v-html="compiledMarkdownCom"></div>
</transition>

[**Compressed Copper**](/items/misc.html#compressed-copper) is a new variant for [Copper](https://minecraft.wiki/w/Copper)
- Compressed Copper is the base for a lot of the [Advanced](/advanced_system.html) blocks and items used in the addon.

### It is important to note **Doors and Trapdoors** are locked when not powered by redstone.
- Once they are powered, then they can be opened like a normal door.
- This text is emphasized because I think it would be easy to miss lol

</div>

<!--:::-->

## Glorium 
<!--::: details Click to Expand ![img](../ass-sets/glorium.png)-->

<div class="info-box">
<div v-if="isOpeng" class="radioswitcher-inputs">
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfog" value="goption2">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/glowing_mushroom.png" width="25" height="25"></div>Glowing Mushroom</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfog" value="goption3">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/glowing_mushroom_block.png" width="25" height="25"></div>Glowing Mushroom Block</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfog" value="goption4">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/glowing_mycelium.png" width="25" height="25"></div>Glowing Mycelium</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfog" value="goption1">
    <span class="name"><div class="img"><img src="../ass-sets/blocks/deepslate_glowing_mycelium.png" width="25" height="25"></div>Deepslate Glowing Mycelium</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfog" value="goption5">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/glowing_roots.png" width="25" height="25"></div>Glowing Roots</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfog" value="goption12">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/glorium_crystals.png" width="25" height="25"></div>Crystals</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfog" value="goption13">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/glorium_crystals_medium.png" width="25" height="25"></div>Crystals Medium</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfog" value="goption14">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/glorium_crystals_small.png" width="25" height="25"></div>Crystals Small</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfog" value="goption15">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/glorium_crystals_tiny.png" width="25" height="25"></div>Crystals Tiny</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfog" value="goption16">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/glorium_crystal_block.png" width="25" height="25"></div>Crystal Block</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfog" value="goption17">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/glorium_crystal_block_budding.png" width="25" height="25"></div>Budding Crystal Block</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfog" value="goption10">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/gloricalium_block.png" width="25" height="25"></div>Block</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfog" value="goption11">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/gloricalium_grate.png" width="25" height="25"></div>Grate</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfog" value="goption7">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/cut_gloricalium_block.png" width="25" height="25"></div>Cut Block</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfog" value="goption8">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/discharged_gloricalium_block.png" width="25" height="25"></div>Discharged Block</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfog" value="goption9">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/discharged_gloricalium_grate.png" width="25" height="25"></div>Discharged Grate</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfog" value="goption6">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/cut_discharged_gloricalium_block.png" width="25" height="25"></div>Cut Discharged Block</span>
  </label>
</div>

<button @click="isOpeng = !isOpeng">
{{ isOpeng ? "▲ Read Less" : "▼ Read More" }}

</button>

<!-- Transition Wrapper for Collapsible Info Box -->
<transition name="slide">
  <div v-if="isOpeng" class="info-box" v-html="compiledMarkdownGlo"></div>
</transition>

**Glorium** and **Gloricallium** is the base for a lot of the other new fancy tech used in the addon
- It is found in [**Glorium Caverns**](/features.html#glorium-cavern) found in ocean caves
- The cystals found in the biome can be harvested to create **Gloricallium**

### Creating Gloricalium
Gloicalium has a process of creation similar to **Netherite**
1. Smelt a **Glorium Shard**

<div class="smelting-background">
    <div class="smelting-item-result"> <span class="c-tooltip-text">Gloricalium Scrap</span> <img src="../ass-sets/items/gloricalium_scrap.png"/> </div>
    <div class="smelting-item-input"> <span class="c-tooltip-text">Glorium Shard</span> <img src="../ass-sets/items/glorium_shard.png"/> </div>
    <div class="smelting-item-fuel"> <span class="c-tooltip-text">Any Fuel</span> <img src="https://minecraft.wiki/images/Coal_JE4_BE3.png"/> </div>
</div>

2. Combine the scrap with [**Iron Nuggets**](https://minecraft.wiki/w/Iron_Nugget)
<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Gloricalium Sheet</span> <img src="../ass-sets/items/gloricalium_sheet.png"/> </div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Gloricalium Scrap</span> <img src="../ass-sets/items/gloricalium_scrap.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Gloricalium Scrap</span> <img src="../ass-sets/items/gloricalium_scrap.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Gloricalium Scrap</span> <img src="../ass-sets/items/gloricalium_scrap.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Iron Nugget</span> <img src="https://minecraft.wiki/images/Iron_Nugget_JE1_BE1.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Iron Nugget</span> <img src="https://minecraft.wiki/images/Iron_Nugget_JE1_BE1.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Iron Nugget</span> <img src="https://minecraft.wiki/images/Iron_Nugget_JE1_BE1.png"/> </div>
  </div>
</div>

These sheets can then be used for a number of different components

- Gloricalium is known for being extemely bright and reflective. Hence their appearence in Vibrant Visuals or RTX

<img src ="../ass-sets/vv_gloricalium.png" width=242px/>

</div>

<!--:::-->

## Soul Sandstone 
<!--::: details Click to Expand ![img](../ass-sets/soulsandstone.png)-->

<div class="info-box">
<div v-if="isOpens" class="radioswitcher-inputs">
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfos" value="soption2">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/soul_sandstone.png" width="25" height="25"></div>Sandstone</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfos" value="soption3">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/soul_sandstone_carved.png" width="25" height="25"></div>Carved</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfos" value="soption4">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/soul_sandstone_cut.png" width="25" height="25"></div>Cut</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfos" value="soption5">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/soul_sandstone_smooth.png" width="25" height="25"></div>Smooth</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfos" value="soption6">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/soul_sandstone_stairs.png" width="25" height="25"></div>Stairs</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfos" value="soption7">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/soul_sandstone_slab.png" width="25" height="25"></div>Slab</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfos" value="soption8">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/soul_sandstone_wall.png" width="25" height="25"></div>Wall</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfos" value="soption1">
        <span class="name"><div class="img"><img src="../ass-sets/blocks/soulbush.png" width="25" height="25"></div>Soulbush</span>
  </label>
</div>

<button @click="isOpens = !isOpens">
{{ isOpens ? "▲ Read Less" : "▼ Read More" }}
</button>

<!-- Transition Wrapper for Collapsible Info Box -->
<transition name="slide">
  <div v-if="isOpens" class="info-box" v-html="compiledMarkdownSou"></div>
</transition>

**Soul Sandstone** is a sandstone variant of [Sandstone](https://minecraft.wiki/w/Sandstone) and it's variants.
- The carved Sandstone is suppose to resemble a [Ghast](https://minecraft.wiki/w/Ghast)

</div>
<!--:::-->

<script setup>
import { computed, ref } from "vue";
import { marked } from "marked";

const selectedInfoa = ref("option1");
const selectedInfoe = ref("eoption1");
const selectedInfop = ref("poption1");
const selectedInfoc = ref("coption1");
const selectedInfog = ref("goption1");
const selectedInfos = ref("soption1");
const selectedBNB = ref("1");
const isOpen = ref(true);
const isOpena = ref(true);
const isOpenp = ref(true);
const isOpenc = ref(true);
const isOpeng = ref(true);
const isOpens = ref(true);


const blueNetherBricks = [
    `
## Blue Nether Bricks
![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_bricks.png?raw=true)
\`vc:blue_nether_bricks\`
| Component | Value |
|---|---|
|Breaking time (secs)|5|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|No|

### About:
    `,
    `
## Blue Nether Brick Stairs

![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_brick_stairs.png?raw=true)
\`vc:blue_nether_brick_stairs\`
| Component | Value |
|---|---|
|Breaking time (secs)|10|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|No|
|Waterloggable|Yes|
|Placement Style|Directional|

### About:

    `,
    `
## Blue Nether Brick Slab

![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/blue_nether_brick_slab.png?raw=true)
\`vc:blue_nether_brick_slab\`
| Component | Value |
|---|---|
|Breaking time (secs)|10|
|Luminous|No|
|Blast resistance|_Not Set_|
|Flammable|No|
|Conducts Redstone|No|
|Waterloggable|Yes|
|Placement Style|Directional|

### About:

    `
]
const blockDataAza = [
  { name: "Azalea Planks", file: "azalea_planks", vc: "azalea_planks", breakingTime: 3, flammable: "Yes (5)" , info: ""},
  { name: "Azalea Stairs", file: "azalea_stairs", vc: "azalea_stairs", breakingTime: 3, flammable: "Yes (5)", placement: "Directional" , info: ""},
  { name: "Azalea Slab", file: "azalea_slab", vc: "azalea_slab", breakingTime: 3, flammable: "Yes (5)", placement: "Directional" , info: ""},
  { name: "Azalea Door", file: "azalea_door", vc: "azalea_door", breakingTime: 2.5, flammable: "Yes (5)", placement: "Directional" , info: ""},
  { name: "Azalea Trapdoor", file: "azalea_trapdoor", vc: "azalea_trapdoor", breakingTime: 3, flammable: "Yes (5)", placement: "Directional" , info: ""},
  { name: "Azalea Fence", file: "azalea_fence", vc: "azalea_fence", breakingTime: 2.5, flammable: "Yes (5)" , info: "", placement: "Situational"},
  { name: "Azalea Fence Gate", file: "azalea_fence_gate", vc: "azalea_fence_gate", breakingTime: 2.5, flammable: "Yes (5)", placement: "Directional" , info: ""},
  { name: "Azalea Log", file: "azalea_log", vc: "azalea_log", breakingTime: 1.1, blastResistance: 0, flammable: "No", placement: "Positional" , info: ""},
  { name: "Azalea Wood", file: "azalea_wood", vc: "azalea_wood", breakingTime: 1.1, blastResistance: 0, flammable: "No", placement: "Positional" , info: ""},
  { name: "Stripped Azalea Log", file: "stripped_azalea_log", vc: "stripped_azalea_log", breakingTime: 1.1, blastResistance: 0, flammable: "No", placement: "Positional" , info: ""},
  { name: "Stripped Azalea Wood", file: "stripped_azalea_wood", vc: "stripped_azalea_wood", breakingTime: 1.1, blastResistance: 0, flammable: "No", placement: "Positional", info: "" }
];
const blockDataElax = [
  { name: "Zalu Block", file: "zalu_block", vc: "zalu_block", breakingTime: 5, luminous: "No", blastResistance: 9, flammable: "No", conductsRedstone: "No", info: "" },
  { name: "Zalu Plant", file: "zalu_plant", vc: "zalu_plant", breakingTime: 0.1, luminous: "Yes (3)", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No", info: ""},
  { name: "Zalu Roots", file: "zalu_roots", vc: "zalu_roots", breakingTime: 0.1, luminous: "Yes (1)", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No", info: "" },
  { name: "Elax Fence", file: "elax_fence", vc: "elax_fence", breakingTime: 2.5, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "No", info: "", placement: "Situational" },
  { name: "Elax Fence Gate", file: "elax_fence_gate", vc: "elax_fence_gate", breakingTime: 2.5, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "No", placement: "Directional", info: "" },
  { name: "Elax Floor Leaves", file: "elax_floor_leaves", vc: "elax_floor_leaves", breakingTime: 0.3, luminous: "No", blastResistance: 0, flammable: "No", conductsRedstone: "No", info: "" },
  { name: "Elax Fungus", file: "elax_fungus", vc: "elax_fungus", breakingTime: 1.1, luminous: "No", blastResistance: 0, flammable: "No", conductsRedstone: "No", info: "" },
  { name: "Elax Fungus Crystalized", file: "elax_fungus_crystalized", vc: "elax_fungus_crystalized", breakingTime: 1.1, luminous: "Yes (3)", blastResistance: 0, flammable: "No", conductsRedstone: "No", info: "" },
  { name: "Elax Leaves", file: "elax_leaves", vc: "elax_leaves", breakingTime: 1.1, luminous: "No", blastResistance: 0, flammable: "No", conductsRedstone: "No", info: "" },
  { name: "Elax Log", file: "elax_log", vc: "elax_log", breakingTime: 1.1, luminous: "No", blastResistance: 0, flammable: "No", conductsRedstone: "No", placement: "Positional", info: "" },
  { name: "Elax Planks", file: "elax_planks", vc: "elax_planks", breakingTime: 3, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "No", info: "" },
  { name: "Elax Slab", file: "elax_slab", vc: "elax_slab", breakingTime: 3, luminous: "No", blastResistance: 6, flammable: "No", conductsRedstone: "No", placement: "Positional", info: "" },
  { name: "Elax Stairs", file: "elax_stairs", vc: "elax_stairs", breakingTime: 3, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "No", placement: "Directional", info: "" },
  { name: "Elax Trapdoor", file: "elax_trapdoor", vc: "elax_trapdoor", breakingTime: 3, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "No", placement: "Directional", info: "" },
  { name: "Elax Wood", file: "elax_wood", vc: "elax_wood", breakingTime: 1.1, luminous: "No", blastResistance: 0, flammable: "No", conductsRedstone: "No", placement: "Positional", info: "" },
  { name: "Stripped Elax Log", file: "stripped_elax_log", vc: "stripped_elax_log", breakingTime: 1.1, luminous: "No", blastResistance: 0, flammable: "No", conductsRedstone: "No", placement: "Positional", info: "" },
  { name: "Stripped Elax Wood", file: "stripped_elax_wood", vc: "stripped_elax_wood", breakingTime: 1.1, luminous: "No", blastResistance: 0, flammable: "No", conductsRedstone: "No", placement: "Positional", info: "" },
  { name: "Elax Door", file: "elax_door", vc: "elax_door", breakingTime: 2.5, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "No", placement: "Directional", info: "" },
  { name: "Elax Sapling", file: "sapling_elax", vc: "sapling_elax", breakingTime: 0.5, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "No", info: "" }
];
const palmBlocks = [
  { name: "Palm Fence", file: "palm_fence", vc: "palm_fence", breakingTime: 2.5, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "No", info: "", placement: "Situational" },
  { name: "Palm Fence Gate", file: "palm_fence_gate", vc: "palm_fence_gate", breakingTime: 2.5, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "No", placement: "Directional", info: "" },
  { name: "Palm Leaves", file: "palm_leaves", vc: "palm_leaves", breakingTime: 3, luminous: "No", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No", info: "" },
  { name: "Palm Log", file: "palm_log", vc: "palm_log", breakingTime: 1.1, luminous: "No", blastResistance: 0, flammable: "No", conductsRedstone: "No", placement: "Positional", info: "" },
  { name: "Palm Planks", file: "palm_planks", vc: "palm_planks", breakingTime: 3, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "No", info: "" },
  { name: "Palm Stairs", file: "palm_stairs", vc: "palm_stairs", breakingTime: 3, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "No", placement: "Directional", info: "" },
  { name: "Palm Slab", file: "palm_slab", vc: "palm_slab", breakingTime: 3, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "No", placement: "Directional", info: "" },
  { name: "Palm Trailings", file: "palm_trailings", vc: "palm_trailings", breakingTime: 1.1, luminous: "No", blastResistance: 0, flammable: "Yes (5)", conductsRedstone: "No", info: "" },
  { name: "Palm Trapdoor", file: "palm_trapdoor", vc: "palm_trapdoor", breakingTime: 3, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "No", placement: "Directional", info: "" },
  { name: "Palm Wood", file: "palm_wood", vc: "palm_wood", breakingTime: 1.1, luminous: "No", blastResistance: 0, flammable: "No", conductsRedstone: "No", placement: "Positional", info: "" },
  { name: "Stripped Palm Log", file: "stripped_palm_log", vc: "stripped_palm_log", breakingTime: 1.1, luminous: "No", blastResistance: 0, flammable: "No", conductsRedstone: "No", placement: "Positional", info: "" },
  { name: "Stripped Palm Wood", file: "stripped_palm_wood", vc: "stripped_palm_wood", breakingTime: 1.1, luminous: "No", blastResistance: 0, flammable: "No", conductsRedstone: "No", placement: "Positional", info: ""},
  { name: "Palm Sapling", file: "sapling_palm", vc: "palm_sapling", breakingTime: 0.5, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "No", info: "" }
];
const compressedCopper = [
  { name: "Compressed Copper Bars", file: "compressed_copper_bars", vc: "compressed_copper_bars", breakingTime: 6.5, luminous: "No", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No", placement: "Situational" },
  { name: "Compressed Copper Block", file: "compressed_copper_block", vc: "compressed_copper_block", breakingTime: 25, luminous: "No", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No" },
  { name: "Compressed Copper Door", file: "compressed_copper_door", vc: "compressed_copper_door", breakingTime: 2.5, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "Yes", placement: "Directional" },
  { name: "Compressed Copper Stairs", file: "compressed_copper_stairs", vc: "compressed_copper_stairs", breakingTime: 25, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "No", placement: "Directional" },
  { name: "Compressed Copper Slab", file: "compressed_copper_slab", vc: "compressed_copper_slab", breakingTime: 25, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "No", placement: "Directional" },
  { name: "Compressed Copper Tiles", file: "compressed_copper_tiles", vc: "compressed_copper_tiles", breakingTime: 25, luminous: "No", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No" },
  { name: "Compressed Copper Trapdoor", file: "compressed_copper_trapdoor", vc: "compressed_copper_trapdoor", breakingTime: 10, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "No", placement: "Directional" }
]
const glorium = [
  { name: "Deepslate Glowing Mycelium", file: "deepslate_glowing_mycelium", vc: "deepslate_glowing_mycelium", breakingTime: 10, luminous: "No", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No" },
  { name: "Glowing Mushroom", file: "glowing_mushroom", vc: "no:glowing_mushroom", breakingTime: 0.1, luminous: "Yes (5)", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No" },
  { name: "Glowing Mushroom Block", file: "glowing_mushroom_block", vc: "glowing_mushroom_block", breakingTime: 0.3, luminous: "Yes (7)", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No" },
  { name: "Glowing Mycelium", file: "glowing_mycelium", vc: "glowing_mycelium", breakingTime: 7.5, luminous: "No", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No" },
  { name: "Glowing Roots", file: "glowing_roots", vc: "no:glowing_roots", breakingTime: 0.1, luminous: "Yes (5)", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No" },
  { name: "Cut Discharged Gloricalium Block", file: "cut_discharged_gloricalium_block", vc: "cut_discharged_gloricalium_block", breakingTime: 14, luminous: "No", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No" },
  { name: "Cut Gloricalium Block", file: "cut_gloricalium_block", vc: "cut_gloricalium_block", breakingTime: 14, luminous: "Yes (1)", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "Yes" },
  { name: "Discharged Gloricalium Block", file: "discharged_gloricalium_block", vc: "discharged_gloricalium_block", breakingTime: 14, luminous: "No", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No" },
  { name: "Discharged Gloricalium Grate", file: "discharged_gloricalium_grate", vc: "discharged_gloricalium_grate", breakingTime: 14, luminous: "No", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No", waterloggable: "Yes" },
  { name: "Gloricalium Block", file: "gloricalium_block", vc: "gloricalium_block", breakingTime: 14, luminous: "Yes (1)", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "Yes" },
  { name: "Gloricalium Grate", file: "gloricalium_grate", vc: "gloricalium_grate", breakingTime: 14, luminous: "Yes (1)", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No", waterloggable: "Yes" },
  { name: "Glorium Crystals", file: "glorium_crystals", vc: "glorium_crystals", breakingTime: 10, luminous: "Yes (10)", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No", waterloggable: "Yes", placement: "Positional" },
  { name: "Glorium Crystals Medium", file: "glorium_crystals_medium", vc: "glorium_crystals_medium", breakingTime: 10, luminous: "Yes (10)", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No", waterloggable: "Yes", placement: "Positional" },
  { name: "Glorium Crystals Small", file: "glorium_crystals_small", vc: "glorium_crystals_small", breakingTime: 10, luminous: "Yes (10)", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No", waterloggable: "Yes", placement: "Positional" },
  { name: "Glorium Crystals Tiny", file: "glorium_crystals_tiny", vc: "glorium_crystals_tiny", breakingTime: 10, luminous: "Yes (10)", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No", waterloggable: "Yes", placement: "Positional" },
  { name: "Glorium Crystal Block", file: "glorium_crystal_block", vc: "glorium_crystal_block", breakingTime: 5, luminous: "No", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No" },
  { name: "Glorium Crystal Block Budding", file: "glorium_crystal_block_budding", vc: "glorium_crystal_block_budding", breakingTime: 5, luminous: "No", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No" }
]
const lumersion = [
  { name: "Lumerison Fungus", file: "lumerison_fungus", vc: "lumerison_fungus", breakingTime: 0.1, luminous: "Yes (5)", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No" },
  { name: "Lumerison Fungus Block", file: "lumerison_fungus_block", vc: "lumerison_fungus_block", breakingTime: 1.1, luminous: "Yes (5)", blastResistance: 0, flammable: "No", conductsRedstone: "No" },
  { name: "Lumerison Moss", file: "lumerison_moss", vc: "lumerison_moss", breakingTime: 15, luminous: "No", blastResistance: 9, flammable: "No", conductsRedstone: "No" },
  { name: "Lumerison Roots", file: "lumerison_roots", vc: "lumerison_roots", breakingTime: 0.1, luminous: "Yes (1)", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No" }
]
const soulsandstone = [
  { name: "Soulbush", file: "soulbush", vc: "soulbush", breakingTime: 0.1, luminous: "No", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No" },
  { name: "Soul Sandstone", file: "soul_sandstone", vc: "soul_sandstone", breakingTime: 10, luminous: "No", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No" },
  { name: "Soul Sandstone Carved", file: "soul_sandstone_carved", vc: "soul_sandstone_carved", breakingTime: 10, luminous: "No", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No" },
  { name: "Soul Sandstone Cut", file: "soul_sandstone_cut", vc: "soul_sandstone_cut", breakingTime: 10, luminous: "No", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No" },
  { name: "Soul Sandstone Smooth", file: "soul_sandstone_smooth", vc: "soul_sandstone_smooth", breakingTime: 10, luminous: "No", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No" },
  { name: "Soul Sandstone Stairs", file: "soul_sandstone_stairs", vc: "soul_sandstone_stairs", breakingTime: 10, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "No", placement: "Directional" },
  { name: "Soul Sandstone Slab", file: "soul_sandstone_slab", vc: "soul_sandstone_slab", breakingTime: 10, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "No", placement: "Directional" },
  { name: "Soul Sandstone Wall", file: "soul_sandstone_wall", vc: "soul_sandstone_wall", breakingTime: 10, luminous: "No", blastResistance: "_Not Set_", flammable: "Yes (5)", conductsRedstone: "No", placement: "Situational" }
  
  //{ name: "Snow Bricks", file: "snowbrick", vc: "snowbrick", breakingTime: 5, luminous: "No", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No" },
  //{ name: "Snow Brick Stairs", file: "snow_brick_stairs", vc: "snow_brick_stairs", breakingTime: 5, luminous: "No", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No", placement: "Directional" },
  //{ name: "Snow Brick Slab", file: "snow_brick_slab", vc: "snow_brick_slab", breakingTime: 5, luminous: "No", blastResistance: "_Not Set_", flammable: "No", conductsRedstone: "No", placement: "Directional" }
];

const generateBlockInfo = ({ name, file, vc, breakingTime, blastResistance = "_Not Set_", flammable, placement, info = "" }) => `
## ${name}

<img src="https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/blocks/${file}.png?raw=true" alt="img" title="${name}">
<code>vc:${vc}</code>

| Component | Value |
|---|---|
|Breaking time (secs)|${breakingTime}|
|Luminous|No|
|Blast resistance|${blastResistance}|
|Flammable|${flammable}|
|Conducts Redstone|No|
${placement ? `|Placement Style|${placement}|\n` : ""}

${info ? `### About:\n${info}` : ''}
`;

const infoAza = blockDataAza.reduce((acc, block, index) => {
  acc[`option${index + 1}`] = generateBlockInfo(block);
  return acc;
}, {});
const infoEla = blockDataElax.reduce((acc, block, index) => {
  acc[`eoption${index + 1}`] = generateBlockInfo(block);
  return acc;
}, {});

const infoPalm = palmBlocks.reduce((acc, block, index) => {
  acc[`poption${index + 1}`] = generateBlockInfo(block);
  return acc;
}, {});

const infoCompCopper = compressedCopper.reduce((acc, block, index) => {
  acc[`coption${index + 1}`] = generateBlockInfo(block);
  return acc;
}, {});

const infoGlorium = glorium.reduce((acc, block, index) => {
  acc[`goption${index + 1}`] = generateBlockInfo(block);
  return acc;
}, {});

const infoSoulSS = soulsandstone.reduce((acc, block, index) => {
  acc[`soption${index + 1}`] = generateBlockInfo(block);
  return acc;
}, {});


const compiledMarkdownAza = computed(() => marked(infoAza[selectedInfoa.value].replace('vc:no:', 'no:')));
const compiledMarkdownEla = computed(() => marked(infoEla[selectedInfoe.value].replace('vc:no:', 'no:')));
const compiledMarkdownPal = computed(() => marked(infoPalm[selectedInfop.value].replace('vc:no:', 'no:')));
const compiledMarkdownCom = computed(() => marked(infoCompCopper[selectedInfoc.value].replace('vc:no:', 'no:')));
const compiledMarkdownGlo = computed(() => marked(infoGlorium[selectedInfog.value].replace('vc:no:', 'no:')));
const compiledMarkdownSou = computed(() => marked(infoSoulSS[selectedInfos.value].replace('vc:no:', 'no:')));

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
