import style from './ComSortNavBar.module.css'

function SortNavbar (){
    return(
        <>
        <div className={style.FooterNavbar}>
            <h5 className={style.FooterNavbarTitle}>Home / Aptech Figure</h5>
            <div>
                <div className={style.NavBlock}>
                    <h3 className={style.titleNav}>Aptech Figure</h3>
                    <ul className={style.NavCol}>
                        <li className={style.NavbarDetail}>Contract us</li>
                        <li className={style.NavbarDetail}>Privacy Policy</li>
                        <li className={style.NavbarDetail}>Review</li>
                    </ul>
                </div>
                <div className={style.NavBlock}>
                    <h3 className={style.titleNav}>NeedHelp</h3>
                    <ul className={style.NavCol}>
                        <li className={style.NavbarDetail}>Track My Order</li>
                        <li className={style.NavbarDetail}>Cancellation Policy</li>
                        <li className={style.NavbarDetail}>Terms of Service</li>
                        <li className={style.NavbarDetail}>FAQ?</li>
                        <li className={style.NavbarDetail}>Return & Refund Policy</li>
                        <li className={style.NavbarDetail}>Product Request</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default SortNavbar;