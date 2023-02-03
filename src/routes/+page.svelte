<svelte:head>
	<title>Palavra Secreta</title>
	
</svelte:head>

<script>
	import Menu from '../Menu.svelte'
	import Jogar from  '../Jogar.svelte'
	import Ajuda from '../Ajuda.svelte'
	import Sobre from '../Sobre.svelte'
	import { estado } from '../Estado.js'
</script>

{#if $estado === 'menu'}
	<Menu/>
{:else if $estado === 'sobre'}
	<Sobre/>
{:else if $estado === 'jogar'}
	<Jogar/>
{:else if $estado === 'ajuda'}
	<Ajuda/>
{/if}
