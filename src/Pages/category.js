import styles from "../Styling/category.module.css";
import Navbar from "../Components/nav/nav";
import Modal from "../Components/category/modal";
import Edit from "../Components/category/edit";
import { useState } from "react";

function Category() {
  let [modal, setModal] = useState(false);
  let [edit, setEdit] = useState(false);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.catContainer}>
          <table className={styles.contentTable}>
            <thead>
              <h2>List Category</h2>
              <tr>
                <th>No</th>
                <th>Category Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Helm</td>
                <td>
                  <button
                    className={styles.edit}
                    onClick={() => {
                      setEdit(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.delete}
                    onClick={() => {
                      setModal(true);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Intercom</td>
                <td>
                  <button className={styles.edit}>Edit</button>
                  <button className={styles.delete}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Ban</td>
                <td>
                  <button className={styles.edit}>Edit</button>
                  <button className={styles.delete}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Jacket</td>
                <td>
                  <button className={styles.edit}>Edit</button>
                  <button className={styles.delete}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Sepatu</td>
                <td>
                  <button className={styles.edit}>Edit</button>
                  <button className={styles.delete}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Visor</td>
                <td>
                  <button className={styles.edit}>Edit</button>
                  <button className={styles.delete}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {edit && <Edit />}
      {modal && <Modal closeModal={setModal} />}
    </div>
  );
}

export default Category;
