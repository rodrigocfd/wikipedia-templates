<template>
	<img alt="Vue logo" src="./assets/logo.png">
	<HelloWorld msg="Bango" @clique="clicou" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
	components: {HelloWorld},

	setup() {
		function clicou(name) {
			alert(`Parent received [${name}]`);
		}

		return {
			clicou,
		};
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
