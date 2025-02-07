import styleNav from './ComNavBar.module.css';
import { Link } from 'react-router-dom'



function ComNavBar(){
    return(
        <nav className={styleNav.navBar}>
            <ul>
                <li className={styleNav.navList}>
                    <Link to='/' className={styleNav.titleNav}>Home</Link>
                </li>
                <li className={styleNav.navList}>   
                    <Link to='/Introduction' className={styleNav.titleNav}>Introduction</Link>
                </li>
                <li className={styleNav.navList}>
                    <Link to='/ProductList' className={styleNav.titleNav}>Figure</Link>
                </li>
                <li className={styleNav.navList}>
                    <Link to='' className={styleNav.titleNav}>Order</Link>
                </li>
                <li className={styleNav.navList}>
                    <Link to='' className={styleNav.titleNav}>Special Offer</Link>
                </li>
                <li className={styleNav.navList}>
                    <Link to='' className={styleNav.titleNav}>Contract</Link>
                </li>
            </ul>
        </nav>
    )
}

export default ComNavBar;