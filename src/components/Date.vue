<template>
	<div>
		<label>Day</label><input type="text" size="2" v-model="day" @input="txtChanged" />
		<label>Month</label><input type="text" size="2" v-model="mon" @input="txtChanged" />
		<label>Year</label><input type="text" size="4" v-model="yer" @input="txtChanged" />
	</div>
</template>

<script>
import {ref} from 'vue';

export default {
	emits: ['change'],

	setup(props, ctx) {
		const day = ref('');
		const mon = ref('');
		const yer = ref('');

		function txtChanged() {
			ctx.emit('change', !yer.value && !mon.value && !day.value
				? ''
				: `${yer.value}-${mon.value}-${day.value}`
			);
		}

		return {day, mon, yer, txtChanged};
	}
}
</script>

<style scoped lang="scss">
label {
	margin: 0 12px;
}
</style>