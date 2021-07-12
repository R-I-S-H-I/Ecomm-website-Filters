import products from './products';

const Filters = () =>{
    function sortProducts(){
        let choice = document.getElementById("sortItems").value;
        if(choice === 'htl'){
            products.sort((a,b)=>{
                return b.price - a.price;
            })
            console.log(products);
            return products; // how to access this products array ??
        }
        else if(choice === 'lth'){
            products.sort((a,b)=>{
                return a.price - b.price;
            })
            console.log(products);
            return products; // how to access this products array ??
        }
    }
    return(<div>
        <label>
            Sort: 
            <select id="sortItems" onChange = {()=>sortProducts()}>
                <option name="htl" value="htl">High to Low</option>
                <option name="lth" value="lth">Low to High</option>
            </select>
        </label>
    </div>
    );
}

export default Filters