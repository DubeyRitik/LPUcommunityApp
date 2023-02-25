import styles from '../CSS Modules/StudyMaterial.module.css'
import image from '../Images/leet.png'
import image1 from '../Images/chef.png'
import image3 from '../Images/code.png'
export default function Competitions() {
  return <div>
    <div>
    <h2>Coding Competitions</h2>
  <div className={styles.cardset} >
    
   <div  className={styles.card}>
   <img  className={styles.imageq} src={image} alt="" />
  <div class="card-body">
    <h5 class="card-title">Leetcode</h5>

    <a href="https://leetcode.com/" class="btn btn-primary">Click to Join</a>

  </div>
</div>

<div className={styles.card}>
<img  className={styles.imageq} src={image1} alt="" />
  <div class="card-body">
    <h5 class="card-title">CodeChef</h5>
   
    <a href="https://codechef.com" class="btn btn-primary">Click to Join</a>
  </div>
</div>

<div className={styles.card}>
<img className={styles.imageq} src={image3} alt="" />
  <div class="card-body">
    <h5 class="card-title">Codeforces</h5>
    
    <a href="https://codeforces.com" class="btn btn-primary">Click to Join</a>
  </div>
</div>
  </div>;
  </div>
  </div>;
}