<template>
	<h2>Cite web [{{lang}}]</h2>
	<div>
		<div class="fields">
			<label>URL</label><input type="text" v-model="url" ref="txtUrl" />
			<label>Title</label><input type="text" v-model="title" />
			<label>Author</label>
			<div>
				<label>Last name</label><input type="text" v-model="last" />
				<label>First name</label><input type="text" v-model="first" />
			</div>
			<label>Website</label><input type="text" v-model="website" />
			<label>Date</label><Date v-model="date" />
			<label>Access date</label><Date v-model="accessDate" />
		</div>
	</div>
	<textarea :value="result" @click="selAll" />
</template>

<script>
import {computed, onMounted, ref} from 'vue';
import {useStore} from 'vuex';
import Date from '@/components/Date';

export default {
	components: {Date},

	setup() {
		const store = useStore();
		const lang = computed(() => store.state.lang);

		const txtUrl = ref(null);
		const url = ref('');
		const title = ref('');
		const last = ref('');
		const first = ref('');
		const website = ref('');
		const date = ref('');
		const accessDate = ref('');

		onMounted(() => {
			txtUrl.value.focus();
		});

		const result = computed(() =>
			'<ref>{{cite web' +
			(url.value ? ` |url=${url.value}` : '') +
			(title.value ? ` |title=${title.value}` : '') +
			(last.value ? ` |last=${last.value}` : '') +
			(first.value ? ` |first=${first.value}` : '') +
			(website.value ? ` |website=${website.value}` : '') +
			(date.value ? ` |date=${date.value}` : '') +
			(accessDate.value ? ` |access-date=${accessDate.value}` : '') +
			'}}</ref>'
		);

		function selAll(e) {
			e.target.select();
		}

		return {
			txtUrl, lang,
			url, title, last, first, website, date, accessDate,
			selAll, result,
		};
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