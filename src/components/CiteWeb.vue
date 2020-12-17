<template>
	<h1>Cite web</h1>
	<div>
		<div class="fields">
			URL <input type="text" v-model="url" />
			Title <input type="text" v-model="title" />
		</div>
	</div>
	<textarea :value="tag" />
</template>

<script>
import {computed, ref} from 'vue';

export default {
	setup() {
		const url = ref('');
		const title = ref('');

		const tag = computed(() =>
			'{{cite web' +
			(url.value ? ` |url=${url.value}` : '') +
			(title.value ? ` |url=${title.value}` : '') +
			'}}'
		);

		return {
			url,
			tag,
		};
	}
};
</script>

<style scoped>
.fields {
	display: inline-grid;
	grid-template-columns: auto auto;
	margin-bottom: 20px;
}
textarea {
	width: 800px;
	height: 60px;
}
</style>
