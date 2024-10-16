<template>
  <div id="app">
    <router-view/> <!-- Здесь будут загружаться компоненты маршрутов -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  
}

* {
	padding: 0;
	margin: 0;
	border: none;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}
</style>
