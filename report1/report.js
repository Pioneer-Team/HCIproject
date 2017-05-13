var canvas;
var context;
		window.onload = function() {
			canvas = document.getElementById("canvas");
      canvas2 = document.getElementById("canvas2");


      draw("프로젝트 개요",canvas.getContext("2d"));
      draw("사용자와 과업 분석",canvas2.getContext("2d"));
      draw("공공개방데이터 소개 및 테스트",canvas3.getContext("2d"));
      draw("스토리보드",canvas4.getContext("2d"));

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
