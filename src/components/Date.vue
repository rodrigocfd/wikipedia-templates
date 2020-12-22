<template>
	<div>
		<label>Day</label>
		<input type="number" class="nums2" maxlength="2" :value="ymd[2]" @input="changedD" @click="selAll" />
		<label>Month</label>
		<input type="number" class="nums2" maxlength="2" :value="ymd[1]" @input="changedM" @click="selAll" />
		<label>Year</label>
		<input type="number" class="nums4" maxlength="4" :value="ymd[0]" @input="changedY" @click="selAll" />
		<button @click="today">Today</button>
		<button @click="clear">Clear</button>
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

		function selAll(e) {
			e.target.select();
		}

		function today() {
			const now = new Date();
			emitYMD(now.getFullYear(), now.getMonth() + 1, now.getDate());
		}
		function clear() {
			emitYMD(0, 0, 0);
		}

		return {
			ymd, changedD, changedM, changedY, selAll,
			today, clear,
		};
	}
}
</script>

<style scoped lang="scss">
label, button {
	margin: 0 12px;
}
.nums2 {
	width: 40px;
}
.nums4 {
	width: 80px;
}
</style>