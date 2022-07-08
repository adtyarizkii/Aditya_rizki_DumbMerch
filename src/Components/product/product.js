import styles from "../../Styling/product.module.css";
import Navbar from "../nav/nav";

function editProduct() {
  return (
    <div className={styles.editContainer}>
      <Navbar />
      <div className={styles.editCatContainer}>
        <h2>Edit Product</h2>
        <div className={styles.upCon}>
          <label htmlFor="upImge">
            <p>Upload Image</p>
            <input type="file" id="upImge" hidden />
          </label>
          <p>Mouse.jpg</p>
        </div>
        <input type="text" placeholder="Product name..." />
        <textarea name="" id="" cols="30" rows="10" placeholder="Product Description..."></textarea>
        <input type="number" placeholder="Product price..." />
        <input type="number" placeholder="Product quantity..." />
        <button>Save</button>
      </div>
    </div>
  );
}

export default editProduct;
