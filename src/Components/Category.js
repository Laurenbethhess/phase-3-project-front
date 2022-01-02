import React, { useEffect, useState } from 'react'

function Category({category}) {

    return (
        <div>
            {category.id}:  {category.category}
        </div>
    )
}
export default Category


