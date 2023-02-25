
import styles from '../CSS Modules/StudyMaterial.module.css'
import { Card, Row, Col, Container } from "react-bootstrap";

export default function StudyMaterial() {

  return (
  <div>
    <h2>Coding Courses</h2>
  <div className={styles.cardset} >
    
   <div className={styles.card}>
    
   <iframe  src="https://www.youtube.com/embed/EAR7De6Goz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <div class="card-body">
    <h5 class="card-title">STRIVER C++ BASICS</h5>
    <p class="card-text">Learn basic of C++ </p>
    <a href="https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz" class="btn btn-primary">click for playlist</a>
  </div>
</div>

<div className={styles.card}>
<iframe  src="https://www.youtube.com/embed/WQoB2z67hvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className={styles.card}>
  <iframe src="https://www.youtube.com/embed/pWahNIMRxR0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>;
  </div>
  );
};