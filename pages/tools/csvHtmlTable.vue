<script setup>
import {ref} from "vue";
import Papa from 'papaparse';

useSeoMeta({
  title: 'CSV to HTML Table - TangledWires Tools',
  ogTitle: 'CSV to HTML Table - TangledWires Tools',
  twitterTitle: 'CSV to HTML Table - TangledWires Tools',
});

const input = useTemplateRef("input");
const output = ref("");

const errors = ref("");

function convert() {
  const records = Papa.parse(input.value.value);

  console.debug(records);

  if (records.errors) {
    errors.value = records.errors.map(e => e.message).join("\n");
  } else {
    errors.value = "";
  }

  const columnNames = records.data[0];
  const data = records.data.slice(1);

  output.value = `<table>
  <thead>
    <tr>
      ${columnNames.map(columnName => `<th>${columnName}</th>`).join("\n      ")}
    </tr>
  </thead>
  <tbody>
    ${data.map(row => `<tr>
      ${row.map(col => `<td>${col}</td>`).join("\n      ")}
    </tr>`).join("\n    ")}
  </tbody>
</table>`;
}
</script>

<template>
  <div>
    <p style="font-size: 30px">CSV To HTML Table</p>
    <div style="margin-top: 15px; margin-bottom: 15px;">
      <p style="font-size: 25px; margin-bottom: 15px">Input</p>
      <textarea ref="input" class="glowing-border-green" style="width: 100%; height: 500px"></textarea>
    </div>
    <BaseButton @click="convert" style="margin-top: 20px">Convert</BaseButton>
    <div style="margin-top: 15px; margin-bottom: 15px;">
      <p style="font-size: 25px; margin-bottom: 15px">Output</p>
      <div v-if="errors" class="glowing-border-red" style="margin-bottom: 20px;">
        <p style="font-size: 25px;">Errors</p>
        <br>
        <pre style="white-space: pre-wrap"><code>{{ errors }}</code></pre>
      </div>
      <textarea class="glowing-border-green" style="width: 100%; height: 500px" readonly>{{ output }}</textarea>
    </div>
  </div>
</template>