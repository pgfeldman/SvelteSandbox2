<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	let el;
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	var data = [30, 86, 168, 281, 303, 365];


	import Counter from '$lib/Counter.svelte';

	onMount(() => {
		d3.select(el)
				.selectAll("div")
				.data(data)
				.enter()
				.append("div")
				.style("width", function(d) {
					return d + "px";
				})
				.text(function(d) {
					return d;
				});
	});

</script>



<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>

		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		to your new<br />SvelteKit app
	</h1>


	<div bind:this={el} class="chart"></div>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	.chart :global(div) {
		font: 10px sans-serif;
		background-color: steelblue;
		text-align: right;
		padding: 3px;
		margin: 1px;
		color: white;
	}
</style>
