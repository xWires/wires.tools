<script setup>
useSeoMeta({
  title: 'XML Validator - TangledWires Tools',
  ogTitle: 'XML Validator - TangledWires Tools',
  twitterTitle: 'XML Validator - TangledWires Tools',
});

import BaseButton from "~/components/BaseButton.vue";

import { useTemplateRef } from "vue";
import { XMLParser } from "fast-xml-parser";

const input = useTemplateRef("input");
const errorContainer = useTemplateRef("error-container");
const successContainer = useTemplateRef("success-container");
const error = useTemplateRef("error");

const parser = new XMLParser();

function validateXml() {
  successContainer.value.style.display = "none";
  errorContainer.value.style.display = "none";
  try {
    parser.parse(input.value.value, { allowBooleanAttributes: true });
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
    <p style="font-size: 30px">XML Validator</p>
    <div style="margin-top: 15px; margin-bottom: 15px;">
      <p style="font-size: 25px; margin-bottom: 15px">Input</p>
      <textarea ref="input" class="glowing-border-green" style="width: 100%; height: 150px"></textarea>
    </div>
    <BaseButton @click="validateXml">Validate</BaseButton>
    <div ref="error-container" class="glowing-border-red" style="margin-top: 50px; display: none">
      <p style="font-size: 25px;">Invalid XML</p>
      <br>
      <pre style="white-space: pre-wrap"><code ref="error"></code></pre>
    </div>
    <div ref="success-container" class="glowing-border-green" style="margin-top: 50px; display: none">
      <p style="font-size: 25px;">Valid XML!</p>
    </div>
  </div>
</template>