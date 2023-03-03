import styles from '@/styles/components/ProgressBar.module.css';


const ProgressBar = () => {
    return (
        <div className={styles.progress}>
            <p>Шаг 1 из 5: Заявка заполнена на 0%</p>
            <div>
                <div className={styles.indicator}>
                    <div></div>
                    <div className={styles.indicatorStep}></div>
                </div>
                <p className={styles.progressStatus}></p>
            </div>
        </div>
    )
}

export default ProgressBar;