<script>
	import { trocarEstadoDoJogo } from './Estado.js'
</script>

<div class="flex space-x-2 justify-center mt-3">
    <div>
        <button on:click={() => trocarEstadoDoJogo('menu')} type="button" class="inline-block px-6 pt-2.5 pb-2 bg-amber-500 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-amber-600 hover:shadow-lg focus:bg-amber-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-700 active:shadow-lg transition duration-150 ease-in-out flex align-center">
            <i class="fas fa-arrow-left w-3 mr-2 mt-0.5x pt-0.5"></i>
            Voltar
        </button>
    </div>
</div>