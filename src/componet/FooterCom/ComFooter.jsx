import style from './ComFooter.module.css';
import clsx from 'clsx';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import {faInstagram,faFacebook,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';


function ComFooter (){
    return(
        <footer className={style.footer}>
            <section className={style.Col}>
                <div  className={style.Col4}>
                    <h3 className={style.footerTitle}>Subcribe and Save</h3>
                    <p className={style.descTitle}>Get $5 off your First Order over $50! Plus be the first to know about special offers, all new informations & more...</p>
                    <input placeholder='Email' className={style.footerInput}></input>
                    <button className={style.footerSignin}>Sign in</button>
                </div>
                <div  className={style.Col4}>
                    <h3 className={style.footerTitle}>Follow Us</h3>
                    <FontAwesomeIcon icon={faInstagram} className={clsx(style.footerBrand, style.footerLink) }/>
                    <FontAwesomeIcon icon={faFacebook} className={clsx(style.footerBrand, style.footerLink)}/>
                    <FontAwesomeIcon icon={faLinkedin} className={clsx(style.footerBrand, style.footerLink)}/>
                    <FontAwesomeIcon icon={faGithub} className={clsx(style.footerBrand, style.footerLink)}/>
                </div>

                <div  className={style.Col4}>
                    <h3 className={style.footerTitle}>Need Helps</h3>
                    <h5 className={style.footerLink}>Track My Order</h5>
                    <h5 className={style.footerLink}>
                        <Link to='/CancellationPolicy' className={style.LinkFooter}>Cancellation Policy</Link>
                    </h5>
                    <h5 className={style.footerLink}>
                        <Link to='/TermsService' className={style.LinkFooter}>Terms of Service</Link> 
                    </h5>
                    <h5 className={style.footerLink}>FAQ?</h5>
                    <h5 className={style.footerLink}>Return and Refund Policy</h5>
                    <h5 className={style.footerLink}>Product Request</h5>
                </div>

                <div  className={style.Col4}>
                    <h3 className={style.footerTitle}>Aptech Figure</h3>
                    <h5 className={style.footerLink}>
                        <Link to='/Introduction' className={style.LinkFooter}>About us</Link> 
                    </h5>
                    <h5 className={style.footerLink}>
                        <Link to='/ContractUs' className={style.LinkFooter}>Contract Us</Link> 
                    </h5>
                    <h5 className={style.footerLink}>
                        <Link to='/PrivacyPolicy' className={style.LinkFooter}>Privacy Policy</Link> 
                    </h5>
                    <h5 className={style.footerLink}>Review</h5>

                </div>
            </section>

            <h6 className={style.CopyRight}>© 2024 Powerd by Võ Huỳnh Phúc - # Bring all figure you want</h6>
        </footer>
    )
}

export default ComFooter;