<script setup lang="ts">
const popover = ref();

function buttonClick(e: any) {
  popover.value.toggle(e);
}
</script>
<template>
  <Button label="Click me" @click="buttonClick" />
  <Popover ref="popover">
    Click somewhere in here and it will take two clicks outside the popover to close it
  </Popover>
</template>
