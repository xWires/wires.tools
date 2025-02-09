<script setup>
import { useTemplateRef, onMounted } from "vue";
import { Buffer } from "buffer";

const convertButton = useTemplateRef("convert-button");
const modeDropdown = useTemplateRef("mode-dropdown");
const input = useTemplateRef("input");
const output = useTemplateRef("output");
const liveUpdateCheckbox = useTemplateRef("live-update-checkbox");

function convert() {
  switch (modeDropdown.value.options[modeDropdown.value.selectedIndex].text) {
    case "Decode":
      output.value.value = Buffer.from(input.value.value, "base64");
      break;
    case "Encode":
      output.value.value = Buffer.from(input.value.value, "utf8").toString("base64");
      break;
    default:
      break;
  }
}

onMounted(() => {
  convertButton.value.addEventListener("click", (e) => {
    convert();
  });
  input.value.addEventListener("input", (e) => {
    if (liveUpdateCheckbox.value.checked) {
      convert();
    }
  });
})
</script>

<template>
  <div>
    <p style="font-size: 30px">Base64 Encoder/Decoder</p>
    <div style="margin-top: 15px; margin-bottom: 15px;">
      <p style="font-size: 25px; margin-bottom: 15px">Input</p>
      <textarea ref="input" class="glowing-border-green" style="width: 100%; height: 150px"></textarea>
    </div>
    <div style="margin-top: 25px">
      <select ref="mode-dropdown" class="glowing-border-green">
        <option>Encode</option>
        <option>Decode</option>
      </select>
      <input ref="live-update-checkbox" type="checkbox" width="10px" height="10px" style="margin-left: 15px" />
      <span style="margin-left: 5px">Live Updating</span>
      <br>
      <button ref="convert-button" class="glowing-border-green transition duration-150 ease-in-out hover:scale-105" style="margin-top: 20px">Convert</button>
    </div>
    <div style="margin-top: 15px; margin-bottom: 15px;">
      <p style="font-size: 25px; margin-bottom: 15px">Output</p>
      <textarea ref="output" class="glowing-border-green" style="width: 100%; height: 150px" readonly></textarea>
    </div>
  </div>
</template>