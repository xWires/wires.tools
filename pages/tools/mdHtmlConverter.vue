<script setup>
import BaseButton from "~/components/BaseButton.vue";

import { ref, useTemplateRef } from "vue";
import { Converter } from "showdown";

const converter = new Converter();

const modeDropdown = useTemplateRef("mode-dropdown");
const input = useTemplateRef("input");
const output = ref("");

function convert() {
  switch (modeDropdown.value.options[modeDropdown.value.selectedIndex].text) {
    case "to HTML":
      output.value = converter.makeHtml(input.value.value);
      break;
    case "to Markdown":
      output.value = converter.makeMarkdown(input.value.value);
      break;
    default:
      break;
  }
}
</script>

<template>
  <div>
    <p style="font-size: 30px">Markdown &lt;--&gt; HTML</p>
    <div style="margin-top: 15px; margin-bottom: 15px;">
      <p style="font-size: 25px; margin-bottom: 15px">Input</p>
      <textarea ref="input" class="glowing-border-green" style="width: 100%; height: 150px"></textarea>
    </div>
    <div style="margin-top: 25px">
      <select ref="mode-dropdown" class="glowing-border-green">
        <option>to HTML</option>
        <option>to Markdown</option>
      </select>
      <br>
      <BaseButton @click="convert" style="margin-top: 20px">Convert</BaseButton>
    </div>
    <div style="margin-top: 15px; margin-bottom: 15px;">
      <p style="font-size: 25px; margin-bottom: 15px">Output</p>
      <textarea class="glowing-border-green" style="width: 100%; height: 150px" readonly>{{ output }}</textarea>
    </div>
  </div>
</template>