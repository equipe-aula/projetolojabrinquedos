import React from 'react'

const ProdutoCard = ({titulo,preco,imagem}) => {
  return (
      <div className="bg-black rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-4 hover:border-[#95ff00]">
          <img src={imagem} alt={titulo} className="w-full h-[250px} object-cover" />
          <article className="text-center p-4">
              <h2 className="text-x1 text-[#95ff00] uppercase mb-3 font-bold">{titulo}</h2>
              <p className="text-white text-2xl font-bold mb-4">{preco}</p>

              <button className="bg-gradient-to-right from-cyan-400 to-purple-600 w-[50%] py-2 px-4 rounded-[20px] border-none cursor-pointer font-semibold transition-transform hover:bg-green-800 hover:text-white hover:scale-105 ">
                  Comprar
              </button>
          </article>

      </div>
  )
}

export default ProdutoCard