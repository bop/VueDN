<template>
  <div class="push"></div>
  <div class="footer center">MIT Licensed | By <a href="https://poetic.ch" target="_blank">B. Ossipov</a> &copy; {{ year }}</div>
</template>
<script>
const d = new Date()
const currentYear = d.getFullYear()
export default {
  data() {
    return {
      year: currentYear
    }
  }
}
</script>
