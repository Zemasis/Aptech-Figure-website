import style from './ComInterView.module.css';
import ProductInfo from '../ComProductInfo/ComProductInfo';
import ListProduct from '../../data/ListProduct';

function ShowColum ({start,end}){
    const productsToShow = ListProduct.slice(start, end);

    return (
        <div className={style.Col4}>
            {productsToShow.map((product)=>(
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