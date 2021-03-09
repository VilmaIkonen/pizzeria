import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addProduct, searchProduct} from '../store/actions';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const keyword = useSelector((state) => state.keyword);

  const handleChange = (e) => {
    let keyword = e.target.value;
    dispatch(searchProduct(keyword));
  };

  return (
    <>
      <main className='products'>  
        <h2>Our delicious pizzas</h2>
        <input type='text' placeholder='Search' onChange={handleChange} />
        <ul>
          {products
            .filter((item) =>
              item.title.toLowerCase().includes(keyword.toLowerCase())
            )
            .map((product) => (
              <li key={product.id}>
                <div className='product'>
                  <div  className='productDetails'>
                    <p>
                      <strong>{product.title} </strong>
                      {product.desc}
                    </p>
                    {product.price}€
                  </div>
                  <div>
                    <button onClick={() => dispatch(addProduct(product))}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
        </ul> 
      </main>
    </>
  );
};

export default Products;
