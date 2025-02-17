# Features

## Azalea

<div class="info-box">
<div class="radioswitcher-inputs">
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfo" value="option1">
    <span class="name"><div class="img"><img src="./ass-sets/blocks/azalea_planks.png" width="25" height="25"></div>Block</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfo" value="option2">
        <span class="name"><div class="img"><img src="./ass-sets/blocks/azalea_stairs.png" width="25" height="25"></div>Stairs</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfo" value="option3">
        <span class="name"><div class="img"><img src="./ass-sets/blocks/azalea_slab.png" width="25" height="25"></div>Slab</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfo" value="option4">
        <span class="name"><div class="img"><img src="./ass-sets/blocks/azalea_door.png" width="25" height="25"></div>Door</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfo" value="option45">
        <span class="name"><div class="img"><img src="./ass-sets/blocks/azalea_trapdoor.png" width="25" height="25"></div>Trapdoor</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfo" value="option5">
        <span class="name"><div class="img"><img src="./ass-sets/blocks/azalea_fence.png" width="25" height="25"></div>Fence</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfo" value="option6">
        <span class="name"><div class="img"><img src="./ass-sets/blocks/azalea_fence_gate.png" width="25" height="25"></div>Fence Gate</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfo" value="option7">
        <span class="name"><div class="img"><img src="./ass-sets/blocks/azalea_log.png" width="25" height="25"></div>Log</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfo" value="option8">
        <span class="name"><div class="img"><img src="./ass-sets/blocks/azalea_wood.png" width="25" height="25"></div>Wood</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfo" value="option9">
        <span class="name"><div class="img"><img src="./ass-sets/blocks/stripped_azalea_log.png" width="25" height="25"></div>Stripeped Log</span>
  </label>
  <label class="radioswitcher">
    <input type="radio" name="radioswitcher" v-model="selectedInfo" value="option10">
        <span class="name"><div class="img"><img src="./ass-sets/blocks/stripped_azalea_wood.png" width="25" height="25"></div>Stripped Wood</span>
  </label>
</div>
<button @click="isOpen = !isOpen">
  {{ isOpen ? "Read More" : "Read Less" }}
</button>
<!-- Transition Wrapper for Collapsible Info Box -->
<transition name="slide">
  <div v-if="isOpen" class="info-box" v-html="compiledMarkdown"></div>
</transition>

Yummy
</div>

<script setup>
import { computed, ref } from "vue";
import { marked } from "marked";

const selectedInfo = ref("option1");
const isOpen = ref(true);

marked.setOptions({
  gfm: true,
  breaks: true,
});

const blockData = [
  { name: "Azalea Planks", file: "azalea_planks", vc: "azalea_planks", breakingTime: 3, flammable: "Yes (5)" },
  { name: "Azalea Stairs", file: "azalea_stairs", vc: "azalea_stairs", breakingTime: 3, flammable: "Yes (5)", placement: "Directional" },
  { name: "Azalea Slab", file: "azalea_slab", vc: "azalea_slab", breakingTime: 3, flammable: "Yes (5)", placement: "Directional" },
  { name: "Azalea Door", file: "azalea_door", vc: "azalea_door", breakingTime: 2.5, flammable: "Yes (5)", placement: "Directional" },
  { name: "Azalea Trapdoor", file: "azalea_trapdoor", vc: "azalea_trapdoor", breakingTime: 3, flammable: "Yes (5)", placement: "Directional" },
  { name: "Azalea Fence", file: "azalea_fence", vc: "azalea_fence", breakingTime: 2.5, flammable: "Yes (5)" },
  { name: "Azalea Fence Gate", file: "azalea_fence_gate", vc: "azalea_fence_gate", breakingTime: 2.5, flammable: "Yes (5)", placement: "Directional" },
  { name: "Azalea Log", file: "azalea_log", vc: "azalea_log", breakingTime: 1.1, blastResistance: 0, flammable: "No", placement: "Positional" },
  { name: "Azalea Wood", file: "azalea_wood", vc: "azalea_wood", breakingTime: 1.1, blastResistance: 0, flammable: "No", placement: "Positional" },
  { name: "Stripped Azalea Log", file: "stripped_azalea_log", vc: "stripped_azalea_log", breakingTime: 1.1, blastResistance: 0, flammable: "No", placement: "Positional" },
  { name: "Stripped Azalea Wood", file: "stripped_azalea_wood", vc: "stripped_azalea_wood", breakingTime: 1.1, blastResistance: 0, flammable: "No", placement: "Positional" }
];

const generateBlockInfo = ({ name, file, vc, breakingTime, blastResistance = "_Not Set_", flammable, placement }) => `
## ${name}

![img](./ass-sets/blocks/${file}.png)
\`vc:${vc}\`
| Component | Value |
|---|---|
|Breaking time (secs)|${breakingTime}|
|Luminous|No|
|Blast resistance|${blastResistance}|
|Flammable|${flammable}|
|Conducts Redstone|No|
${placement ? `|Placement Style|${placement}|\n` : ""}
### About:
`;

const info = blockData.reduce((acc, block, index) => {
  acc[`option${index + 1}`] = generateBlockInfo(block);
  return acc;
}, {});



const compiledMarkdown = computed(() => marked(info[selectedInfo.value]));
const formattedInfo = computed(() => {
  // Replace newline characters with <br>
  return info[selectedInfo.value].replace(/\n/g, '<br>');
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
