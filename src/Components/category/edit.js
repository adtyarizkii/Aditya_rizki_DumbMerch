import styles from "../../Styling/category.module.css";
import Navbar from "../nav/nav";

function editCategory() {
  return (
    <div className={styles.editContainer}>
      <Navbar />
      <div className={styles.editCatContainer}>
        <h1>Edit category</h1>
        <input type="text" placeholder="Category name..." />
        <button>Save</button>
      </div>
    </div>
  );
}

export default editCategory;
