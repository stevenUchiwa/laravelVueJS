<script setup>
const props = defineProps({
  is_success: Boolean,
  msg: String
});

</script>
<template>
    <span class="span_content">{{ msg }}</span>
</template>
<style>
.span_content {
    background-color: rgba(230, 125, 141, 0.392);
    display: inline-block;
    width: 100%;
    padding: 1.5rem 1rem;
    color: red;
}

</style>