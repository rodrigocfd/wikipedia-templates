<template>
	<h1>Cite web</h1>
	<div>
		<div class="fields">
			<label>URL</label><input type="text" v-model="url" />
			<label>Title</label><input type="text" v-model="title" />
		</div>
	</div>
	<textarea :value="result" />
</template>

<script>
import {computed, ref} from 'vue';

export default {
	setup() {
		const url = ref('');
		const title = ref('');

		const result = computed(() =>
			'{{cite web' +
			(url.value ? ` |url=${url.value}` : '') +
			(title.value ? ` |title=${title.value}` : '') +
			'}}'
		);

		return {url, title, result};
	}
};
</script>

<style scoped lang="scss">
.fields {
	display: inline-grid;
	grid-template-columns: auto auto;
	grid-gap: 12px;
	margin-bottom: 20px;
	& > label {
		align-self: center;
	}
	& > input {
		width: 400px;
		font-family: monospace;
	}
}
textarea {
	width: 800px;
	height: 60px;
	padding: 6px;
}
</style>
