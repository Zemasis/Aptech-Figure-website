import style from './ComSortNavBar.module.css'

function SortNavbar (){
    return(
        <>
        <div className={style.FooterNavbar}>
            <div>
                <div className={style.NavBlock}>
                    <h3 className={style.titleNav}>Order</h3>
                    <ul className={style.NavCol}>
                        <li className={style.NavbarDetail}>
                            <input type="checkbox"id="option1" name="option1" className={style.checkboxDetail} />
                            <label for="option1" >Pre Order</label>
                        </li>
                        <li className={style.NavbarDetail}>
                            <input type="checkbox"id="option2" name="option2" className={style.checkboxDetail}/>
                            <label for="option2" >Order</label>
                        </li>    
                    </ul>
                </div>
                <div className={style.NavBlock}>
                    <h3 className={style.titleNav}>ProductType</h3>
                    <ul className={style.NavCol}>
                        <li className={style.NavbarDetail}>
                            <input type="checkbox"id="option3" name="option3" className={style.checkboxDetail}/>
                            <label for="option3" >1/72</label>
                        </li>
                        <li className={style.NavbarDetail}>
                            <input type="checkbox"id="option4" name="option4" className={style.checkboxDetail}/>
                            <label for="option4" >1/36</label>
                        </li>
                        <li className={style.NavbarDetail}>
                            <input type="checkbox"id="option5" name="option5" className={style.checkboxDetail}/>
                            <label for="option5" >Anime</label>
                        </li>
                        <li className={style.NavbarDetail}>
                            <input type="checkbox"id="option6" name="option6" className={style.checkboxDetail}/>
                            <label for="option6" >Gundam</label>
                        </li>
                    </ul>
                </div>

                <div className={style.NavBlock}>
                    <h3 className={style.titleNav}>Brand</h3>
                    <ul className={style.NavCol}>
                        <li className={style.NavbarDetail}>
                            <input type="checkbox"id="option7" name="option7" className={style.checkboxDetail}/>
                            <label for="option7" >KotoBukiya</label>
                        </li>   
                        <li className={style.NavbarDetail}>
                            <input type="checkbox"id="option8" name="option8" className={style.checkboxDetail}/>
                            <label for="option8" >SEGA</label>
                        </li>
                        <li className={style.NavbarDetail}>
                            <input type="checkbox"id="option9" name="option9" className={style.checkboxDetail}/>
                            <label for="option2" >Mihoyo</label>
                        </li>
                        <li className={style.NavbarDetail}>
                            <input type="checkbox"id="option10" name="option10" className={style.checkboxDetail}/>
                            <label for="option2" >GENDA</label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default SortNavbar;