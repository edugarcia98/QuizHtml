$(document).ready(
	function() 
	{
		var qtdPontos = 0;

		$('div[class="pq"]').css('display', 'none');
		$('div[id="pergunta1"]').css('display', 'block');

		$('div[id="pergunta1"]').find(':input[type="button"]').click
		(
			function() 
			{
				if(this.name == 'a')
				{
					qtdPontos++;
					alert("Certa Resposta");
					console.log(qtdPontos);
				}
				else
					alert("Resposta Errada");

				$('div[class="pq"]').css('display', 'none');
				$('div[id="pergunta2"]').css('display', 'block');
			}
		);

		$('div[id="pergunta2"]').find(':input[type="button"]').click
		(
			function() 
			{
				if(this.name == 'b')
				{
					qtdPontos++;
					alert("Certa Resposta");
					console.log(qtdPontos);
				}
				else
					alert("Resposta Errada");

				$('div[class="pq"]').css('display', 'none');
				$('div[id="pergunta3"]').css('display', 'block');
			}
		);

		$('div[id="pergunta3"]').find(':input[type="button"]').click
		(
			function()
			{
				if(this.name == 'c')
				{
					qtdPontos++;
					alert("Certa Resposta");
					console.log(qtdPontos);
				}
				else
					alert("Resposta Errada");

				$('div[class="pq"]').css('display', 'none');
				$('div[id="pergunta4"]').css('display', 'block');
			}
		);

		$('div[id="pergunta4"]').find(':input[type="button"]').click
		(
			function()
			{
				if(this.name == 'c')
				{
					qtdPontos++;
					alert("Certa Resposta");
					console.log(qtdPontos);
				}
				else
					alert("Resposta Errada");

				$('div[class="pq"]').css('display', 'none');
				$('div[id="pergunta5"]').css('display', 'block');
				
			}
		);

		$('div[id="pergunta5"]').find(':input[type="button"]').click
		(
			function()
			{
				if(this.name == 'd')
				{
					qtdPontos++;
					alert("Certa Resposta");
					console.log(qtdPontos);
				}
				else
					alert("Resposta Errada");

				$('div[class="pq"]').css('display', 'none');
				$('div[id="pergunta6"]').css('display', 'block');
			}
		);

		$('div[id="pergunta6"]').find(':input[type="button"]').click
		(
			function()
			{
				if(this.name == 'b')
				{
					qtdPontos++;
					alert("Certa Resposta");
					console.log(qtdPontos);
				}
				else
					alert("Resposta Errada");

				$('div[class="pq"]').css('display', 'none');
				$('div[id="pergunta7"]').css('display', 'block');
			}
		);

		$('div[id="pergunta7"]').find(':input[type="button"]').click
		(
			function()
			{
				if(this.name == 'b')
				{
					qtdPontos++;
					alert("Certa Resposta");
					console.log(qtdPontos);
				}
				else
					alert("Resposta Errada");

				$('div[class="pq"]').css('display', 'none');
				$('div[id="pergunta8"]').css('display', 'block');
			}
		);

		$('div[id="pergunta8"]').find(':input[type="button"]').click
		(
			function()
			{
				if(this.name == 'd')
				{
					qtdPontos++;
					alert("Certa Resposta");
					console.log(qtdPontos);
				}
				else
					alert("Resposta Errada");

				$('div[class="pq"]').css('display', 'none');
				$('div[id="pergunta9"]').css('display', 'block');
			}
		);

		$('div[id="pergunta9"]').find(':input[type="button"]').click
		(
			function()
			{
				if(this.name == 'b')
				{
					qtdPontos++;
					alert("Certa Resposta");
					console.log(qtdPontos);
				}
				else
					alert("Resposta Errada");

				$('div[class="pq"]').css('display', 'none');
				$('div[id="pergunta10"]').css('display', 'block');
			}
		);

		$('div[id="pergunta10"]').find(':input[type="button"]').click
		(
			function()
			{
				if(this.name == 'c')
				{
					qtdPontos++;
					alert("Certa Resposta");
					console.log(qtdPontos);
				}
				else
					alert("Resposta Errada");

				$('div[class="pq"]').css('display', 'none');
				$('div[id="resultado"]').css('display', 'block');
				$('div[id="resultado"]').find('#pontos').html(qtdPontos + ' / 10');
			}
		);
	}
);
