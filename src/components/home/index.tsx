import Image from "next/image";
import { TiTick } from "react-icons/ti";

import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={`${styles.hero} flex items-center justify-around`}>
      <div className={styles.heroLeft}>
        <h1 className={`${styles.title} text-black font-bold`}>Cloud Hosting</h1>
        <p className={styles.desc}>
          The best web hosting solution for your online success
        </p>
        <div className={styles.services}>
          <div className={styles.serviceItem}>
            <TiTick /> Easy to Use Control Panel
          </div>
          <div className={styles.serviceItem}>
            <TiTick /> Secure Hosting
          </div>
          <div className={styles.serviceItem}>
            <TiTick /> Website Maintenance
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/images/cloud-hosting.png"
          alt="cloud image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
