<script setup>
import { useTemplateRef } from "vue";
import jsonlint from "jsonlint-mod";

const input = useTemplateRef("input");
const errorContainer = useTemplateRef("error-container");
const successContainer = useTemplateRef("success-container");
const error = useTemplateRef("error");

function validateJson() {
  successContainer.value.style.display = "none";
  errorContainer.value.style.display = "none";
  try {
    jsonlint.parse(input.value.value);
    successContainer.value.style.display = "block";
  }
  catch (e) {
    errorContainer.value.style.display = "block";
    error.value.innerHTML = e.toString();
  }
}
</script>

<template>
  <div>
    <p style="font-size: 30px">JSON Validator</p>
    <div style="margin-top: 15px; margin-bottom: 15px;">
      <p style="font-size: 25px; margin-bottom: 15px">Input</p>
      <textarea ref="input" class="glowing-border-green" style="width: 100%; height: 150px"></textarea>
    </div>
    <button @click="validateJson" class="glowing-border-green transition duration-150 ease-in-out hover:scale-105">Validate</button>
    <div ref="error-container" class="glowing-border-red" style="margin-top: 50px; display: none">
      <p style="font-size: 25px;">Invalid JSON</p>
      <br>
      <pre style="white-space: pre-wrap"><code ref="error"></code></pre>
    </div>
    <div ref="success-container" class="glowing-border-green" style="margin-top: 50px; display: none">
      <p style="font-size: 25px;">Valid JSON!</p>
    </div>
  </div>
</template>