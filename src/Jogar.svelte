<script>

    import Voltar from "./Voltar.svelte"

 //	Array de palavras
	const palavras = [
	//	[0] Animais
		[
			"Abelha",
			"Avestruz",
			"Anaconda",
			"Babuino",
			"Baleia",
			"Bode",
			"Bufalo",
			"Cachorro",
			"Cavalo",
			"Canguru",
			"Capivara",
			"Corvo",
            "Dinossauro",
            "Elefante",
            "Esquilo",
            "Flamingo",
            "Foca",
            "Galinha",
			"Hamster",
			"Lhama",
			"Leao",
			"Hipopotamo",
            "Hiena",
            "Jacare",
            "Jaguar",
            "Javali",
            "Joaninha",
            "Lula",
            "Macaco"
		],
	//	[1] Frutas
		[
			"Abacate",
			"Abacaxi",
			"Acerola",
			"Alfarroba",
			"Banana",
			"Bergamota",
			"Caju",
			"Carambola",
			"Mexerica",
			"Cereja",
			"Framboesa",
			"Goiaba",
			"Jabuticaba",
			"Laranja"
		],
	//	[2] Objetos
		[
			"Ampulheta",
			"Anzol",
			"Agulha",
			"Anel",
			"Bicicleta",
			"Boneca",
			"Desfibrilador",
			"Calculadora",
			"Chupeta",
			"Garrafa",
			"Fantoche",
			"Freezer",
			"Navalha",
			"Jaleco",
			"Modem",
			"Nebulizador",
			"Novelo",
			"Bolsa",
			"Mesa",
			"Roteador",
			"Spray",
			"Lixeira",
			"Controle",
			"Webcam",
			"Xadrez",
			"Xilofone"
		],
	//	[3] Profissões
		[
			"Apicultor",
			"Auditor",
			"Bartender",
			"Cerimonialista",
			"Coach",
			"Desembargador",
			"Despachante",
			"Endocrinologista",
			"Embaixador",
			"Professor",
			"Pizzaiolo",
			"Perito",
			"Vendedor",
			"Roteirizador",
			"Desenvolvedor",
			"Administrador"
		]
	]

//	Constante (arrow function) que irá armazenar a quantidade de palavras do array de palavras
	const quantidadeDePalavras = () => {
		let contador = 0

		for (let i = 0; i < palavras.length; i++) {
			for (let j = 0; j < palavras[i].length; j++) {
				contador++
			}
		}

		return contador
	}

//	Teclado Qwerty que será exibido durante o jogo
	const teclado =  [
		["Q","W","E","R","T","Y","U","I","O","P"],
		["A","S","D","F","G","H","J","K","L"],
		["Z","X","C","V","B","N","M"]
	]

//	Variável que irá armazenar a palavra sorteada
	let palavraSorteada = ""

//	As palavras sorteadas serão armazenadas no array
	let palavrasSorteadas = []

//	Variável que irá armazenar a dica da palavra sorteada
	let dica = ""
	
//	Chamada da função que irá sortear a palavra
	sortearPalavra()
	
/*	O array em si é a tabela onde serão inseridas as letras que o usuário escolher
	e cada linha do array representa uma chance para advinhar a palavra sorteada 	*/
	let tabela = [[],[],[],[],[]];
	
//	Chamada da função que irá gerar a tabela passando como argumento o array tabela
	gerarTabela(tabela)
	
//	Variável que informa qual td (célula ou coluna) irá receber a letra escolhida
	let celula = 0

//	Variável que informa qual td (célula ou coluna) irá receber a letra escolhida
	let linha = 0
	
//	Variável que irá armazenar a mensagem exibida ao usuário sobre a vitória ou derrota
	let msg = ""

//	Função que sorteia a palavra
	function sortearPalavra() {
	//	Sorteando categoria - [0] = Animal, [1] = Fruta, [2] = Objeto, [3] = Profissão
		let categoria = Math.floor(Math.random() * palavras.length)
	//	Sorteando palavra
		let palavra = Math.floor(Math.random() * palavras[categoria].length)

	/*	Se o array de palavras sorteadas (palavrasSorteadas) contiver a palavra sorteada
		será realizado um novo sorteio	*/
		if (palavrasSorteadas.includes(palavras[categoria][palavra])) {
		//	Nova chamada da função para sortear a palavra
			sortearPalavra()
	//	Caso contrário, a palavra será utilizada e armazenada no array de palavras sorteadas
		} else {
			palavraSorteada = palavras[categoria][palavra]
			palavrasSorteadas.push(palavraSorteada)
		}
		
	/*	Chamada da função de mostrar dica da palavra	*/
		verDica()
	
	}
	
//	Função que determina a dica
	function verDica() {
		if (palavras[0].includes(palavraSorteada)) {
			dica = "Dica: Animal"
		} else if (palavras[1].includes(palavraSorteada)) {
			dica = "Dica: Fruta"
		} else if (palavras[2].includes(palavraSorteada)) {
			dica = "Dica: Objeto"	
		} else {
			dica = "Dica: Profissão"
		}
	}


//	Função que gera a tabela em branco que irá receber o array tabela como argumento
	function gerarTabela(array) {
	/*	Para cada linha vazia do array bidimensional tabela, serão inseridos caracteres
		em branco de acordo com o tamanho da palavra sorteada (palavraSorteada)	*/
		for (let i = 0; i < array.length; i++) {
			for (let j = 0; j < palavraSorteada.length; j++) {
				array[i].push("")
			}
		}
	}

//	Função que insere letras no array tabela
	function inserirLetrasNaPalavra(tecla) {
		if (celula < tabela[linha].length) {
		//	Substituição do caractere em branco pela tecla escolhida pelo usuário
			tabela[linha][celula] = tecla
		/*	A próxima célula é quem terá seu valor substituído quando a função for
			chamada novamente	*/
			celula++			
		}
	}
	
//	Função que verifica a continuidade, vitória ou derrota no jogo
	function resultado() {
	/*	Se na linha da tabela que está sendo verificada não existir caracteres em branco,
		é chamada a função que irá alterar a cor de background das células */
		if (!tabela[linha].includes("") ) {
		//	Chamada da função que irá trocar a cor de background das células
			mudarCor()
		/*	Se a concatenação dos caracteres da linha verificada for igual a palavra
			sorteada, o usuário irá vencer o jogo */
			if (tabela[linha].join("") == palavraSorteada) {
			//	Troca do valor da variável para informar a vitória
				msg = "Você acertou!";
			}

		//	A próxima linha da tabela é quem será utilizada
			linha++

		/*	O valor de celula precisa voltar a ser 0 para que os caracteres sejam inseridos
			na posição correta na nova linha	*/
			celula = 0
		
		/*	Se o valor de linha ultrapassar 4, ou seja, se as chances acabarem,
			o usuário perde o jogo	*/
			if (linha > 4) {
				msg = "Você perdeu!";
			}
		}

	//	Se todas as palavras forem utilizadas, o jogo é reiniciado
		if (palavrasSorteadas.length == quantidadeDePalavras && linha > 4) {
			novoJogo(true)
		}
	}

//	Função que troca a cor de background das colunas (células) analisadas
	function mudarCor() {
	/*	toUpperCase() retorna o valor da string convertido para letras maiúsculas
		para que não exista problema na comparação de caracteres (todos vão estar
		maiúsculos) entre o teclado e a palavra sorteada (palavraSorteada)	*/
		palavraSorteada = palavraSorteada.toUpperCase()

	//	Variável que armazena os dados da linha da tabela que está sendo analisada no jogo
		let tr = document.querySelector(".tr-" + linha)

		for (let i = 0; i < palavraSorteada.length; i++) {
		//	children[i] representa cada td (célula) da linha da tabela

		/*	Se o conteúdo da td (célula) for igual ao elemento correspondente [i]
			da palavra sorteada, será adicionada a classe "correta"
			(letra presente e no lugar certo da palavra sorteada) a td em questão,
			ficando com o background verde	*/
			if (tr.children[i].textContent == palavraSorteada[i]) {
				tr.children[i].classList.add("bg-green-400")
		/*	Se a palavra sorteada contiver o conteúdo da td, será adicionada
			a classe "presente" (letra presente na palavra sorteada, mas no lugar errado)
			a td em questão, ficando com o background amarelo	*/
			} else if (palavraSorteada.includes(tr.children[i].textContent)) {
				tr.children[i].classList.add("bg-yellow-300")
			} else if (!palavraSorteada.includes(tr.children[i].textContent)) {
		/*	Caso contrário, se a palavra sorteada não contiver o conteúdo da td, será
			adicionada a classe "ausente" (letra ausente na palavra sorteada) a td em
			questão, ficando com o background cinza	*/
				tr.children[i].classList.add("bg-gray-400")
			}
		}
	}

//	Função que apaga a letra escolhida pelo usuário
	function apagarLetra() {
	//	Se o valor da variável celula for maior que 0, seu valor será decrementado
		if (celula > 0) {
			celula--
		}

	//	Substituição de letra por caractere em branco
		tabela[linha][celula] = ""
	}

//	Função que entrega um novo jogo
	function novoJogo(reiniciarJogo = false) {
	//	Bloco responsável por remover as classes "correta", "presente" e "ausente" de todas as td
		for (let i = 0; i < tabela.length; i++) {
			for (let j = 0; j < palavraSorteada.length; j++) {
				document.querySelector(".tr-" + i).children[j].classList.remove("bg-green-400", "bg-yellow-300", "bg-gray-400")
			}
		}
	
	/*	Se a função receber o argumento true, o jogo será reiniciado, caso contrário, uma nova
		palavra será sorteada	*/
		if (reiniciarJogo == true) {
			palavrasSorteadas = []
		}

	//	Restaurando e chamando novamente as funções do jogo
		sortearPalavra()
		tabela = [[],[],[],[],[]]
		gerarTabela(tabela)
		celula = 0
		linha = 0
		msg = ""
	}

</script>

<div class="relative h-screen w-screen" style="background-image: url(https://mdbcdn.b-cdn.net/img/Photos/Others/background2.jpg); background-size:cover;">
   <div class="px-6 pt- md:px-8 md:pt-4 max-w-3xl m-auto">
        <div class=" m-auto bg-white text-center text-gray-900 text-xl font-medium rounded-lg shadow-lg pt-5 pb-5">

            <h1 class="font-fredoka text-center text-amber-400 text-4xl md:text-5xl">Palavra Secreta</h1>
            
            <!-- Exibição da dica para adivinhar a palavra sorteada -->
            <h6 class="font-fredoka text-center text-amber-500 text-4xl md:text-2xl">{dica}</h6>
            
            <table class= "m-auto my-5">
                <!-- Laços responsáveis pela iteração e exibição dos elementos do array tabela -->
                {#each tabela as lin, i}
                <!-- A classe resultante da concatenação "tr-{i}" é necessária para identificar 
                     as linhas e consequentemente trocar a cor de background das td (células) quando
                     a função mudarCor() for acionada durante a verificação do resultado -->
                <tr class="tr-{i}">
                    {#each lin as el}
                    <td class= "border-solid border-2 border-black  w-10 h-10">
                        {el}
                    </td>
                    {/each}
                </tr>
                {/each}
            </table>
            
            {#if msg == "Você acertou!"}
            <h1 class="font-fredoka text-center text-green-400 text-lg md:text-2xl">
              {msg}
            </h1>
            {:else if msg == "Você perdeu!"}
            <h1 class="font-fredoka text-center text-red-600 text-lg md:text-2xl">
              {msg}
            </h1>
            {/if}
            {#if msg != ""}
            <button on:click={() => novoJogo()} class="mt-5 grid-gap-4 px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out">
                Sortear nova palavra
            </button>
            {/if}

            <div class= "w-10/12 m-auto flex justify-center">
                <table class= "mt-10 mb-3 mx-5">
                    <!-- Laços responsáveis pela iteração e exibição dos elementos do array teclado -->
                    {#each teclado as lin}
                        <tr class= "w-screen flex justify-center">
                            {#each lin as el}
                                <td class= "bg-amber-300 shadow-md hover:bg-amber-400 hover:shadow-lg active:bg-amber-500 rounded m-0.5 w-10 h-10">
                                    <!-- Botão que chama a função de inserção de caractere na tabela -->
                                    <button on:click={() => inserirLetrasNaPalavra(el)}>
                                        {el}
                                    </button>
                                </td>
                            {/each}
                        </tr>
                    {/each}
                </table>
            </div>
            
            
            
            <!-- Botão que chama a função de novo jogo passando true para o reinicio -->
            <button on:click={() => novoJogo(true)} class="grid-gap-4 px-6 py-2.5 bg-amber-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-600 hover:shadow-lg active:bg-amber-700 active:shadow-lg transition duration-150 ease-in-out">
                Reiniciar
            </button>
            <!-- Botão que chama a função de verificar resultado do jogo -->
            <button on:click={() => resultado()} class="grid-gap-4 px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
                Verificar
            </button>
            
            <!-- Botão que chama a função de apagar caractere na tabela -->
            <button on:click={() => apagarLetra()} class="grid-gap-4 px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out">
                Apagar
            </button>
            
            <!-- Se o usuário tiver acertado ou errado a palavra, ele pode tentar advinhar uma nova palavra -->

        </div>
        <Voltar/>
   </div>
</div>


