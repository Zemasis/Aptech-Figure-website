//import CSS/ src
import style from './TermsService.module.css';

// Import Component
import FooterNavbar from "../../componet/ComNavbarFooter/ComNavbarFooter";

function TermsServicePage(){
    return (
        <main>
            <h1 className={style.titlePage}>Terms of service</h1>
            <FooterNavbar/>
            <section className={style.contentText}>
                <p >This website is operated by Aptech Figure. Throughout the site, the terms “we”, “us” and “our” refer to Japan Figure. Japan Figure offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
            </section>
            <section className={style.contentText}>
                <p >By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.</p>
            </section>
            <section className={style.contentText}>
                <p >Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service</p>
            </section>
            <section className={style.contentText}>
                <p >Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</p>
            </section>
            <section className={style.contentText}>
                <h4 className={style.contentHeader}>SECTION 1 - ONLINE STORE TERMS</h4>
                <p >Typically, orders are non-cancellable once placed. However, at Japan Figure, we do accept cancellation requests with an applicable fee.</p>
                <p >We provide two refund options for pre-orders and in-stock items. If you opt for store credit (points), there will be no fee, and you'll enjoy the benefits of having credit with no expiration, protection against exchange rate fluctuations, and convenient future purchases. However, if you choose a refund to your original payment method, a 5% fee will be deducted to cover transaction costs, and an additional 5-10% fee may apply for stock and handling expenses. Please read more detailed information below.</p>
            </section>  
            <section className={style.contentText}>
                <h4 className={style.contentHeader}>SECTION 2 - GENERAL CONDITIONS</h4>
                <p>We reserve the right to refuse service to anyone for any reason at any time.You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.</p>
                <p>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.</p>
                <p>The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.</p>
            </section>

            <section className={style.contentText}>
                <h4 className={style.contentHeader}>SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES</h4>
                <p>Prices for our products are subject to change without notice.We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p>
            </section>
            <section className={style.contentText}>
                <h4 className={style.contentHeader}>SECTION 5 - PRODUCTS OR SERVICES (if applicable)</h4>
                <p className={style.LastContent}>Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.</p>
                <p className={style.LastContent}>We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.</p>
                <p className={style.LastContent}>We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.</p>
                <p>We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.</p>
            </section>
        </main>
    )
}

export default TermsServicePage;