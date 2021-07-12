import products from './products';
import ProductGrid from './ProductsGrid';

const Results = () =>{
    
    // const [setState] = useState({
         
    //     sort: (min, max) => min.products.price - max.products.price
      
    //     const {sort} = setState
        
    //     const sortLevel = ({event}) => {
    //     let sorting 
    //     if (event.value === 0) {
    //         sorting = (min, max) => max.products.price - min.products.price
    //     } else if(event.value === 1) {
    //         sorting = (min, max) => min.products.price - max.products.price
    //     }


    // }
    // })
    
    return(<div>
        <h1>Results</h1>
        <section>{products.map(product=>{
            return(
                <>
                    <ProductGrid {...product}/>
                </>
            );
        })}</section>
    </div>)
}

export default Results