import styles from "../Styling/product.module.css";
import Navbar from "../Components/nav/nav";
import { Link } from "react-router-dom";
import keyboard from "../Images/keyboard.png";
import mouse from "../Images/mouse.png";
import ban from "../Images/banmotor.jpg";
import jacket from "../Images/jacket.png";
import sepatu from "../Images/sepatu.jpg";
import visor from "../Images/visor.webp";

function Product() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.catContainer}>
          <table className={styles.contentTable}>
            <thead>
              <h4>List Product</h4>
              <tr>
                <th>No</th>
                <th>Photo</th>
                <th>Product Name</th>
                <th>Product Desc</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <Link to={keyboard}>Keyboard.jpg</Link>
                </td>
                <td>Keyboard</td>
                <td>lorem ipsum Keyboard ...</td>
                <td>Rp.700.000</td>
                <td>252</td>
                <td>
                  <button className={styles.edit}>Edit</button>
                  <button className={styles.delete}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <Link to={mouse}>Mouse.jpg</Link>
                </td>
                <td>Mouse</td>
                <td>lorem ipsum Mouse ...</td>
                <td>Rp.900.000</td>
                <td>22</td>
                <td>
                  <button className={styles.edit}>Edit</button>
                  <button className={styles.delete}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <Link to={ban}>Ban.jpg</Link>
                </td>
                <td>Ban motor</td>
                <td>lorem ipsum ban ...</td>
                <td>Rp.200.000</td>
                <td>745</td>
                <td>
                  <button className={styles.edit}>Edit</button>
                  <button className={styles.delete}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <Link to={jacket}>Jacket.jpg</Link>
                </td>
                <td>Jacket motor</td>
                <td>lorem ipsum jacket ...</td>
                <td>Rp.535.000</td>
                <td>144</td>
                <td>
                  <button className={styles.edit}>Edit</button>
                  <button className={styles.delete}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <Link to={sepatu}>Sepatu.jpg</Link>
                </td>
                <td>Sepatu</td>
                <td>lorem ipsum Sepatu ...</td>
                <td>Rp1.500.000</td>
                <td>54</td>
                <td>
                  <button className={styles.edit}>Edit</button>
                  <button className={styles.delete}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  <Link to={visor}>Visor.jpg</Link>
                </td>
                <td>Visor</td>
                <td>lorem ipsum Visor ...</td>
                <td>Rp.264.000</td>
                <td>284</td>
                <td>
                  <button className={styles.edit}>Edit</button>
                  <button className={styles.delete}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Product;
