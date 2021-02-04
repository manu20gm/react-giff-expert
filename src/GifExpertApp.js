import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['Final Fantasy VII', 'Red Dead Redemtion', 'Pokemon Go'];

    const [categories, setCategories] = useState(['Final Fantasy VII']);

    /* const handleApp = () => {
        setCategories( [...categories, 'Dragon Ball'] );
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                setCategories={setCategories}
                categories={categories}
            />
            <hr />


            <ol>
                {
                    categories.map(
                        category => <GifGrid 
                        category={ category } 
                        key = { category }
                        
                        />)
                }
            </ol>
        </>
    )
}


