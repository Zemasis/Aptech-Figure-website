import React from 'react';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar} from "@fortawesome/free-solid-svg-icons";
import style from './ComProductInfo.module.css'
// Import COmponent


function ProductInfo ({name, path,NewPrice ,brand,description,rating}){
    
    return(
        <div className={style.BlockInfo}>
            <img src={path} alt={name} className={style.sizePic}/>
            <div className={style.RowPrice}>
                <p className={style.ListPrice}>
                {NewPrice}
                <FontAwesomeIcon className={style.faHeart} icon={faHeart}/>
                </p>
            </div>
            <h5 className={style.titleBox}>{description}</h5>
            <h5 className={style.brand}>{brand}</h5>
            <div className={style.RowRating}>
                <p className={style.NumberRating}>
                    <div className={style.rating}>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    {rating} review
                </p>
            </div>
            
        </div>
    )
}

export default ProductInfo;