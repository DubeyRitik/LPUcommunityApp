
import styles from '../CSS Modules/StudyMaterial.module.css'


export default function StudyMaterial() {

  return (
  <div>
    <h2>Coding Courses</h2>
  <div className={styles.cardset} >
    
   <div className={styles.card}>
    
   <iframe  src="https://www.youtube.com/embed/EAR7De6Goz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <div class="card-body">
    <h5 class="card-title">STRIVER C++ </h5>
    <p class="card-text">Learn basic of C++ </p>
    <a href="https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz" class="btn btn-primary">Go to playlist</a>
  </div>
</div>

<div className={styles.card}>
<iframe  src="https://www.youtube.com/embed/WQoB2z67hvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <div class="card-body">
    <h5 class="card-title">DSA Course</h5>
    <p class="card-text"> DSA by Love Babbar</p>
    <a href="https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA" class="btn btn-primary">Go to Playlist</a>
  </div>
</div>

<div className={styles.card}>
<iframe src="https://www.youtube.com/embed/rZ41y93P2Qo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <div class="card-body">
    <h5 class="card-title">Java Course</h5>
    <p class="card-text">By Kunal Kushwaha</p>
    <a href="https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ" class="btn btn-primary">Go to Playlist</a>
  </div>
</div>
  </div>;
  </div>
  );
};