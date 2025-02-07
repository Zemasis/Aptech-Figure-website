import style from './ContractUs.module.css';

// import component
import FooterNavbar from '../../componet/ComNavbarFooter/ComNavbarFooter';
import ContractForm from '../../componet/ComContract/ComContractForm';

function ContractUs (){
    return(
        <main>
            <h1>Contract Us</h1>
            <FooterNavbar/>
            <section className={style.contentText}>
                <p>Hello and thank you for visiting our website!</p>
            </section>
            <section className={style.contentText}>
                <p >Please reach out to us with pre-purchase questions or for information about our products. Our inventory moves fast so if you see something you like grab it while you can. We receive new shipments every month so be sure to follow us on social media and check the website regularly.</p>
            </section>
            <ContractForm/>
        </main>
    )
}

export default ContractUs;