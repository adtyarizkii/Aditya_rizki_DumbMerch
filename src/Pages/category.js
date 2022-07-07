import styles from "../Styling/category.module.css";
import Navbar from "../Components/nav/nav";

function Category() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.catContainer}>
          <table className={styles.contentTable}>
            <thead>
              <tr>
                <th>No</th>
                <th>Category Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mouse</td>
                <td>
                  <button className={styles.edit}>Edit</button>
                  <button className={styles.delete}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Keyboard</td>
                <td>
                  <button className={styles.edit}>Edit</button>
                  <button className={styles.delete}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Bag</td>
                <td>
                  <button className={styles.edit}>Edit</button>
                  <button className={styles.delete}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Stationary</td>
                <td>
                  <button className={styles.edit}>Edit</button>
                  <button className={styles.delete}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Doll</td>
                <td>
                  <button className={styles.edit}>Edit</button>
                  <button className={styles.delete}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Pillow</td>
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

export default Category;
