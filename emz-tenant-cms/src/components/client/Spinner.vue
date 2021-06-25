<template>
  <div class="spinner"></div>
</template>

<script>
export default {
  name: "Spinner"
}
</script>

<style scoped lang="scss">
.spinner {
  @apply border-solid select-none;
  border-color: rgba(0,0,0,.1);
  border-right-color: #2a9cff;
  border-radius: 50%;
  animation: spinner 1s linear infinite;
}
@keyframes spinner {
  from {
    transform: rotate(0deg);
  } to {
      transform: rotate(360deg);
    }
}
</style>
