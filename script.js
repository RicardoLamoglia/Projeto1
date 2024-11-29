const nome = document.getElementById("nome")
const descricao = document.getElementById("descricao")

// variáveis
const projetos = document.getElementById("projetos")
const curriculo = document.getElementById("curriculo")
const codigo_fonte = document.getElementById("codigo_fonte")
const certificados = document.getElementById("certificados")

function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    // Changes to light mode
    img.setAttribute("src", "./assets/Foto-dia.png.png")
    nome.innerText = "Ricardo Gonçalves Lamoglia"

    descricao.innerText = "Estudande de Engenharia da Computação, a procura de uma chance de receber mais conhecimento "

    projetos.innerText = "Meu portifólio"
    projetos.setAttribute(
      "href",
      "https://github.com/RicardoLamoglia?tab=repositories"
    )

    curriculo.innerText = "Meu currículo"
    curriculo.setAttribute(
      "href",
      "https://drive.google.com/file/d/1sFYK1mrsDXzAICKcQ5jrAE-FJgbzCCij/view?usp=sharing"
    )

    codigo_fonte.innerText = "Código fonte desse projeto"
    codigo_fonte.setAttribute(
      "href",
      "https://github.com/RicardoLamoglia/Projeto1"
    )

    certificados.innerText = "Meus Certificados"
    certificados.setAttribute(
      "href",
      "https://drive.google.com/file/d/1AysGCXsGHSLmvDt-PO5j33hrLi1Dq2Q2/view?usp=sharing"
    )

    // Adicione aqui outras modificações necessárias para o modo claro
  } else {
    // Changes to dark mode
    img.setAttribute("src", "./assets/Foto para perfil noite.jpeg")
    nome.innerText = "Lamoglia"
    descricao.innerText = "Conheça mais sobre mim"

    projetos.innerText = "Um pouco de mim"
    projetos.setAttribute(
      "href",
      "https://drive.google.com/file/d/17Fkxy_WQ9Yrv06neXTb2PDkwXaH75Aml/view?usp=sharing"
    )

    curriculo.innerText = "Localização"
    curriculo.setAttribute(
      "href",
      "https://www.google.com.br/maps/place/R.+Amilcar+de+Castro,+133+-+Jacarepaguá,+Rio+de+Janeiro+-+RJ,+22775-053/@-22.9696762,-43.3882035,17z/data=!3m1!4b1!4m6!3m5!1s0x9bdbdf8bff203b:0x2e23ffea664a5e39!8m2!3d-22.9696812!4d-43.3856232!16s%2Fg%2F11g8bcg114?entry=ttu"
    )

    codigo_fonte.innerText = "Número pessoal"
    codigo_fonte.setAttribute(
      "href",
      "https://api.whatsapp.com/send/?phone=21983836713&text&type=phone_number&app_absent=0"
    )

    certificados.innerText = "Cartão de Visita"
    certificados.setAttribute(
      "href",
      "https://drive.google.com/file/d/125l6PAl_P_QZOewtAxKVaKq6MD_eNMAj/view?usp=sharing"
    )

    // Adicione aqui outras modificações necessárias para o modo escuro
  }
}
