import style from './IntroductionPage.module.css';
import gundam from '../../assets/images/gundam.png'
import GirlAnime from '../../assets/images/GIrlanimePic.png'
// import component
import FooterNavbar from '../../componet/ComNavbarFooter/ComNavbarFooter';

function IntroductionPage(){
    return(
        <main>
            <h2 className={style.pageTitle}>About Aptech Figure</h2>
            <FooterNavbar/>
            <section className={style.contentText}>
                <p >Aptech Figure is a small organization of 2 people who love Japanese culture, especially character models in anime and manga. We want to provide the best model products that suit each person's requirements. Coming to Aptech Figure, you can find models of the characters you've always wanted to display in your collection</p>
            </section>
            <img src={gundam} alt="Ảnh Gundam" className={style.Picgundame}/>
            <section className={style.contentText}>
                <h2 className={style.contentTitle}>Our Vision</h2>
                <p >Aptech Figure will be the best place for those who are passionate figures from Japan. We will bring you the most reliable products. It is not only the exquisite in designation but also the perfection when it comes to you. Therefore, when it comes to Aptech Figure, the value we bring to you is Japanese-standardized products and absolute trust.</p>
            </section>
            <section className={style.contentText}>
                <h2 className={style.contentTitle}>Our Mission</h2>
                <p >Aptech Figure's mission is "Bring to you the best figure you want." Items from Pokemon, Yu-Gi-Oh!, Rilakkuma, My Hero Academia, Jujutsu Kaisen, Mario, Digimon, Demon Slayer and more. Unique Nendoroids, collectible figures to the rarest TCG cards to complete your collection. That's why we will always try our best to bring you our finest model figure with our five core values, including:</p>
            </section>
            <section className={style.contentText}>
                <h3 className={style.contentHeader}>1. Authentic Goods</h3>
                <p >Aptech Figure is a one-stop destination for all your model figure needs. We're dedicated to bring you the most authentic figures with high-quality products and the most reliable items.</p>
            </section>
            <section className={style.contentText}>
                <h3 className={style.contentHeader}>2. Rare Collectibles Supply</h3>
                <p >Many character models from anime and manga series like Kimetsu Yaiba, Isekai , Jujutsu no Kaisen, etc., are limited. However, it's our primary goal to give you the best Japanese products. Therefore, we bend over backward to get supplies of rare collectibles and hunt for upcoming items.</p>
            </section>
            <section className={style.contentText}>
                <h3 className={style.contentHeader}>3. Care & Support</h3>
                <p>We always care about your purchasing experience and we will do anything we could to make you feel comfortable and satisfied after buying our products.</p>
                <p>We are glad to discuss and answer any of your inquiries. We guarantee to give you our support in each course of your purchasing adventure.</p>
            </section>
            <section className={style.contentText}>
                <h3 className={style.contentHeader}>4. Safety</h3>
                <p>We will give you our assurance while you are shopping with Aptech Figure. Our site is encoded and conformed to global standards. We will not collect or store your information data.</p>
            </section>
            <section className={style.contentText}>
                <h3 className={style.contentHeader}>5. Fast Delivery</h3>
                <p>In Aptech Figure, you simply select the products that you love and wait for them to show up! We give various delivery methods with reasonable prices.</p>
            </section>
            <img src={GirlAnime} alt="Ảnh Girl" className={style.Picgundame}/>
        </main>
    )
}

export default IntroductionPage;