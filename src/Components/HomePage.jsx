import Carousels from "./Carousels";
import styles from '../CSS Modules/HomePage.module.css'

export default function HomePage() {
  return <div>
    <Carousels/>
    <div className={styles.main}>
    <div className={styles.card}>
<iframe  src="https://www.youtube.com/embed/DVBPPrZBqXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<div class="card-body">
  
  {/* <a href="https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ" class="btn btn-primary">Go to Playlist</a> */}
</div>
</div>

<div className={styles.card}>
<iframe  src="https://www.youtube.com/embed/WQoB2z67hvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<div class="card-body">
  
  {/* <a href="https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ" class="btn btn-primary">Go to Playlist</a> */}
</div>
</div>

<div className={styles.card}>
<iframe  src="https://www.youtube.com/embed/F18Rxw6ftcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<div class="card-body">
 
  {/* <a href="https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ" class="btn btn-primary">Go to Playlist</a> */}
</div>
</div>
</div>
   
  </div>;
}
