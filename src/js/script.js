// ARRAY DE IMAGENS

const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener('click',()=>{
    navMenu.classList.toggle("active");
    menuIcone.classList.toggle("open");
})

function cardapioPeixe() {
    let cardapio = document.getElementsByName("section-cardapio");

    cardapio[0].innerHTML = `
        <section class="cardapio" name="cardapio">
            <article>
                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/lagosta.webp" alt="">
                        <h3 class="nome-cardapio">Lagosta lobo</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>320</p>
                    </div>
                </div>
                
                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/deco-dory.webp" alt="">
                        <h3 class="nome-cardapio">cirurgião pata</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>80</p>
                    </div>
                </div>

                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/deco-nemo.webp" alt="">
                        <h3 class="nome-cardapio">Peixe-Palhaço</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>80</p>
                    </div>
                </div>
            </article>

            <article>
                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/foto-atum.jpg" alt="">
                        <h3 class="nome-cardapio">Peixe Atum</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>250</p>
                    </div>
                </div>

                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/tubarao-tigre.webp" alt="">
                        <h3 class="nome-cardapio">Tubarão-Tigre</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>480</p>
                    </div>
                </div>

                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/caranguejo.webp" alt="">
                        <h3 class="nome-cardapio">Caranguejo</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>400</p>
                    </div>
                </div>
            </article>
        </section>`;
}

function cardapioItem () {
    let cardapio = document.getElementsByName("section-cardapio");

    cardapio[0].innerHTML = `
        <section class="cardapio" name="cardapio">
            <article>
                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/item-bastao.webp" alt="">
                        <h3 class="nome-cardapio">power bastão</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>1220</p>
                    </div>
                </div>
                
                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/item-arpao.webp" alt="">
                        <h3 class="nome-cardapio">Arpão Grande</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>830</p>
                    </div>
                </div>

                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/item-chapolim.webp" alt="">
                        <h3 class="nome-cardapio">Marreta Bionic</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>1500</p>
                    </div>
                </div>
            </article>

            <article>
                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/item-box.webp" alt="">
                        <h3 class="nome-cardapio">Luva de Box</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>450</p>
                    </div>
                </div>

                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/item-galinha.webp" alt="">
                        <h3 class="nome-cardapio">Galinha violenta</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>480</p>
                    </div>
                </div>

                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/item-picareta.webp" alt="">
                        <h3 class="nome-cardapio">Picareta minero</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>310</p>
                    </div>
                </div>
            </article>
        </section>`;

}

function cardapioIngred () {
    let cardapio = document.getElementsByName("section-cardapio");

    cardapio[0].innerHTML = `
        <section class="cardapio" name="cardapio">
            <article>
                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/ingred-shoyo.webp" alt="">
                        <h3 class="nome-cardapio">Molho Shoyo</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>40</p>
                    </div>
                </div>
                
                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/ingred-miso.webp" alt="">
                        <h3 class="nome-cardapio">Molho Miso</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>80</p>
                    </div>
                </div>

                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/ingred-cenora.webp" alt="">
                        <h3 class="nome-cardapio">Tomate fresco</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>20</p>
                    </div>
                </div>
            </article>

            <article>
                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/ingred-tomate.webp" alt="">
                        <h3 class="nome-cardapio">Cenouras</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>20</p>
                    </div>
                </div>

                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/ingred-mayo.webp" alt="">
                        <h3 class="nome-cardapio">Maionese</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>65</p>
                    </div>
                </div>

                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/ingred-sal.webp" alt="">
                        <h3 class="nome-cardapio">Tempero Sal</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>35</p>
                    </div>
                </div>
            </article>
        </section>`
}

function cardapioPrato () {
    let cardapio = document.getElementsByName("section-cardapio");

    cardapio[0].innerHTML = `
        <section class="cardapio" name="cardapio">
            <article>
                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/prato-bacalhau.webp" alt="">
                        <h3 class="nome-cardapio">bacalhau frito</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>145</p>
                    </div>
                </div>
                
                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/prato-sushi-vegetal.webp" alt="">
                        <h3 class="nome-cardapio">Sushi Vegetal</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>215</p>
                    </div>
                </div>

                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/prato-sushi-tubarao.webp" alt="">
                        <h3 class="nome-cardapio">Rabo de tubarão</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>220</p>
                    </div>
                </div>
            </article>

            <article>
                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/prato-habanero-frito.webp" alt="">
                        <h3 class="nome-cardapio">Habanero frito</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>200</p>
                    </div>
                </div>

                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/prato-racemosa.webp" alt="">
                        <h3 class="nome-cardapio">Barca Racemosa</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>285</p>
                    </div>
                </div>

                <div class="item-cardapio">
                    <div class="titulo-cardapio">
                        <img src="src/assets/prato-tamago-egg.webp" alt="">
                        <h3 class="nome-cardapio">Tamago Egg</h3>
                    </div>
                    <div class="preco">
                        <img src="src/assets/moeda.png" alt="" class="moeda">
                        <p>195</p>
                    </div>
                </div>
            </article>
        </section>`
}

let imagens = [
    "src/assets/Foto_Slide_Show.jpg", 
    "src/assets/Foto_Slide_Show2.jpg", 
    "src/assets/Foto_Slide_Show3.jpg", 
    "src/assets/Foto_Slide_Show4.jpg", 
    "src/assets/Foto_Slide_Show5.jpg", 
];

// POSIÇÃO QUE VAI INICIAR AS IMAGENS
let index = 0;

// TEMPO PARA TROCAR AS IMAGENS
let tempo = 5000; //3 segundos

// FUNÇÃO DO SLIDESHOW
function SlideShow(){
    // DOM - PEGA O ID E PASSA O CAMINHO DAS IMAGENS
    document.getElementById("imgBanner").src=imagens[index];
    // INCREMENTO (++ = +1)
    index++;

    // ESTRUTURA CONDICIONAL IF
    if(index == imagens.length){
        index=0;
    }
    // MÉTODO SETTIMEOUT PARA EXECUTAR A FUNÇÃO E CHAMAR O TEMPO
    setTimeout('SlideShow()', tempo)
}
// EXECUTANDO A FUNÇÃO
SlideShow();