import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={`${styles.container} bg-primary shadowed`}>
      <h2>Contact Us</h2>
      <hr />
      <div className={styles.content}>
        <div className={styles.left}>
          <p>
            If you have any issues with the site or for any other reason need to
            contact us. Feel free to do so on one of the platforms named here!
          </p>
        </div>
        <div className={styles.right}>
          <div>
            <p>
              Email: <span>info@rlitems.com</span>
            </p>
          </div>
          <div>
            <p>
              Phone: <span>+4672 21 21 21</span>
            </p>
          </div>
          <div>
            <p>
              Adress: <span>123 Bullshit street</span>
            </p>
          </div>
          <div>
            <p>
              Discord: <span>RLitems#4679</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
