<script>
    import Voltar from "./Voltar.svelte"

    let passo = "Passo 1"
    let step1 = "Você terá 5 tentativas de adivinhação."
    let step2 = "Preencha as celulas pressionando as letras do teclado."
    let step3 = ""
    let step4 = ""
    function trocarPasso(novoPasso) {
        passo = novoPasso
        console.log(passo)
        if(passo == "passo 1"){
          step1 = "Você terá 5 tentativas de adivinhação."
          step2 = "Preencha as celulas pressionando as letras do teclado."
          step3 = ""
          step4 = ""
        } else if(passo == "passo 2"){
            step1 = "Após preencher todas as celulas da linha pressione o botão de 'verificar' para enviar."
            step2 = ""
            step3 = ""
            step4 = ""

        } else {
            step1 = "Depois de cada tentativa, a cor das letras mudará para mostrar o quão perto estava a sua tentativa da palavra."
            step2 = "Se a celula que cotem a letra da palavra secreta ficar verde, quer dizer que a letra está na palavra e no lugar correto."
            step3 = "Caso fique amarelo, quer dizer que a letra está na palavra, mas num lugar errado."
            step4 = "Caso fique cinza, quer dizer que a letra não existe na palavra."

        }
    }
</script>

<div class="relative h-screen w-screen" style="background-image: url(https://mdbcdn.b-cdn.net/img/Photos/Others/background2.jpg); background-position-y: center;">
    <div class="px-6 pt-6 md:px-12 md:pt-12 max-w-3xl m-auto">    
        <div class="bg-white text-center text-gray-900 text-xl font-medium rounded-t-lg shadow-lg pt-6">
            <p>
                Como jogar?
            </p>
        </div>
        <ul class="stepper bg-white rounded-b-lg shadow-lg" data-mdb-stepper="stepper">
            <li class="stepper-step stepper-active w-1/3">
                <div class="stepper-head -ml-2" on:click={()=>trocarPasso('passo 1')}>
                    <span class="stepper-head-icon">
                        <i class="far fa-question-circle"></i>
                    </span>
                    <span class="stepper-head-text text-sm">
                        Passo 1
                    </span>
                </div>
                
            </li>
            <li class="stepper-step stepper-active w-1/3">
                <div class="stepper-head -ml-2" on:click={()=>trocarPasso('passo 2')}>
                    <span class="stepper-head-icon">
                        <i class="far fa-question-circle"></i>
                    </span>
                    <span class="stepper-head-text text-sm">
                        Passo 2
                    </span>
                </div>
               
            </li>
            <li class="stepper-step stepper-active w-1/3">
                <div class="stepper-head -ml-2" on:click={()=>trocarPasso('passo 3')}>
                    <span class="stepper-head-icon">
                        <i class="far fa-question-circle"></i>
                    </span>
                    <span class="stepper-head-text text-sm">
                        Passo 3
                    </span>
                </div>
            </li>
        </ul>
        <div class="stepper-content">
            <div class="flex justify-center">
                <div class="rounded-b-lg bg-white max-w-lg">
                    <div class="p-6 text-center">
                        <p class="text-gray-700 text-base mb-2">
                            {step1}                                
                            </p>
                        <p class="text-gray-700 text-base mb-2">
                            {step2}
                        </p>
                        <p class="text-gray-700 text-base mb-2">
                            {step3}
                        </p>
                        <p class="text-gray-700 text-base mb-2">
                            {step4}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Voltar/>
</div>
        
<ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab3"
  role="tablist">
  <li class="nav-item" role="presentation">
    <a href="#tabs-home3" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tab3" data-bs-toggle="pill" data-bs-target="#tabs-home3" role="tab" aria-controls="tabs-home3"
      aria-selected="true">Home</a>
  </li>
  <li class="nav-item" role="presentation">
    <a href="#tabs-profile3" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
      aria-controls="tabs-profile3" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item" role="presentation">
    <a href="#tabs-messages3" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab3" data-bs-toggle="pill" data-bs-target="#tabs-messages3" role="tab"
      aria-controls="tabs-messages3" aria-selected="false">Messages</a>
  </li>
</ul>
<div class="tab-content" id="tabs-tabContent3">
  <div class="tab-pane fade show active" id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">
    <p>
        Após preencher todas as celulas da linha pressione o botão de "verificar" para enviar.
    </p>
    <p>
        Preencha as celulas pressionando as letras do teclado.
    </p>
  </div>
  <div class="tab-pane fade" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
    Após preencher todas as celulas da linha pressione o botão de "verificar" para enviar.
  </div>
  <div class="tab-pane fade" id="tabs-messages3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
    Tab 3 content button version
  </div>
</div>