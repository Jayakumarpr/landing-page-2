import React from 'react'
import { useParams} from 'react-router-dom'

const ProductCartview = () => {
    const params=useParams();
  return (
    <div>
        <main>

        
         <div>
             product  {params.id}
         </div>
        
        </main>
    </div>
  )
}

export default ProductCartview
