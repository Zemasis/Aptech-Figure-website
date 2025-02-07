import style from './ComInterView.module.css';
import ProductInfo from '../ComProductInfo/ComProductInfo';
import ListProduct from '../../data/ListProduct';

function ShowColum (){
   
    return (
        <div className={style.Col4}>
            {ListProduct.map((product)=>(
                <ProductInfo
                    key={product.index}
                    name= {product.name}
                    path = {product.path}
                    NewPrice = {product.NewPrice}
                    description={product.description}
                    brand = {product.brand}
                    rating ={product.rating}
                />
               
            ))}
        </div>
    );
}

export default ShowColum;