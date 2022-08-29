import React from 'react'

const ProductPage = ({ products }) => {
  return (
    <div>
      <h1>Products from the API</h1>
      {products.map((product) => {
          return <div key={product.id}>
                      <h2>{product.name}</h2>
                      <img 
                            style={{ width: '300px', height: '300px'}}
                            src={product.image_url} 
                            alt={product.name}
                        />
                        <p>{product.tipo}</p>
                  </div>

      })}
    </div>
  )
}

export default ProductPage