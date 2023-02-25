import styles from '../CSS Modules/StudyMaterial.module.css'
import image from '../Images/club.png'
import image1 from '../Images/club2.png'
import image3 from '../Images/club3.png'
export default function Clubs() {
  return <div>

<div>
    <h2>Join Your Clubs</h2>
  <div className={styles.cardset} >
    
   <div  className={styles.card}>
   <img  className={styles.imageq} src={image} alt="" />
  <div class="card-body">
    <h5 class="card-title">Coding India</h5>

    <a href="https://ourcodingclub.github.io/" class="btn btn-primary">Click to Join</a>

  </div>
</div>

<div className={styles.card}>
<img  className={styles.imageq} src={image1} alt="" />
  <div class="card-body">
    <h5 class="card-title">Code Club</h5>
   
    <a href="https://codeclubworld.org/" class="btn btn-primary">Click to Join</a>
  </div>
</div>

<div className={styles.card}>
<img className={styles.imageq} src={image3} alt="" />
  <div class="card-body">
    <h5 class="card-title">Meet Up</h5>
    
    <a href="https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ" class="btn btn-primary">Click to Join</a>
  </div>
</div>
  </div>;
  </div>
  </div>;
}