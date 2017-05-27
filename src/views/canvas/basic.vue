<template>
	<div>
		<canvas id="canvas" width="800" height="500"></canvas>
	</div>
</template>
<script>
	
	export default {
		data(){
			return {

			}
		},
		mounted(){
			var ctx = document.getElementById('canvas').getContext('2d')
			this.draw(ctx)
		},
		methods: {
			draw(ctx){

				ctx.beginPath(); // 开始路径绘制
				ctx.moveTo(20, 20); // 设置路径起点，坐标为(20,20)
				ctx.lineTo(200, 20); // 绘制一条到(200,20)的直线
				ctx.lineWidth = 1.0; // 设置线宽
				ctx.strokeStyle = '#CC0000'; // 设置线的颜色
				ctx.stroke(); // 进行线的着色，这时整条线才变得可见

				// 矩形
				ctx.fillStyle = 'yellow';
				ctx.fillRect(50, 50, 200, 100); 

				ctx.strokeRect(50,150,200,100); 

				// 清除内容
				ctx.clearRect(100,50,50,50); 

				ctx.font = "Bold 20px Arial"; // 设置字体
				ctx.textAlign = "left";// 设置对齐方式
				ctx.fillStyle = "#008600"; // 设置填充颜色
				ctx.fillText("Hello!", 10, 50); // 设置字体内容，以及在画布上的位置
				ctx.strokeText("Hello!", 10, 100); // 绘制空心字

				// ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);//绘制扇形
				// 
				ctx.beginPath(); 
				ctx.arc(350, 60, 50, 0, Math.PI*2, true); 
				ctx.fillStyle = "#000000"; 
				ctx.fill();

				ctx.beginPath(); 
				ctx.arc(350, 160, 50, 0, Math.PI*2, true); 
				ctx.lineWidth = 1.0; 
				ctx.strokeStyle = "#000"; 
				ctx.stroke();

				var myGradient = ctx.createLinearGradient(50,250,200, 160); 
				myGradient.addColorStop(0, "#BABABA"); 
				myGradient.addColorStop(1, "#636363");

				ctx.fillStyle = myGradient;
				ctx.fillRect(50,250,200,100);

				ctx.shadowOffsetX = 10; // 设置水平位移
				ctx.shadowOffsetY = 10; // 设置垂直位移
				ctx.shadowBlur = 5; // 设置模糊度
				ctx.shadowColor = "rgba(0,0,0,0.5)"; // 设置阴影颜色
				ctx.fillStyle = "#CC0000"; 
				ctx.fillRect(50,350,200,100);
			}
		}
	}
</script>