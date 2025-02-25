import style from './PrivacyPolicyPage.module.css';
// import component
import FooterNavbar from '../../componet/ComNavbarFooter/ComNavbarFooter';

function PrivacyPolicyPage(){
    return(
        <main>
            <h1 className={style.titlePage}>Privacy Policy</h1>
            <FooterNavbar/>
            <section className={style.contentText}>
                <p >Last updated: September 29, 2024</p>
            </section>
            <section className={style.contentText}>
                <p >This Privacy Policy describes how Japan Figure Store - #1 Bring all figure you want (the "Site", "we", "us", or "our") collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from japan-figure.com (the "Site") or otherwise communicate with us regarding the Site (collectively, the "Services"). For purposes of this Privacy Policy, "you" and "your" means you as the user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected pursuant to this Privacy Policy.</p>
            </section>
            <section className={style.contentText}>
                <p >Please read this Privacy Policy carefully</p>
            </section>
            <section className={style.contentText}>
                <h2 className={style.contentHeader}>Changes to This Privacy Policy</h2>
                <p >We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Site, update the "Last updated" date and take any other steps required by applicable law.</p>
            </section>
            <section className={style.contentText}>
                <h2 className={style.contentHeader}>How We Collect and Use Your Personal Information</h2>
                <p >To provide the Services, we collect and have collected over the past 12 months personal information about you from a variety of sources, as set out below. The information that we collect and use varies depending on how you interact with us.</p>
                <p >In addition to the specific uses set out below, we may use information we collect about you to communicate with you, provide or improve or improve the Services, comply with any applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.</p>
            </section>  
            <section className={style.contentText}>
                <h3 className={style.contentHeader}>Information We Collect Directly from You</h3>
                <ul className={style.listContent}>Information that you directly submit to us through our Services may include:
                    <li>Contact details including your name, address, phone number, and email.</li>
                    <li>Order information including your name, billing address, shipping address, payment confirmation, email address, and phone number.</li>
                    <li>Account information including your username, password, security questions and other information used for account security purposes.</li>
                    <li>Shopping information including the items you view, put in your cart, saved into your account like loyalty points, reviews, referrals or gift cards, or purchases</li>
                    <li>Loyalty points/product reviews/referrals/gift cards saved</li>
                    <li>Customer support information including the information you choose to include in communications with us, for example, when sending a message through the Services.</li>
                </ul>
                <p>Some features of the Services may require you to directly provide us with certain information about yourself. You may elect not to provide this information, but doing so may prevent you from using or accessing these features.</p>
            </section>

            <section className={style.contentText}>
                <h2 className={style.contentHeader}>Information We Collect about Your Usage</h2>
                <p>We may also automatically collect certain information about your interaction with the Services ("Usage Data"). To do this, we may use cookies, pixels and similar technologies ("Cookies"). Usage Data may include information about how you access and use our Site and your account, including device information, browser information, information about your network connection, your IP address and other information regarding your interaction with the Services.</p>
            </section>
            <section className={style.contentText}>
                <h2 className={style.contentHeader}>International Users</h2>
                <p className={style.LastContent}>Please note that we may transfer, store and process your personal information outside the country you live in. Your personal information is also processed by staff and third party service providers and partners in these countries.
                If we transfer your personal information out of Europe, we will rely on recognized transfer mechanisms like the European Commission's Standard Contractual Clauses, or any equivalent contracts issued by the relevant competent authority of the UK, as relevant, unless the data transfer is to a country that has been determined to provide an adequate level of protection.</p>
            </section>
        </main>
    )
}

export default PrivacyPolicyPage;