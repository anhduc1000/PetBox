import styles from './Videos.module.css'
import React, { useState, useEffect } from 'react'
import Navbar from "./navbar";

export default function Videos({ data }) {
  const [link, setLink] = useState(null)
  // const [isLoading, setLoading] = useState(false)
  const [index, setIndex] = useState(0);

  useEffect(() => {
    //   setLoading(true)
    //   fetch(`http://localhost:3000/api/wiki`)
    //     .then((res) => res.json())
    //     .then((data) => {
    // setData(data.map(elem => elem.videoSrc))
    setLink(data.map(elem => elem.videoSrc))
    // setLoading(false)
    //     })
  }, [])

  // if (isLoading) return <p>Loading...</p>
  if (!link) return <p>No profile data</p>

  return (
    <>
      <Navbar />
      <div className={`${styles["television"]}`}>
        <div className={`${styles["television__top"]}`}>
          <div className={`${styles["television__antenna"]} ${styles["television__antenna--left"]}`}></div>
          <div className={`${styles["television__antenna"]} ${styles["television__antenna--right"]}`}></div>
          <div className={`${styles["television__antenna__base"]}`}></div>
        </div>
        <div className={`${styles["television__center"]}`}>
          <div className={`${styles["television__screen"]}`}>
            <iframe className={`${styles["iframe"]}`} src={link[index]} frameBorder="0" allowFullScreen muted></iframe>
          </div>
          <div className={`${styles["television__channels-wrapper"]}`}>
            <div className={`${styles["television__button-next"]}`}><a onClick={() => setIndex(prevCount => prevCount + 1)} title="Channel 6">Next</a></div>
            <div className={`${styles["television__button-previous"]}`}><a onClick={() => setIndex(prevCount => prevCount - 1)} title="Channel 6">Previous</a></div>
          </div>
        </div>
        <div className={`${styles["television__base"]}`}>
          <div className={`${styles["television__foot"]} ${styles["television__foot--left"]}`}></div>
          <div className={`${styles["television__foot"]} ${styles["television__foot--right"]}`}></div>
        </div>
      </div>
    </>

  );
}
