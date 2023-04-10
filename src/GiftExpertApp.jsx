import React, { useState } from 'react'
import { AddCategory, GiftGrid } from './components';

const GiftExpertApp = () => {
  
  const [categories,setCategories] = useState(['One piece']);

  const onAddCategory = (newCategory) => {
    
    if(categories.includes(newCategory)) return;
    setCategories([newCategory,...categories])
  }

  return (
    <>
      <h1>GiftExpertApp</h1> 

      <AddCategory onNewCategory={ onAddCategory }/>

      { 
        categories.map(( category ) => ( 
          <GiftGrid 
            key={ category } 
            category={category}
          />
        ))
      }
    </>
  )
}

export default GiftExpertApp
