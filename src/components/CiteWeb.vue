<template>
	<h1>Cite web</h1>
	<div>
		<div class="fields">
			<label>URL</label><input type="text" v-model="url" />
			<label>Title</label><input type="text" v-model="title" />
			<label>Author</label>
			<div>
				<label>Last name</label><input type="text" v-model="last" />
				<label>First name</label><input type="text" v-model="first" />
			</div>
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
		const last = ref('');
		const first = ref('');

		const result = computed(() =>
			'{{cite web' +
			(url.value ? ` |url=${url.value}` : '') +
			(title.value ? ` |title=${title.value}` : '') +
			(last.value ? ` |last=${last.value}` : '') +
			(first.value ? ` |last=${first.value}` : '') +
			'}}'
		);

		return {url, title, last, first, result};
	}
};
</script>

<style scoped lang="scss">
.fields {
	display: inline-grid;
	grid-template-columns: auto auto;
	grid-gap: 12px 0;
	margin-bottom: 20px;
	& > label {
		align-self: center;
		margin-right: 12px;
	}
	& > div > label {
		margin: 0 12px;
	}
	& > input {
		width: 500px;
		font-family: monospace;
	}
}
textarea {
	width: 800px;
	height: 60px;
	padding: 6px;
}
</style>
