<template>
	<div class="wrapper">
		<ul class="list">
			<li class="item"><img :src="loadingCat" alt=""></li>
			<li class="item">
				<a href="https://FElxy.github.io/blog">blog</a>
			</li>
			<li class="item"></li>
		</ul>
		<section class="content">
			<div class="tt">{{sailingLrc.title}}</div>
			<div class="cnt" v-html="getLrcCnt"></div>
		</section>
	</div>

</template>
<script>
	import loadingCat from '@/assets/img/loading.gif'
	export default {
		data(){
			return {
				loadingCat: loadingCat,
				sailingLrc: {
					title: '空帆船-朴树',
					cnt:[
					   '我迎着风',
					　　'我迎着风',
					　　'我迎着风',
					　　'我迎着风',
					　　'金山银山 繁华云烟 温柔之夜',
					　　'我什么也不带走',
					　　'那狂风 那不知吉凶 的我的前程',
					　　'什么也不能让我留下',
					　　'当我听到 风从我耳旁呼啸着掠过',
					　　'我爱这艰难又拼尽了全力的每一天',
					　　'那只有我自己知道的快乐',
					　　'我迎着风',
					　　'我迎着风',
					　　'金山银山 繁华云烟 温柔之夜',
					　　'我什么也不带走',
					　　'那狂风 那不知吉凶 的我的前程',
					　　'我还是要扬起帆',
					　　'当我听到 风从我耳旁呼啸着掠过',
					　　'那一刻我的心狂喜着猛烈地跳动',
					　　'我爱这艰难又拼尽了全力的每一天',
					　　'我会怀念所有的这些曲折',
					　　'让我半醉半醒地游荡在我的命运中',
					　　'让我跟随着她的起伏与她共舞',
					　　'我爱这被风带走不会再有的每一天',
					　　'那只有我自己知道的快乐',
					　　'当我听到 风从我耳旁呼啸着掠过',
					　　'那一刻我的心狂喜着猛烈地跳动'
					]
				}
			}
		},
		computed: {
			getLrcCnt(){
				return this.sailingLrc.cnt.map((item)=>{
					return '<p>'+ item +'</p>'
				}).join('')
			}
		}
	}
</script>
<style lang="less" scoped>
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-direction: column;
		height: 100vh;
	}
	.list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 500px;
		.item {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 150px;
			height: 150px;
			border-radius: 50%;
			background: #333;
			color: #fff;
			font-size: 32px;
			a {
				display: block;
				color: #fff;
			}
			&:first-child {
				background: #66ceff;
			}
			&:last-child {
				background: url(../assets/img/sttm.jpg) no-repeat center center;
				background-size: cover;
			}
		}
	}
	.content {
		width: 500px;
		height: 300px;
		overflow: hidden;
		.tt {
			margin-bottom: 20px;
			// box-shadow: 3px 0 3px 3px #333;
			
		}
		.cnt {
			height: 100%;
			text-align: center;
			overflow-y: scroll;
			margin-right: -15px;
			// font-style: italic;
		}
	}
</style>