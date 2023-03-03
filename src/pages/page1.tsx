import styles from '@/styles/Page1.module.css'
import ProgressBar from '../components/ProgressBar';
import Form from '../components/Form';


const page1 = () => {
    return (
        <section>
            <div className={styles.container}>
                <h1>Заявка на кредитную карту</h1>
                <h3>Кредитная карта с целым годом без %</h3>
                <ProgressBar />
                <Form />
            </div>
        </section>
    )
}

export default page1;