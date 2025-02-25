import style from './CancellationPolicy.module.css';
// import component
import FooterNavbar from '../../componet/ComNavbarFooter/ComNavbarFooter';

function CancellationPolicyPage(){
    return(
        <main>
            <h1 className={style.titlePage}>Cancellation Policy</h1>
            <FooterNavbar/>
            <section className={style.contentText}>
                <p >Japan Figure reserves the right to accept or decline cancellation requests on a case-by-case basis. Please note that we may not be able to cancel orders that have already been shipped, but can be returned as described in our Return Policy.
                These are common cancellation cases:</p>
            </section>
        
            <section className={style.contentText}>
                <h2 className={style.contentHeader}>Cancel from Buyer</h2>
                <p >Typically, orders are non-cancellable once placed. However, at Japan Figure, we do accept cancellation requests with an applicable fee.
                We provide two refund options for pre-orders and in-stock items. If you opt for store credit (points), there will be no fee, and you'll enjoy the benefits of having credit with no expiration, protection against exchange rate fluctuations, and convenient future purchases. However, if you choose a refund to your original payment method, a 5% fee will be deducted to cover transaction costs, and an additional 5-10% fee may apply for stock and handling expenses. Please read more detailed information below.</p>
            </section>

            <section className={style.contentText}>
                <h2 className={style.contentHeader}>For Pre-order</h2>
                <p >Pre-order items come with unique considerations and entail greater responsibilities due to their limited quantity. Therefore, in the event of a Pre-Order cancellation, we kindly request that you understand and acknowledge your partial responsibility in this matter. In particular:</p>
                <ul>
                    <li className={style.DetailLine1}>Cancellation within 7 Days before Release Date: If you decide to cancel your pre-order up to 7 days before the release date, please be aware that a 10% cancellation fee of the item price will apply. You will only receive a refund of 90% of the pre-order value</li>
                    <li className={style.DetailLine1}>Cancellations after the 7-Day Deadline: Should you choose to cancel your pre-order after the 7-day deadline has passed, a 15% cancellation fee will be applicable. This will result in an 85% refund of the pre-order value. As the release date approaches, our obligations increase, and this fee will help us cover the associated costs (e.g. Prepare for sourcing</li>
                    <li className={style.DetailLine1}>Cancellations due to delay of manufacture: Regretfully, free cancellations for delayed release dates are not possible as orders have been placed and paid for because we need that fee to cover the associated costs (e.g. Prepare for sourcing) and manufacturing company decisions impact the release process, beyond our control. We apologize for any inconvenience and appreciate your understanding.</li>
                </ul>
            </section> 

            <section className={style.contentText}>
                <h2 className={style.contentHeader}>For Orders in "Processing" Status</h2>
                <p>We may also automatically collect certain information about your interaction with the Services ("Usage Data"). To do this, we may use cookies, pixels and similar technologies ("Cookies"). Usage Data may include information about how you access and use our Site and your account, including device information, browser information, information about your network connection, your IP address and other information regarding your interaction with the Services.</p>
            </section>

            <section className={style.contentText}>
                <h3 className={style.contentHeader}>Manufacturer Cancellations or Delays</h3>
                <ul className={style.listContent}>
                    <li className={style.DetailLine}>Manufacturer Cancellations: In less common cases, the manufacturer may cancel a product's production or availability. Should such a situation occur, our customer support team will promptly notify affected customers and provide suitable alternatives or refunds</li>
                    <li className={style.DetailLine}>Manufacturer Delays: Manufacturers may occasionally face delays in product release dates. We always assure our customers that we will do our best to keep you informed of any such delays and provide updated estimated delivery times as soon as possible.</li>
                   
                </ul>
                
            </section>

        </main>
    )
}

export default CancellationPolicyPage;