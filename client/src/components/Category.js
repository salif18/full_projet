import React from 'react';

const Category = ({all , drink ,plat , berguer, pizza, sandwich}) => {
    return (
        <>
            <div className='category'>
              <button className='btn btn-dark' onClick={()=>all()}>All</button>
              <button className='btn btn-dark' onClick={()=>drink()}>Drink</button>
              <button className='btn btn-dark' onClick={()=>plat()}>Plats</button>
              <button className='btn btn-dark' onClick={()=>berguer()}>Berguer</button>
              <button className='btn btn-dark' onClick={()=>pizza()}>Pizza</button>
              <button className='btn btn-dark' onClick={()=>sandwich()}>Sandwich</button>
            </div>
        </>
    );
};

export default Category;