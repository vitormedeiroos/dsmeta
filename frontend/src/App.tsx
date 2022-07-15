import Header from "./componentes/Header"
import SalesCard from "./componentes/SalesCard"
//  se colocar mais de um na função vai dar errado,porque o compopnente react não pode importar mais de uma tag o h1 e o notification
function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
    //vai chamar a função que eu criei no index.tsx, notification button
    // esse <> </> (fragmnent) serve para validar o componente e funcionar os componetes que vc colocar
  ) //aqui vai declarar a função e dentro dela vai retornar um conteúdo
  // não pode retornar masi de um componente dentro de uma function
}
export default App // no React o componente visual que vc vai ver no site é uma função do js
