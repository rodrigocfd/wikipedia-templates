<template>
	<div class="hello">
		<h1>{{msg}}</h1>
		<input type="text" v-model="name" />
		<div>{{theName}}</div>
		<button @click="clique">Go for it</button>
	</div>
</template>

<script>
import {computed, ref, watch} from 'vue';

export default {
	emits: ['clique'],
	props: ['msg'],

	setup(_props, ctx) {
		const name = ref('');
		const theName = computed(() => `The ${name.value}`);

		watch(name, (val, old) => {
			console.log(`Was [${old}], now [${val}]`);
		});

		function clique() {
			ctx.emit('clique', name.value);
		}

		return {
			name,
			theName,
			clique,
		};
	}
};
</script>

<style scoped>

</style>
