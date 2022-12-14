import styles from './ViewDraw.module.css';
import { Data } from '../../../Data';

function ViewDraw() {

  // implements search functionality for the draw
  // const search = (e) => {
  //   const searchValue = e.target.value;
  //   const filteredDraw = Data.filter((draw) => {
  //     return draw.name.toLowerCase().includes(searchValue.toLowerCase());
  //   })
  //   console.log(filteredDraw);
  // }


  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.header}>
        <tr className={styles.thead}>
          <th className={styles.title}>Name</th>
          <th className={styles.title}>Description</th>
          <th className={styles.title}>Amount</th>
          <th className={styles.title}>Category</th>
          <th className={styles.title}>Type</th>
          <th className={styles.title}>Date</th>
        </tr>
        </thead>
        <tbody className={styles.body}>
          {Data.map((item) => (
            <tr className={styles.tr} key={item.id}>
              <td className={styles.td}>{item.name}</td>
              <td className={styles.td}>{item.description}</td>
              <td className={styles.td}>{item.amount}</td>
              <td className={styles.td}>{item.category}</td>
              <td className={styles.td}>{item.type}</td>
              <td className={styles.td}>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewDraw;