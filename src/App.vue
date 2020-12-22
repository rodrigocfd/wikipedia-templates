<template>
	<div id="appTopRow">
		<h1>Wikipedia Templates</h1>
		<div>
			<router-link to="/cite-web">Cite web</router-link>
		</div>
	</div>
	<div id="appContent">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	setup() {
	}
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	padding: 0 10px;
}
#appTopRow {
	display: flex;
	flex-direction: row;
	align-items: baseline;
	justify-content: space-between;
	border-bottom: 1px solid #d0d0d0;
	& > h1 {
		margin: 8px 0;
	}
}
#appContent {
	margin-top: 10px;
}
</style>
