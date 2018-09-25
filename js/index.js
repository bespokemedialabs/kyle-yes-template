$(document).ready(function() {

				$("#next-1").click(function() {
					$("#second").show();
					$("#first").hide();
					$("#progressBar").css("width", "60%");
					$("#progressText").text("Step - 2");

				});

				$("#next-2").click(function() {
					$("#third").show();
					$("#second").hide();
					$("#progressBar").css("width", "100%");
					$("#progressText").text("Step - 3");

				});

				$("#prev-2").click(function() {
					$("#second").hide();
					$("#first").show();
					$("#progressBar").css("width", "20%");
					$("#progressText").text("Step - 1");

				});

				$("#prev-3").click(function() {
					$("#third").hide();
					$("#second").show();
					$("#progressBar").css("width", "60%");
					$("#progressText").text("Step - 2");
				});

				$("#submit").click(function() {
					$("#formBox").hide();
					$("#formBox").hide();
					$("#loadingBar").show();

				});


				$("#closePopup").click(function() {
					$("#formBox").show();
					$("#popup").hide();
				});

			});


			