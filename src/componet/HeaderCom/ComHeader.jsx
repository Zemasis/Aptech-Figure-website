import LogoFigure from '../../assets/images/Aptechfigure.PNG';
import style from './ComHeader.module.css';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass,faBagShopping} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';


function ComHeader (){
    return(
        <header className={style.blockHeader}>
            <img src={LogoFigure} alt="Ảnh Logo"/>
            <input className={style.findInput} type='text' placeholder='Find'></input>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={style.searchBtn}/>
            <FontAwesomeIcon icon={faBagShopping} className={style.cartBtn}/>
            <div className={style.setWishtLisht}>
                <FontAwesomeIcon icon={faHeart} className={style.whislistBtn}/>
                <h3 className={style.whislistTitle}>Wishlist</h3>
            </div>
            <div className={style.accessModal}>
                <h3 className={style.regisBtn}>Register</h3> 
                <h3 className={style.loginBtn}>Login</h3>
            </div>

        </header>
    )
}

export default ComHeader;