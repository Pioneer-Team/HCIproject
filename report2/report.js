var canvas;
var context;
		window.onload = function() {
			canvas = document.getElementById("canvas");
      canvas2 = document.getElementById("canvas2");


      draw("웹서비스 설계",canvas.getContext("2d"));
      draw("대화형 프로토타입",canvas2.getContext("2d"));
      draw("사용자 대상 실험",canvas3.getContext("2d"));
      draw("참고 자료",canvas4.getContext("2d"));

    }

function draw(text,context) {
			context.font="bold 30px 헤드라인";

			context.shadowColor = "gray";
			context.shadowOffsetX = 2;
			context.shadowOffsetY = 2;
			context.shadowBlur = 10;

			context.fillStyle = "#40cbff";
			context.fillText(text, 0,40);

			context.shadowOffsetX = 0;
			context.shadowOffsetY = 0;
			context.shadowBlur = 0;

      context.lineJoin="round";
			context.lineWidth = 1  ;
			context.strokeStyle = "#938585";
			context.strokeText(text, 0,40);
		}
