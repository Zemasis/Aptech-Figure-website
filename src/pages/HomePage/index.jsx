//Import Library
import { Button } from 'react-bootstrap';
// Import picture from src
import PicSaint from '../../assets/images/saintseiya.png';
import PicShore from '../../assets/images/ShorekeeperFigure.jpg';
import KotoPic from '../../assets/images/KotoBukiya.PNG';
import MiniBanner from '../../assets/images/Bannershop.PNG';
import LOLpic from '../../assets/images/LOLvi.PNG';
import PicGundam from '../../assets/images/Bannergundam.jpg';
import PicShenheBanner from '../../assets/images/Shenhe.jpg';
import PicPokemonBanner from '../../assets/images/pkmnpet.png';
//import css
import style from './HomePage.module.css';

// Import Component
import ShowColum from '../../componet/ComInterView/ComInterView';


function HomePage (){
    return(
        <main>
            <img src={PicSaint} alt="Banner" className={style.BannerPic}/>
            <section className={style.NewProductInfo}>
                <div className={style.NewProPicShow} >
                    <h5 className={style.NewProTitle}>New Product</h5>
                    <img src={PicShore} alt='New Product'className={style.NewProPic}/>
                </div>

                <div className={style.NewProDetail} >
                    <h3 className={style.DetailTile}>The Shorekeeper Figure</h3>
                    <p className={style.oldPrice}>2.000.000 VND</p>
                    <p className={style.NewPrice}>4.000.000 VND</p>
                    <select name="Type Product" className={style.SelectType}>
                        <option value="Type Product" className={style.hid}>Type Product</option>
                        <option value="Figure">Figure</option>
                        <option value="Comic">Comic</option>
                    </select>

                    <div className={style.btnNew}>
                        <select name="Quantity" className={style.SelectNumber}>
                            <option value="Type Product" className={style.hid}>Quantity</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <button className={style.PreOrderBtn}>Pre Order</button>
                    </div>
                    <p className={style.CountSale}> Time expire: 5 days 04: 23 : 04</p>

                </div>
            </section>

            <section>
                <h3 className={style.topicTitil}>New Arrivals</h3>
                <img src={KotoPic} alt="Ảnh Koto" className={style.BannerPic}/>
                <ShowColum start={0} end={4}/>
                <Button className={style.viewmoreBtn}>View More</Button>
            </section>

            <section >
                <h3 className={style.topicTitil}>New Realease Figure</h3>
                    <div className={style.categoryBanner}>
                        <div className={style.colPic2}>
                            <img src={MiniBanner} alt="Ảnh Banner" className={style.MiniBanner2}/>
                            <img src={LOLpic} alt="Ảnh LOL figure" className={style.MiniBanner2}/>
                        </div>
                        <div className={style.colPic3}>
                            <img src={PicGundam} alt="Ảnh Gundam banner" className={style.MiniBanner3}/>
                            <img src={PicShenheBanner} alt="Ảnh Shenhe banner" className={style.MiniBanner3}/>
                            <img src={PicPokemonBanner} alt="Ảnh Pokemon banner" className={style.MiniBanner3}/>
                        </div>
                    </div>
            </section>

        </main>
    )
}

export default HomePage;