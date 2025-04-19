# Tool Items
::: warning Incomplete Article
This article is incomplete! So it may lack details or crucial information.
:::

## Advanced Filter <Badge type="danger">[**Advanced System**](/advanced_system.html)</Badge>

![img](../ass-sets/items/advanced_filter.png)
`vc:advanced_filter`
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No|

### About:
**Advanced Filters** are the base for a lot of the new **Advanced System** used in the add-on
- They are used to craft many of the new mechanichs
- On their own, they are also used to create **Specific Filters**
### The article over these items and tools can be found [**Here**](/advanced_system.html)


## Copper Wrench

![img](../ass-sets/items/copper_wrench.png)
`vc:copper_wrench`
|Component|Value|
|---|---|
|Stackable|No|
|Enchantable|Yes (10)|
|Deals Damage|Yes (4)|
|Max Durability|100|
|Damage Chance|5% - 10%|

### About

The **Copper Wrench** is a tool that can be used to rotate blocks 90 degrees
- When interacting with a block, if possible it will rotate 90 degrees clockwise along the y axis

### Crafting:

<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Copper Wrench</span> <img src="../ass-sets/items/copper_wrench.png"/> </div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Copper Ingot</span> <img src="https://minecraft.wiki/images/Copper_Ingot_JE2_BE1.png?0d410&20201111183617"/> </div>
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Compressed Copper</span> <img src="../ass-sets/items/compressed_copper.png"/> </div>
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Copper Ingot</span> <img src="https://minecraft.wiki/images/Copper_Ingot_JE2_BE1.png?0d410&20201111183617"/> </div>
  </div>
</div>

### Sounds
|Sound|Definition|Id|
|--|--|--|
<button class="sound-button" @click="playSound('https://github.com/Villagecool/Vanilla-Upgrade-Public-Source/blob/main/RP/sounds/random/wrench.ogg?raw=true')">🔊</button>|Wrench Rachets|random.wrench|

## Frozen Feather

![img](../ass-sets/items/frozen_feather.png)
`vc:frozen_feather`
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No|
|Use Duration|5|
|Max Durability|10|

### About:
**Frozen Feathers** are currently a drop from penguins, and are used to make <img src="../ass-sets/items/crystalized_experience.png" class="inline-img"/> [**Crystalized Experience**](/items/misc.html#crystalized-experience).
- Putting <img src="https://minecraft.wiki/images/Paper_JE2_BE2.png?9c3be" class="inline-img"/> **Paper** in your mainhand, and the **Frozen Feather** in your offhand, the player will begin to write.
  - This will Extract experience from the player, turning it into Crystalized Experience
  - This system may be subject to change


### Sounds
|Sound|Definition|Id|
|--|--|--|
<button class="sound-button" @click="playSound('https://github.com/Villagecool/Vanilla-Upgrade-Public-Source/blob/main/RP/sounds/random/crystalize_xp.ogg?raw=true')">🔊</button>|XP crystalizes|random.crystalize_xp|

## Glareizer

![img](../ass-sets/items/glareizer_atlas.gif)
`vc:glareizer`
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|Yes (14)|
|Deals Damage|No|
|Max Durability|250|

### About:
A **Glareizer** is a handheald contraption that tells the player how dark an area is.
- The darker an area is, the louder the glareizer will buzz
- Level 4 (the highest level) theoretically is where mobs are able to spawn

- Obiously, this is suppose to be a version of the [Glare](https://minecraft.wiki/w/Glare) in item form
- The Glareizer was inspired by the [Old EMF Reader](https://phasmophobia.fandom.com/wiki/EMF_Reader) in Phasmophobia
- The sounds were generated using [sfxr](https://sfxr.me/)

### Sounds
|Sound|Definition|Id|
|--|--|--|
<button class="sound-button" @click="playSound('https://github.com/Villagecool/Vanilla-Upgrade-Public-Source/blob/main/RP/sounds/item/glareizer/none.ogg?raw=true')">🔊</button>|Teir 0|glareizer.none|
<button class="sound-button" @click="playSound('https://github.com/Villagecool/Vanilla-Upgrade-Public-Source/blob/main/RP/sounds/item/glareizer/low.ogg?raw=true')">🔊</button>|Teir 1|glareizer.low|
<button class="sound-button" @click="playSound('https://github.com/Villagecool/Vanilla-Upgrade-Public-Source/blob/main/RP/sounds/item/glareizer/med.ogg?raw=true')">🔊</button>|Teir 2|glareizer.med|
<button class="sound-button" @click="playSound('https://github.com/Villagecool/Vanilla-Upgrade-Public-Source/blob/main/RP/sounds/item/glareizer/high.ogg?raw=true')">🔊</button>|Teir 3|glareizer.high|

## Dispenser Minecart

![img](../ass-sets/items/dispenser_minecart.png)
`vc:dispenser_minecart`
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No|

### About:
**Dispenser Minecarts** are exactally what they sound like, a dispenser in a minecart
- They are rapidly triggered by <img src="https://minecraft.wiki/images/Invicon_Activator_Rail.png?dbfe5" class="inline-img"/> [Activator Rails](https://minecraft.wiki/w/Activator_Rail)
- Many features may not work as expected due to bedrock addons being stupid 😔
- The item texture is just the <img src="https://minecraft.wiki/images/Invicon_Minecart_with_Furnace.png" class="inline-img"/>  Minecart Furnace texture with a hole on top

## Potions
<div class="info-box">
<div class="radioswitcher-inputs">
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedPot" value="1">
        <span class="name"><div class="img"><img src="https://minecraft.wiki/images/Water_Bottle_JE2_BE2.png?acae5" width="25" height="25"></div>Drinkable</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedPot" value="2">
        <span class="name"><div class="img"><img src="https://minecraft.wiki/images/Splash_Water_Bottle_JE2_BE2.png?7a92d" width="25" height="25"></div>Splash</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedPot" value="3">
        <span class="name"><div class="img"><img src="https://minecraft.wiki/images/Lingering_Water_Bottle_JE2_BE2.png?ed26b" width="25" height="25"></div>Lingering</span>
  </label>
</div>
<transition name="slide">
  <div class="info-box" v-html="compPot"></div>
</transition>
</div>

## Rope

![img](../ass-sets/items/rope.png)
`vc:rope`
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No|

### About:
**Ropes** are a new block/item that can be used to climb up and down areas from a ceiling
- Interacting with the rope while holding another rope will result in pillaring down.
- Interacting otherwise will allow the player to climb up and down
  - Interact with a layer of rope to climb to that specific location
- Breaking a rope will have it reel in

### Crafting:

<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Rope</span> <img src="../ass-sets/items/rope.png"/> </div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">String</span> <img src="https://minecraft.wiki/images/String_JE2_BE2.png"/> </div>
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">String</span> <img src="https://minecraft.wiki/images/String_JE2_BE2.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Slimeball</span> <img src="https://minecraft.wiki/images/Slimeball_JE2_BE2.png?ebe30&20190501035326"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">String</span> <img src="https://minecraft.wiki/images/String_JE2_BE2.png"/> </div>
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">String</span> <img src="https://minecraft.wiki/images/String_JE2_BE2.png"/> </div>
  </div>
</div>

## Rotten Saddle
![img](../ass-sets/items/rotten_saddle.png)

`vc:rotten_saddle`
|Component|Value|
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No (1)|
|Max Durability|10|
|Damage Chance||

### About
**Rotten Saddles** are a drop from the [Giant](/mobs.html#giant)
- When interacted with, a zombie horse will spawn for the player
- If you get off this horse, or it dies, the horse will despawn
- There is a 2 minute cooldown

## Rotten Tomato

![img](../ass-sets/items/rotten_tomato.png)
`vc:rotten_tomato`
| Component | Value |
|---|---|
|Stackable|Yes (64)|
|Enchantable|No|
|Deals Damage|1-2 HP <img class="heart"/>|

### About:
**WEAPONIZED VEGIETABLES**
- Rotten Tomatoes will sometimes come from [Tomato Plants](/items/crops.html#tomato-seeds)
- They can be trown
  - If one hits a block, it will stick

<img src="../ass-sets/rottentomatoes.png" width=422px/>

## Scroll

<div class="kinda-fancy-menu" width="fit-content"> 
<div class="img"><img src="../ass-sets/items/scroll.png"><code data-v-4a89f8d7="">vc:scroll</code></div>
<div class="img"><img src="../ass-sets/items/unwritten_scroll.png"><code data-v-4a89f8d7="">vc:unwritten_scroll</code></div>
</div>

| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No|

### About:
**Scrolls** are part of the [Knowlage Harvester](/blocks/functional.html#knowlage-harvester)'s system
- When crafted, you will recieve an **Unwritten Scroll**
- As soon as an Unwritten Scroll is in your inventory, one of two things will happen
  - If you have an extra xp level to give, the Unwritten Scroll will turn into a normal **Scroll**, asorbing the level.
  - If you dont have enough xp, the Unwritten Scroll will turn back into <img src="https://minecraft.wiki/images/Paper_JE2_BE2.png?9c3be" class="inline-img"/> paper.
- **Scrolls** can be consumed to gen a level back

## Sled

![img](../ass-sets/items/sled.png)
`vc:sled`
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No|

### About:
**Sleds** can be placed down to ride in
- Sleds will accellerate when going downhill

<img src="../ass-sets/items/sled_render.png" width=222px/>

### Crafting:

<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Sled</span> <img src="../ass-sets/items/sled.png"/> </div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"></div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Any Planks</span> <img src="https://minecraft.wiki/images/thumb/Oak_Planks.png/150px-Oak_Planks.png"/>  </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Any Planks</span> <img src="https://minecraft.wiki/images/thumb/Oak_Planks.png/150px-Oak_Planks.png"/>  </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Any Planks</span> <img src="https://minecraft.wiki/images/thumb/Oak_Planks.png/150px-Oak_Planks.png"/>  </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Any Planks</span> <img src="https://minecraft.wiki/images/thumb/Oak_Planks.png/150px-Oak_Planks.png"/>  </div>
  </div>
</div>

## Golden Tomato

![img](../ass-sets/items/tomato_golden.png)
`vc:tomato_golden`
| Component | Value |
|---|---|
|Stackable|Yes (64)|
|Enchantable|No|
|Deals Damage|6-8 HP <img class="heart"/><img class="heart"/><img class="heart"/>(<img class="heart"/>)|

### About:
**Golden Tomatoes** function very similarly to <img src="../ass-sets/items/rotten_tomato.png" class="inline-img"> [Rotten Tomatoes](#rotten-tomato), however dealing significantly more damage
- On collision, 2-8 of the golden nuggets used in the crafting recipie will break off.

### Crafting:

<div class="crafting-background">
    <div class="item-result"> <span class="c-tooltip-text">Golden Tomato</span> <img src="../ass-sets/items/tomato_golden.png"/> </div>
  <div class="crafting-grid">
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Gold Nugget</span> <img src="https://minecraft.wiki/images/Gold_Nugget_JE3_BE2.png?80cd6"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Gold Nugget</span> <img src="https://minecraft.wiki/images/Gold_Nugget_JE3_BE2.png?80cd6"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Gold Nugget</span> <img src="https://minecraft.wiki/images/Gold_Nugget_JE3_BE2.png?80cd6"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Gold Nugget</span> <img src="https://minecraft.wiki/images/Gold_Nugget_JE3_BE2.png?80cd6"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Tomato</span> <img src="../ass-sets/items/tomato.png"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Gold Nugget</span> <img src="https://minecraft.wiki/images/Gold_Nugget_JE3_BE2.png?80cd6"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Gold Nugget</span> <img src="https://minecraft.wiki/images/Gold_Nugget_JE3_BE2.png?80cd6"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Gold Nugget</span> <img src="https://minecraft.wiki/images/Gold_Nugget_JE3_BE2.png?80cd6"/> </div>
    <div class="crafting-grid-item"> <span class="c-tooltip-text">Gold Nugget</span> <img src="https://minecraft.wiki/images/Gold_Nugget_JE3_BE2.png?80cd6"/> </div>
  </div>
</div>

## Totem Of Illusion

![img](../ass-sets/items/totem_of_illusion.png)
`vc:totem_of_illusion`
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No|

### About:
While Holding a **Totem of Illusion**, the totem will be consumed, and 6 identical clones of the player will be created.
  - These clones will wear the same armor, and tools the original player has (when used)
  - If the clone is alive for long enough, or if damaged, they will dissappear in a poof of smoke
- Totems of Illusion can be dropped from the [Illusioner](/mobs.html#illusioner)


<img src="../ass-sets/mobs/playerclone.png" width=121px/>

### Sounds
|Sound|Definition|Id|
|--|--|--|
<button class="sound-button" @click="playSound('https://github.com/Villagecool/Vanilla-Upgrade-Public-Source/blob/main/RP/sounds/random/totem2.ogg?raw=true')">🔊</button>|Use Illusion Totem|random.totem2|
<button class="sound-button" @click="playSound('https://github.com/Villagecool/Vanilla-Upgrade-Public-Source/blob/main/RP/sounds/mob/player_clone/breathe.ogg?raw=true')">🔊</button>|Player Clone Breathes|mob.player_clone.idle|


## Wither Bone Meal

![img](../ass-sets/items/wither_bone_meal.png)
`vc:wither_bone_meal`
| Component | Value |
|---|---|
|Stackable|Yes (64)|
|Enchantable|No|
|Deals Damage|No|

### About:
**Wither Bone Meal** functions exactally like normal <img src="https://minecraft.wiki/images/Bone_Meal_JE3_BE3.png" class="inline-img"/> **Bone Meal**, however, it exclusively works on <img src="../ass-sets/items/warped_wart.png" class="inline-img"/> <img src="https://minecraft.wiki/images/Nether_Wart_%28item%29_JE2_BE1.png?65953" class="inline-img"/> Nether Warts


<script setup>
import { computed, ref } from "vue";
import { marked } from "marked";
const selectedPot = ref("1");
const potions = [
`
## Potion Of Blindness
![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/items/potion_of_blindness.png?raw=true)
\`vc:potion_of_blindness\`

\`vc:potion_of_blindness_II\`
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No|
|Use Duration|1.61|
|Nutrition|6|
|Saturation|1|
|Effect|Blindness|
|Effect Duration|1:30, Level 1 \\| 4:00, Level 2|

### About:

## Potion Of Levitation

![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/items/potion_of_levitation.png?raw=true)
\`vc:potion_of_levitation\`

\`vc:potion_of_levitation_II\`
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No|
|Use Duration|1.61|
|Nutrition|0|
|Saturation|1|
|Effect|Levitation|
|Effect Duration|1:30, Level 1 \\| 4:00, Level 2|

### About:

## Milk Bottle

![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/items/milk_bottle.png?raw=true)
\`vc:milk_bottle\`
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No|
|Use Duration|1.61|
|Nutrition|0|
|Saturation|1|
|Effect|Clears Effects|
|Effect Duration|N/A|

### About:
`,
`
## Splash Potion Of Blindness

![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/items/splash_potion_of_blindness.png?raw=true)
\`vc:splash_potion_of_blindness\`

\`vc:splash_potion_of_blindness_II\`
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No|
|Effect|Blindness|
|Effect Duration|1:30, Level 1 \\| 4:00, Level 2|

### About:

## Splash Potion Of Levitation

![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/items/splash_potion_of_levitation.png?raw=true)
\`vc:splash_potion_of_levitation\`

\`vc:splash_potion_of_levitation_II\`
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No|
|Effect|Levitation|
|Effect Duration|1:30, Level 1 \\| 4:00, Level 2|

### About:

## Splash Milk Bottle

![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/items/splash_milk_bottle.png?raw=true)
\`vc:splash_milk_bottle\`
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No|
|Effect|Clears Effects|
|Effect Duration|N/A|

### About:
`,
`

## Lingering Potion Of Blindness

![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/items/lingering_potion_of_blindness.png?raw=true)
\`vc:lingering_potion_of_blindness\`

\`vc:lingering_potion_of_blindness_II\`
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No|
|Effect|Blindness|
|Effect Duration|1:30, Level 1 \\| 4:00, Level 2|

### About:

## Lingering Potion Of Levitation

![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/items/lingering_potion_of_levitation.png?raw=true)
\`vc:lingering_potion_of_levitation\`

\`vc:lingering_potion_of_levitation_II\`
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No|
|Effect|Levitation|
|Effect Duration|1:30, Level 1 \\| 4:00, Level 2|

### About:

## Lingering Milk Bottle

![img](https://github.com/Villagecool/Vanilla-Upgrade-Wiki/blob/main/docs/ass-sets/items/lingering_milk_bottle.png?raw=true)
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No|
|Effect|Nothing|
|Effect Duration|N/A|

### About:
`
]
const compPot = computed(() => marked(potions[selectedPot.value-1]));

const formattedInfo = computed(() => {
  // Replace newline characters with <br>
  return info[selectedInfo.value].replace(/\n/g, '<br>').replace('vc:no:', 'no:');
});


    function playSound(url) {
      let audio = new Audio(url);
      audio.play().catch(error => console.error("Playback failed:", error));
    };
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
