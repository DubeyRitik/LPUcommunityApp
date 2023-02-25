import styles from "../CSS Modules/Mess.module.css";

export default function Mess() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>North Mess</h1>
        <ul className={styles.list}>
          <li>Aaloo GObhi</li>
          <li>Rice</li>
          <li>Roti</li>
          <li>Raita</li>
          <li>Salad</li>
          <li>Sweet</li>
          <li>Arahar daal</li>
        </ul>
      </div>

      <div>
        <h1 className={styles.heading}>South Mess</h1>
        <ul className={styles.list}>
          <li>Rasam</li>
          <li>Rice</li>
          <li>Roti</li>
          <li>Raita</li>
          <li>Salad</li>
          <li>Sweet</li>
          <li>Mushroom</li>
          <li>Sambhar</li>
        </ul>
      </div>

      <div>
        <h1 className={styles.heading}>Punjabi Mess</h1>
        <ul className={styles.list}>
          <li>Soyabean Sabzi</li>
          <li>Rice</li>
          <li>Roti</li>
          <li>Raita</li>
          <li>Salad</li>
          <li>Sweet</li>
          <li>Snacks</li>
        </ul>
      </div>
    </div>
  );
}
