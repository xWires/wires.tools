<script setup>
import { ref, useTemplateRef } from "vue";
import ExifReader from "exifreader";

let fileNameBox = useTemplateRef("fileName");
let tagTableBody = useTemplateRef("tagTableBody");

async function fileSelected(event) {
  tagTableBody.value.innerHTML = "";

  const file = event.target.files[0];
  fileNameBox.value.innerHTML = "File selected: " + file.name;
  const tags = await ExifReader.load(file);

  // MakerNote can be absolutely MASSIVE
  delete tags["MakerNote"];
  // So can ApplicationNotes
  delete tags["ApplicationNotes"];

  for (const [key, value] of Object.entries(tags)) {
    const row = tagTableBody.value.insertRow(0);
    const tagName = row.insertCell(0);
    const tagValue = row.insertCell(1);

    tagName.innerHTML = key;
    tagValue.innerHTML = value.value;
  }
}
</script>

<template>
  <div>
    <p style="font-size: 30px">Exif Data Reader</p>
    <div style="margin-top: 15px; margin-bottom: 15px">
      <label class="glowing-border-green" for="select-image">Select Image</label>
      <input id="select-image" type="file" accept="image/*" style="display: none" @change="event => fileSelected(event)">
      <span style="color: darkgray; padding-left: 10px">(Files will not be sent to any server)</span>
      <p ref="fileName" style="padding-top: 10px">File selected: None</p>
    </div>
    <div style="margin-top: 15px; margin-bottom: 15px">
      <table style="table-layout: fixed; width: 50%">
        <thead>
          <tr>
            <th>Tag Name</th>
            <th>Tag Value</th>
          </tr>
        </thead>
        <tbody ref="tagTableBody"></tbody>
      </table>
    </div>
  </div>
</template>

<style>
td {
  word-break: break-word;
}
</style>