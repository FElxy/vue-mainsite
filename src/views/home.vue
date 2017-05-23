<template>
	<div>
		<ul class="list">
			<li class="item">---</li>
			<li class="item">
				<a href="https://FElxy.github.io/blog">blog</a>
			</li>
			<li class="item">---</li>
		</ul>	
	</div>

</template>

<style lang="less">
	.list {
		display: flex;
		align-item: middle;
		justify-content: space-between;
		width: 500px;
		margin: 0 auto;
		.item {
			width: 150px;
			height: 150px;
			line-height: 150px;
			border-radius: 50%;
			background: #333;
			color: #fff;
			font-size: 32px;
			a {
				display: block;
				color: #fff;
			}
		}
	}
</style>