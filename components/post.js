import { da } from "date-fns/locale";
import styles from "./layout.module.css";
import NextButton from "./next-button";

export default function Post({ data }) {
  console.log(data);
  let index = "0";
  return (
    <section className={styles["main"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["left-col"]}>
          <div className={styles["post"]}>
            {/* <img
              src={data[index].imageSrc}
              className={styles["post-image"]}
              alt=""
            /> */}

            <video controls>
              <source src="/videos/warm.mp4" type="video/mp4"/>
            </video>
          </div>
        </div>
        <div className={styles["right-col"]}>
          <div className={styles["info"]}>
            <div className={styles["user"]}>
              <div className={styles["profile-pic"]}>
                <img src="images/cat.jpeg" alt="" />
              </div>
              <p className={styles["username"]}>{data[0].user}</p>
            </div>
            <img src="images/cat.jpeg" className={styles["options"]} alt="" />
          </div>
          <div className={styles["post-content"]}>
            <div className={styles["reaction-wrapper"]}>
              <img src="static/like.png" className={styles["icon"]} alt="" />
              <img src="static/comment.png" className={styles["icon"]} alt="" />
              <img src="static/share.png" className={styles["icon"]} alt="" />
              <img
                src="images/cat.jpeg"
                className={styles["save"] + " " + styles["icon"]}
                alt=""
              />
            </div>
            <p className={styles["likes"]}>1,012 likes</p>
            <p className={styles["description"]}>
              <span>{data[0].user}</span> {data[0].description}
            </p>
            <p className={styles["post-time"]}>2 minutes ago</p>
          </div>
          <div className={styles["comment-wrapper"]}>
            <img src="images/cat.jpeg" className={styles["icon"]} alt="" />
            <input
              type="text"
              className={styles["comment-box"]}
              placeholder="Add a comment"
            />
            <button className={styles["comment-btn"]}>post</button>
          </div>
        </div>
      </div>
      <div className={styles["next-button"]}>
        <NextButton />
      </div>
    </section>
  );
}

{
  /* <div className={styles["post"]}>
            <div className={styles["info"]}>
              <div className={styles["user"]}>
                <div className={styles["profile-pic"]}>
                  <img src="images/selfie.jpg" alt="" />
                </div>
                <p className={styles["username"]}>modern_web_channel</p>
              </div>
              <img src="img/option.PNG" className={styles["options"]} alt="" />
            </div>
            <img src="images/selfie.jpg" className={styles["post-image"]} alt="" />
            <div className={styles["post-content"]}>
              <div className={styles["reaction-wrapper"]}>
                <img src="img/like.PNG" className={styles["icon"]} alt="" />
                <img src="img/comment.PNG" className={styles["icon"]} alt="" />
                <img src="img/send.PNG" className={styles["icon"]} alt="" />
                <img
                  src="img/save.PNG"
                  className={styles["save"] + " " + styles["icon"]}
                  alt=""
                />
              </div>
              <p className={styles["likes"]}>1,012 likes</p>
              <p className={styles["description"]}>
                <span>username </span> Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Pariatur tenetur veritatis placeat, molestiae
                impedit aut provident eum quo natus molestias?
              </p>
              <p className={styles["post-time"]}>2 minutes ago</p>
            </div>
            <div className={styles["comment-wrapper"]}>
              <img src="img/smile.PNG" className={styles["icon"]} alt="" />
              <input
                type="text"
                className={styles["comment-box"]}
                placeholder="Add a comment"
              />
              <button className={styles["comment-btn"]}>post</button>
            </div>
          </div> */
}
