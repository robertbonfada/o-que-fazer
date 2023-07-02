import { useState } from 'react'
import './App.css'

function App() {
  
  const [sugestao, setSugestao] = useState('')

  const sugestoes = [
    'Leia um livro interessante que você ainda não tenha lido.',
    'Assista a um filme ou série que esteja na sua lista de assistir.',
    'Experimente uma nova receita e cozinhe uma refeição saborosa.',
    'Faça uma caminhada ao ar livre e aproveite a natureza.',
    'Explore um novo hobby, como pintura, tricô, fotografia ou jardinagem.',
    'Comece um diário e escreva sobre seus pensamentos, sentimentos e experiências.',
    'Faça um quebra-cabeça desafiador para exercitar seu cérebro.',
    'Faça uma sessão de exercícios em casa ou inscreva-se em uma aula de ioga ou pilates.',
    'Aprenda a tocar um instrumento musical ou pratique suas habilidades se você já sabe tocar.',
    'Assista a vídeos de tutoriais e aprenda algo novo, como desenhar, programar ou fazer artesanato.',
    'Visite um museu ou galeria de arte local.',
    'Faça uma limpeza em um armário ou em uma gaveta da sua casa.',
    'Convide amigos para um jogo de tabuleiro ou cartas.',
    'Assista a vídeos engraçados ou de bichinhos fofos na internet para se divertir.',
    'Escreva uma carta para um amigo ou membro da família que você não vê há algum tempo.',
    'Faça uma lista de metas e planeje como alcançá-las.',
    'Faça uma aula online gratuita para aprender algo novo, como um novo idioma.',
    'Faça um piquenique no parque com comidas deliciosas.',
    'Faça uma maratona de seus programas de TV favoritos.',
    'Voluntarie-se em uma organização local para ajudar quem precisa.',
  ] 

  const sugerir = () => {
    const index = Math.floor(Math.random() * sugestoes.length);
    setSugestao(sugestoes[index]);
  }

  return (
   <div className='main'>
      <h1>{ (sugestao != '') ? sugestao : 'O QUE FAZER?'}</h1>
      <button onClick={sugerir}>Me dê sugestões</button>
   </div>
  )
}

export default App

