// import css
import style from '../ProductList/ProductList.module.css';
import clsx from 'clsx';
//import 
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';
//import SortNavbar from '../../componet/ComSortNavBar/ComSortNavBar';

function ProductListPage (){
    return(
        <>
            <h5 className={style.header}>Home/ Anime Figure</h5>
            <h4 className={style.header1}>anime figure</h4>
            <nav className={style.navbarLine}>
                <FontAwesomeIcon icon={faList} className={clsx(style.navbar)}/>
                <h6 className={clsx(style.navbar, style.filterheader)}>Filter</h6>
            </nav>
            
        </>
    )
}

export default ProductListPage;