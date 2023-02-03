<script>
    import Voltar from "./Voltar.svelte"

    let pessoa = "bia"
    let nome = "Eduarda Almeida"
    let funcao = "Desenvolvedora Web"
    let curso = "Estudante de Sistemas para Internet no Instituto Federal de Pernambuco"
    let profissao = "Professora de Informática Básica"
    let linkedn = "https://www.linkedin.com/in/eduarda-beatriz-3489b2216/"
    let github = "https://github.com/edubia"

    function trocarPessoa(novaPessoa) {
        pessoa = novaPessoa 
        console.log(pessoa)
        if(pessoa == "bia"){
            nome = "Eduarda Almeida"
            funcao = "Desenvolvedora Web"
            curso = "Estudante de Sistemas para Internet no Instituto Federal de Pernambuco"
            profissao = "Professora de Informática Básica"
            linkedn = "https://www.linkedin.com/in/eduarda-beatriz-3489b2216/"
            github = "https://github.com/edubia"
        } else if(pessoa == "john"){
            nome = "Jonh Herick"
            funcao = "Desenvolvedor Web"
            curso = "Estudante de Sistemas para Internet no Instituto Federal de Pernambuco"
            profissao = "Designer Gráfico"
            linkedn = "https://www.linkedin.com/in/john-herick-b14617167/"
            github = ""
        } else {
            nome = "Allan Lima"
            funcao = " Orientador"
            curso = ""
            profissao = "Professor de Programação Imperative no Instituto Federal de Pernambuco Campus Igarassu."
            linkedn = ""
            github = "https://github.com/allan-diego"
        }
    }
</script>
<div>
    <div class="relative h-screen w-screen" style="background-image: url(https://mdbcdn.b-cdn.net/img/Photos/Others/background2.jpg); background-size: cover;">
        <div class="px-6 pt-6 md:px-12 md:pt-12 max-w-3xl m-auto">
            <div class="bg-white text-center text-gray-900 text-xl font-medium rounded-t-lg shadow-lg pt-6">
                <p>
                    Time
                </p>
            </div>
            <ul class="stepper bg-white rounded-b-lg shadow-lg" data-mdb-stepper="stepper">
                <li class="stepper-step stepper-active w-1/3">
                    <div class="stepper-head -ml-2" on:click={()=>trocarPessoa('bia')}>
                        <span class="stepper-head-icon p-1">
                            <i class="fas fa-kiss-wink-heart"></i>
                        </span>
                        <span class="stepper-head-text text-sm">
                            Eduarda Almeida
                        </span>
                    </div>
                </li>
                <li class="stepper-step stepper-active w-1/3">
                    <div class="stepper-head ml-2 -mr-2 md:ml-0" on:click={()=>trocarPessoa('john')}>
                        <span class="stepper-head-icon p-1">
                            <i class="fas fa-grin"></i>
                        </span>
                        <span class="stepper-head-text text-sm">
                            John Herick
                        </span>
                    </div>
                </li>
                <li class="stepper-step stepper-active w-1/3">
                    <div class="stepper-head -mr-2" on:click={()=>trocarPessoa('allan')}>
                        <span class="stepper-head-icon p-1">
                            <i class="fas fa-grin"></i>
                        </span>
                        <span class="stepper-head-text text-sm">
                            Allan Lima
                        </span>
                    </div>
                </li>
                </ul>        
                <div class="stepper-content">
                    <div class="flex justify-center bg-white max-w-lg m-auto shadow-lg rounded-b-lg">
                        <div class="rounded-b-lg bg-white max-w-sm">
                            <a href="#!">
                                <img class="rounded-b-lg" src="/src/{pessoa}.jpg" alt=""/>
                            </a>
                            <div class="p-6">
                                <h5 class="text-gray-900 text-xl font-medium mb-4">
                                    {nome}</h5>
                                    <p class="text-gray-700 text-base mb-2">
                                        {funcao}
                                    </p>
                                    <p class="text-gray-700 text-base mb-2">
                                        {curso}
                                    </p>
                                    <p class="text-gray-700 text-base mb-4">
                                    {profissao}
                                </p>
                                <div class="list-inside flex mx-auto justify-center">
                                    {#if github != ""}
                                    <a href= {github} class="px-2" target="_blank">
                                        <i class="fab fa-github fa-2x"></i>
                                    </a>
                                    {/if}
                                    {#if linkedn != ""}
                                    <a href= {linkedn} class="px-2" target="_blank">
                                        <i class="fab fa-linkedin fa-2x"></i>
                                    </a>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>          
                <div class="flex justify-center">
                    <div class="max-w-3xl">
                        <div class="block p-6 rounded-lg shadow-lg bg-white m-4">
                            <div class="md:flex md:flex-row">
                                <div
                                class="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0"
                                    >
                                    <img
                                    src="/src/logo-ifpe.svg"
                                    class="rounded-full shadow-md"
                                    alt=""
                                    />
                                </div>
                                <div class="md:ml-6">
                                    <p class="text-gray-700 text-base  mb-6">
                                        Jogo desenvolvido para a disciplina de Programação Imperativa do curso de Sistemas
                                        para Internet do Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco
                                        Campus Igarassu.
                                    </p>
                                     <ul class="flex justify-center pb-2 md:flex md:justify-start">
                                         <li>
                                             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                 <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                             </svg>
                                            </li>
                                         <li>
                                             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                             </svg>
                                         </li>
                                         <li>
                                             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                            </svg>
                                        </li>
                                         <li>
                                             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                 <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                             </svg>
                                            </li>
                                         <li>
                                             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                 <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                             </svg>
                                            </li>
                                    </ul>
                                    <p class="font-semibold text-gray-500 mb-0">© 2023 Copyright: Code Hunters</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Voltar/>
        </div>
    </div>
</div>
