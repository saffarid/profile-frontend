<template>
	<Card :options="{'--width':'88%',
                               '--height':'85%',
                               '--inner_color':'var(--primary_color)',
                               '--outer_color':'#664502'}">
		<div class="card nadoumchik">
			<div class="d">
				<div class="title">{{ data.title }}</div>
				<div class="desc" v-html="data.desc"/>
				<a class="link" target="_blank" href="http://saffarid.synology.me:20200/">#Надоумчик</a>
			</div>
			<div class="view">
				<iframe src="http://saffarid.synology.me:20200/" frameborder="0" scrolling="no"/>
			</div>
		</div>
	</Card>
</template>

<script>
import Card from '../../../../../components/Card'

export default {
	name: 'nadoumchik',
	components: {
		Card,
	},
	props: {
		data: {
			type: Object,
			required: false,
		},
	},
}
</script>

<style lang="scss" scoped>

@import "card";

.nadoumchik {
	display: grid;
	grid-template-columns: 1fr 3fr;
	align-self: stretch;
	justify-self: stretch;
	height: 97%;

	.d {
		display: grid;
		grid-template-rows: repeat(4, max-content);
		row-gap: 5px;


		.link {
			border: 2px solid #4ae2fb;
			border-radius: 1000000px;
			text-decoration: none;
		}
	}

	.view {
		display: grid;
		align-self: stretch;
		justify-items: center;
		justify-content: stretch;
		justify-self: stretch;
		align-content: stretch;
		align-items: stretch;
		overflow-y: auto;

		iframe {
			width: 81.6%;
			height: 320%;
			overflow-y: hidden;
		}
	}
}

</style>