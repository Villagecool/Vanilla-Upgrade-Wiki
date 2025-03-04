# Mobs
|Sound|Definition|Id|
|--|--|--|
|a|a|a|
<button class="sound-button" @click="playSound('https://www.myinstants.com/media/sounds/vine-boom.mp3')">🔊</button> <button class="sound-button" @click="playSound('https://www.myinstants.com/media/sounds/vine-boom.mp3')">🔊</button> | Test | test.test.test |
<button class="sound-button" @click="playSound('https://www.myinstants.com/media/sounds/tuco-get-out.mp3')">🔊</button> | GET OUT | get.out

<script>
export default {
  methods: {
    playSound(url) {
      let audio = new Audio(url);
      audio.play().catch(error => console.error("Playback failed:", error));
    }
  }
};
</script>

<style>
.sound-button {
  position: inline;
  bottom: -10px; /* Adjust as needed */
  right: -10px; /* Adjust as needed */
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px; /* Adjust size */
  padding: 2px;
  z-index: 10;
}

.sound-button:hover {
  color: #ffcc00; /* Optional: Change color on hover */
}
.sound-button:active {
  color: #634F00; /* Optional: Change color on hover */
}
</style>