<template>
  <div class="menu-btn t-a" @click="$emit('click')">
    <div
      class="w-5 absolute border border-black"
      :class="{
        'rotate-45': isOpen,
        'translate-y-2': isOpen,
      }"
    />
    <div class="w-5 h-4" />
    <div
      class="w-5 absolute border border-black"
      :class="{
        '-rotate-45': isOpen,
        '-translate-y-2': isOpen,
      }"
    />
  </div>
</template>
<script>
export default {
  props: ["isOpen"],
  emits: ["click"],
};
</script>
