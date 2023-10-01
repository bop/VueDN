<template>
  <div class="push"></div>
  <div class="footer center">
    <div>
      Released under the <a href="https://choosealicense.com/licenses/mit/" target="_blank">MIT License</a>
    </div>
    <div>
      By <a href="https://poetic.ch" target="_blank">B. Ossipov</a> {{ year }}
    </div>
    <div>
      <a href="https://github.com/bop/VueDN " target="_blank">GitHub Repository</a>
    </div>
  </div>
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
