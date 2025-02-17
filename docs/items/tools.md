# Tool Items

## Advanced Filter

![img](../ass-sets/items/advanced_filter.png)
`vc:advanced_filter`
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No|

### About:

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

The copper wrench is a tool that can be used to rotate blocks 90 degrees

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

## Glareizer

![img](../ass-sets/items/glareizer.png)
`vc:glareizer`
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|Yes (14)|
|Deals Damage|No|
|Max Durability|250|

### About:

## Dispenser Minecart

![img](../ass-sets/items/dispenser_minecart.png)
`vc:dispenser_minecart`
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No|

### About:

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

## Rotten Tomato

![img](../ass-sets/items/rotten_tomato.png)
`vc:rotten_tomato`
| Component | Value |
|---|---|
|Stackable|Yes (64)|
|Enchantable|No|
|Deals Damage|No|

### About:

## Unwritten Scroll

![img](../ass-sets/items/unwritten_scroll.png)
`vc:unwritten_scroll`
| Component | Value |
|---|---|
|Stackable|Yes (64)|
|Enchantable|No|
|Deals Damage|No|

### About:

## Sled

![img](../ass-sets/items/sled.png)
`vc:sled`
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No|

### About:

## Golden Tomato

![img](../ass-sets/items/tomato_golden.png)
`vc:tomato_golden`
| Component | Value |
|---|---|
|Stackable|Yes (64)|
|Enchantable|No|
|Deals Damage|No|

### About:

## Totem Of Illusion

![img](../ass-sets/items/totem_of_illusion.png)
`vc:totem_of_illusion`
| Component | Value |
|---|---|
|Stackable|No|
|Enchantable|No|
|Deals Damage|No|

### About:

## Wither Bone Meal

![img](../ass-sets/items/wither_bone_meal.png)
`vc:wither_bone_meal`
| Component | Value |
|---|---|
|Stackable|Yes (64)|
|Enchantable|No|
|Deals Damage|No|

### About:


<script setup>
import { computed, ref } from "vue";
import { marked } from "marked";
const selectedPot = ref("1");
const potions = [
`
## Potion Of Blindness

![img](../ass-sets/items/potion_of_blindness.png)
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

![img](../ass-sets/items/potion_of_levitation.png)
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

![img](../ass-sets/items/milk_bottle.png)
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

![img](../ass-sets/items/splash_potion_of_blindness.png)
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

![img](../ass-sets/items/splash_potion_of_levitation.png)
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

![img](../ass-sets/items/splash_milk_bottle.png)
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

![img](../ass-sets/items/lingering_potion_of_blindness.png)
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

![img](../ass-sets/items/lingering_potion_of_levitation.png)
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

![img](../ass-sets/items/lingering_milk_bottle.png)
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