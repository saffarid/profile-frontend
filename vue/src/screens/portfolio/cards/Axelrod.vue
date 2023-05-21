<template>
	<Card ref="FullCard"
		  :options="{'--width':'88%',
                               '--height':'85%',
                               '--inner_color': 'var(--primary_color)',
                               '--outer_color': '#014a5f'}">
		<div class="card axelrod">
			<div class="d">
				<div class="title">{{ data.title }}</div>
				<div class="desc" v-html="data.desc"/>
			</div>
			<div class="images">
				<img @click="showImage($event)" class="image"
					 :width="width"
					 :src="'/img/png/axelrod main.png'">
				<img @click="showImage($event)" class="image"
					 :width="width"
					 :src="'/img/png/axelrod edit.png'">
				<img @click="showImage($event)" class="image"
					 :width="width"
					 :src="'/img/png/axelrod fail.png'">
			</div>
		</div>

	</Card>
</template>

<script>
import {ref, watch} from 'vue'
import Card from '../../../components/Card'
export default {
	name: "Axelrod",
	components: {
		Card
	},
	props: {
		data: {
			type: Object,
			required: false,
		},
	},
	setup(){
		let activeImage = null

		const width = ref(0)
		const FullCard = ref(null)

		watch(FullCard, () => {
			width.value = (300 / 1080) * window.innerWidth
			window.addEventListener('resize', () => {
				width.value = (300 / 1080) * window.innerWidth
			})
		})

		const showImage = (e) => {
			console.log(e)
			if (activeImage != null) {
				activeImage.target.classList.toggle('show_image')
			}
			if (activeImage != null && JSON.stringify(activeImage.target) == JSON.stringify(e.target)) {
				activeImage = null
				return
			}
			e.target.classList.toggle('show_image')
			activeImage = e
		}

		return {
			FullCard,
			width,
			showImage,
		}
	}
}
</script>

<style lang="scss" scoped>
@import "card";

.axelrod {
	display: grid;
	grid-template-columns: 1fr 3fr;
	height: 96%;

	padding: 1%;

	column-gap: 1%;

	.images {
		display: grid;

		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;

		column-gap: 10px;
		row-gap: 10px;

		align-self: center;
		align-content: center;
		align-items: center;

		.image {
			width: 100%;
		}

		.show_image {
			position: absolute;
			margin: auto;
			padding-right: 10px;
			width: -moz-available;
			width: -webkit-fill-available;
		}
	}

	.d {
		display: grid;
		grid-template-rows: repeat(4, max-content);
		row-gap: 5px;


		.desc pre {
			font-size: 13px;
			font-family: "Segoe UI";
		}

		.list {
			display: grid;
			row-gap: 10px;
		}

		.link {
			border: 2px solid #4ae2fb;
			border-radius: 1000000px;
		}
	}

}
</style>