import Header from "./componentes/Header"
import SalesCard from "./componentes/SalesCard"
//  se colocar mais de um na função vai dar errado,porque o compopnente react não pode importar mais de uma tag o h1 e o notification
function App() {
  /* 1º - aqui vai declarar a função e dentro dela vai retornar um conteúdo
    2º - não pode retornar mais de um componente dentro de uma function*/
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
    //vai chamar a função do index.tsx (Header)
    // esse <> </> (fragmnent) serve p/ validar o componente e colocar + de um
  ) 
  
}
export default App // no React o componente visual que vc vai ver no site é uma função do js
