import styles from './Arrow.module.scss';
import Image from 'next/image'


export default function Arrow() {
    return (
        <>
            <div className={styles.req}>
                <a href="#">
                    <img className={styles.top} src="/top.png" alt="top" />
                </a>
            </div>
        </>
    )
}