// import css
import style from '../ProductList/ProductList.module.css';
import clsx from 'clsx';
//import 
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';
//import SortNavbar from '../../componet/ComSortNavBar/ComSortNavBar';
// import component
import ShowColum from '../../componet/ComInterView/ComInterView';
//import ButtonSort from '../../componet/ComButtonSort/ComButtonSort';
import SortNavbar from '../../componet/ComSortNavBar/ComSortNavBar';

function ProductListPage (){
    return(
        <>
            <h5 className={style.header}>Home/ Anime Figure</h5>
            <h4 className={style.header1}>anime figure</h4>
            <nav className={style.navbarLine}>
                <FontAwesomeIcon icon={faList} className={clsx(style.navbar)}/>
                <h6 className={clsx(style.navbar, style.filterheader)}>Filter</h6>
                <h7 className={clsx(style.navbar, style.filterheader, style.filterlabel)}>Sort by</h7>
                <h8 className={clsx(style.navbar, style.buttonSort)}>Popular</h8>
                <h8 className={clsx(style.navbar, style.buttonSort)}>Newest</h8>
                <h8 className={clsx(style.navbar, style.buttonSort)}>Weight</h8>   
                <select id="price" name="price" className={clsx(style.navbar, style.dropSort)}>
                    <option value="Lowest">Lowest</option>
                    <option value="Hightest">Hightest</option>
                    <option value="Rated">Rated</option>
                </select> 
            </nav>
            <section className={style.sectionInline}>
                <div className={style.sortNavbarContainer}>
                    <SortNavbar />
                </div>
                <div className={style.showColumContainer}>
                    
                    <ShowColum start={0} end={3} />
                    <ShowColum start={3} end={6} />
                    <ShowColum start={6} end={9} />
                </div>
            </section>
        </>
    )
}

export default ProductListPage;