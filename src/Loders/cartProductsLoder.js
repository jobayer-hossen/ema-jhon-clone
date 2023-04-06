import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async ()=>{
   const load = await fetch('products.json');
   const product = await load.json();



   const storedCart = getShoppingCart()
   const savedCart = [];

   for( const id in storedCart){
        const addedProduct = product.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
   }


   return savedCart ;
    
}






export{
    cartProductsLoader
}