<template>
	<div>
		<label>Day</label><input type="text" size="2" :value="ymd[2]" @input="changedD" />
		<label>Month</label><input type="text" size="2" :value="ymd[1]" @input="changedM" />
		<label>Year</label><input type="text" size="4" :value="ymd[0]" @input="changedY" />
	</div>
</template>

<script>
import {computed} from 'vue';

export default {
	props: ['modelValue'],
	emits: ['update:modelValue'],

	setup(props, ctx) {
		const ymd = computed(() => props.modelValue.split('-'));

		function emitYMD(y, m, d) {
			ctx.emit('update:modelValue',
				(!y && !m && !d) ? '' : `${y}-${m}-${d}`);
		}

		function changedD(e) {
			emitYMD(ymd.value[0], ymd.value[1], e.target.value);
		}
		function changedM(e) {
			emitYMD(ymd.value[0], e.target.value, ymd.value[2]);
		}
		function changedY(e) {
			emitYMD(e.target.value, ymd.value[1], ymd.value[2]);
		}

		return {ymd, changedD, changedM, changedY};
	}
}
</script>

<style scoped lang="scss">
label {
	margin: 0 12px;
}
</style>