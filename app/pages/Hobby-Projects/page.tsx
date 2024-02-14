import Link from 'next/link';
import React from 'react';
import styles from "./styles/page.module.css";
import Settings from "../../components/settings/settings"

export default function Page() {
  return (
    <main>
      <div className={styles.settings}><Settings/></div>
      <div className={styles.backButton}>
        <Link className={styles.backButton} href="/">
          <div className={styles.backArrow}>
          <span><div className={styles.backArrow}>&lt;</div></span>
          </div>
        </Link>
      </div>
      <div className={styles.title}>
        <h1 className={styles.mainTitle}>Hobby Projects</h1>
        <div>
          <h1 className={styles.music}>Music</h1>
          <p className={styles.musicSubtext}>Music has always been a big part of my life, from being a member of the school band to performing with a chamber ensemble group, and to arranging and composing pieces. It's something that has become an essential part of me.</p>
        </div>
        
        <div>
        <h2 className={styles.projLink}>Sheet Music</h2>
        <p className={styles.projText}>These are some arrangements I made of songs I liked in high school to gain a better understanding of how music is written and works. You can listen to them on Musescore.</p>
        <div className={styles.pdf}>
          <iframe src="https://drive.google.com/file/d/1giSplN0qk6hIXWgs7Ko7nNWbwRsKBKDh/preview" width="420" height="500" allow="autoplay"></iframe>
          <iframe src="https://drive.google.com/file/d/1eiKmMs6nFXgGLW19w0vjJMv4vssDkNWs/preview" width="420" height="500" allow="autoplay"></iframe>
        </div>
        <p className={styles.ghubText}>Musescore:{" "}
          <Link className={styles.ghub} href="https://musescore.com/user/31952355" target="_blank" rel="noopener noreferrer">
          https://musescore.com/user/31952355
          </Link>
        </p>
        </div>
        <div>
        <h2 className={styles.projLink}>Electronic Compositions</h2>
        <p className={styles.projText}>Here are a few projects of me figuring out how electronic composition works and how to use FL Studio.</p>
        <p className={styles.projText}>-------[Return]--------------[Absense]---------------[Cut]-------</p>
        <div className={styles.songs}>
        <iframe className={styles.songs} src="https://drive.google.com/file/d/10Uh9OkBTE4xvArhpdp3FbxecaT_pfBig/preview" width="64" height="64" allow="autoplay"></iframe>
        <iframe className={styles.songs} src="https://drive.google.com/file/d/15NPBj_4fa6odwIqPd7iHiJlNhhI3cBBg/preview" width="64" height="64" allow="autoplay"></iframe>
        <iframe className={styles.songs} src="https://drive.google.com/file/d/1ID8F2l48sW5xD2XyrmN4VZ-HOhsQjcDa/preview" width="64" height="64" allow="autoplay"></iframe>
        </div>
        <p className={styles.projText}>[Return]: This one definitely took me the longest as it's the most complex piece I've made. It's also the one from which I learned the most. I dived deeper into chord progressions, orchestration, and mixing, though I have to say I'm still quite an amateur, haha.</p>
        <p className={styles.projText}>[Absense]: I made this piece to try to make something slower and more calm, messing around with cool chords I normally wouldn't use. It's sort of like a melancholic menu theme.</p>
        <p className={styles.projText}>[Cut]: This piece is almost entirely created using a "release-cut" piano (it's what gives it that glitchy cutoff). I really liked how it sounded, so I made a quick little piece chopping lots of notes together.</p>
        </div>
        <div>
        <h2 className={styles.projLink}>Extras</h2>
        <p className={styles.projText}>Here's a video of a perfomance I participated in at the Western Internation Band Clinic (WIBC) in Seattle! (I'm the Bari sax player on the very right)</p>
        <p className={styles.ghubText}>Youtube:{" "}
          <Link className={styles.ghub} href="https://youtu.be/qJL3ZRxNpnE?t=450" target="_blank" rel="noopener noreferrer">
            https://youtu.be/qJL3ZRxNpnE?t=450
          </Link>
        </p>
        <p className={styles.projText}>I'm currently a part of the Univeristy Saxophone Ensemble here at UT, so here's us playing Jupiter - Holst! (This time I'm on the very left)</p>
        <p className={styles.ghubText}>Drive:{" "}
          <Link className={styles.ghub} href="https://drive.google.com/file/d/1Lsxy2UBw7-k_vzwtfRezsLpMWbwdEYAQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          https://drive.google.com/file/d/1Lsxy2UBw7-k_vzwtfRezsLpMWbwdEYAQ/view?usp=sharing
          </Link>
        </p>
        </div>
      </div>
    </main>
  )
}