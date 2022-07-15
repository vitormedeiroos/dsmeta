import NotificationButton from "./componentes/NotificationButton"
//  se colocar mais de um na função vai dar errado,porque o compopnente react não pode importar mais de uma tag o h1 e o notification
function App() {
  return (
    <>
      <h1>Olá Mundo!</h1>
      <NotificationButton />
      <NotificationButton />
    </>
    //vai chamar a função que eu criei no index.tsx, notification button
    // esse <> </> (fragmnent) serve para validar o componente e funcionar os componetes que vc colocar 
  )//aqui vai declarar a função e dentro dela vai retornar um conteúdo 
  // nesse caso vai dar vermelho porque o compopnente react não pode importar mais de uma tag o h1 e o notification button
}
export default App // no React o componente visual que vc vai ver no site vai ser uma função do javascript
