import { CartWidget } from "../CartWidget"
import { Link } from 'react-router-dom'

// Navbar 

const Navbar = () => {

    return (<header>

        <CartWidget/>

        <h1>CoderHouse</h1>

        <nav>
            <Link to="/" className="navbar"> Home </Link>
            <Link to="/itemcounter" className="navbar" >Shop</Link>
            <Link to="/category/T-Shirt" className="navbar">T-Shirt</Link>
            


            <div className="button">
                <input type="submit" id="button-background-color" value="Background-Color" />
            </div>

            <div className="button">
                <input type="submit" id="button-usuario" value="Usuario" />
            </div>


            <div class="search">
                <form method="get" action="#">
                    <label for="clothes" id="clothes-option">Option Clothes: </label>
                    <select name="clothes">
                        <option>T-Shirt Woman</option>
                        <option>Jeans</option>
                        <option>T-Shirt Man</option>
                        <option>Fit</option>
                        <option>Dress Shoes Woman</option>
                        <option>Dress Shoes Man</option>
                        <option>Shoes Woman</option>
                        <option>Shoes Man</option>
                        <option>Socks Woman</option>
                        <option>Socks Man</option>
                        <option>Jeans Man</option>
                        <option>Joggins Man</option>
                        <option>Dress Red</option>
                        <option>Dress Green</option>
                        <option>Dress Blue</option>
                    </select>
                </form>
            </div>

            <br />
        </nav>

    </header>

    )
}

export default Navbar

// ===================================================================================

