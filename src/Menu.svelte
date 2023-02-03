<script>
	import { estado } from './Estado.js'
	import { trocarEstadoDoJogo } from './Estado.js'
</script>

<div class="relative h-screen w-screen" style="background-image: url(https://mdbcdn.b-cdn.net/img/Photos/Others/background2.jpg); background-position-y: center;">
    <div class="flex h-screen justify-center items-center">
        <div class=" h-56 grid content-center">
            <div class="w-full m-auto h-56 grid content-center">
                <div class="my-9">
                    <h1 class="font-fredoka text-center text-white text-4xl md:text-8xl">Palavra Secreta</h1>
                </div>    
                <div class="m-auto w-1/3 ">
                    <button on:click={() => trocarEstadoDoJogo('jogar')} type="button" class="w-full px-6 py-2.5 bg-green-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-500 hover:shadow-lg active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out">
                        jogar
                    </button>
                    <button on:click={() => trocarEstadoDoJogo('ajuda')} type="button" class="mt-1 w-full px-6 py-2.5 bg-yellow-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-500 hover:shadow-lg  active:bg-yellow-600 active:shadow-lg transition duration-150 ease-in-out">
                        ajuda
                    </button>
                    <button on:click={() => trocarEstadoDoJogo('sobre')} type="button" class="mt-1 w-full px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out">
                        sobre
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>