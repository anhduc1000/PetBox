import styles from "./layout.module.css";

export default function LoginForm() {
  return (
    <div id={styles["login-wrapper"]}>
      <div className={styles["login-main-content"]}>
        <div className={styles["login-header"]}>
        </div>
        <div className={styles["login-l-part"]}>
          <input type="text" placeholder="Username" className={styles["login-input-1"]} />
          <div className={styles["login-overlap-text"]}>
            <input
              type="password"
              placeholder="Password"
              className={styles["login-input-2"]}
            />
            <a href="#">Forgot?</a>
          </div>
          <input type="button" value="Log in" className={styles["login-btn"]} />
        </div>
      </div>
      <div className={styles["login-sub-content"]}>
        <div className={styles["login-s-part"]}>
          Don't have an account?<a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
}
