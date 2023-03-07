import styles from '@/styles/components/Form.module.css';
import { useRouter } from "next/router";

const Form = () => {
    const router = useRouter();

    const handleSubmitForm = (e: any) => {
        e.preventDefault();
        router.push(`./page1`)
    }
    return (
        <form className={styles.formBlock} onSubmit={handleSubmitForm} >
            <div className={styles.form}>
                <h2>Персональные данные</h2>
                <div className={styles.formContetn}>
                    <div>
                        <p>Заполните заявку через Госуслуги: это сэкономит время и повысит шансы на одобрение</p>
                        <button>Заполнить через Госуслуги</button>
                    </div>
                    <div><img src='./gos.svg' alt='gosuslugi' /></div>
                </div>
            </div>


            <div className={styles.inputBox}>
                <span className={styles.inputGroup}>
                    <input className={styles.input} />
                    <span className={styles.inputPlaceholder}>Фамилия</span>
                </span>
                <span className={styles.inputError}>Укажите точно как в паспорте</span>
            </div>
            <div className={styles.inputBox}>
                <span className={styles.inputGroup}>
                    <input className={styles.input} />
                    <span className={styles.inputPlaceholder}>Имя</span>
                </span>
                <span className={styles.span}>Укажите точно как в паспорте</span>
            </div>
            <div className={styles.inputBox}>
                <span className={styles.inputGroup}>
                    <input className={styles.input} />
                    <span className={styles.inputPlaceholder}>Отчество</span>
                </span>
                <span className={styles.span}>Укажите точно как в паспорте. Если отчество отсутствует - поставьте прочерк</span>
            </div>
            <div className={styles.boxAdress}>
                <div className={styles.inputBoxAdress}>
                    <span className={styles.inputGroup}>
                        <input className={styles.input} />
                        <span className={styles.inputPlaceholder}>Мобильный телефон</span>
                    </span>
                    <span className={styles.span}>Мы отправим решение по заявке на указанный номер</span>
                </div>
                <div className={styles.inputBoxAdress}>
                    <span className={styles.inputGroup}>
                        <input className={styles.input} />
                        <span className={styles.inputPlaceholder}>Электронная почта</span>
                    </span>
                    <span className={styles.span}>Мы отправим решение по заявке на указанный адрес</span>
                </div>
            </div>
            <div>
                <div className={styles.treatment}>
                    <label>
                        <input type='checkbox' />
                        <img />
                    </label>
                    <div className={styles.treatmentText}>
                        <span>Я соглашаюсь </span>
                        <a><span>с условиями</span></a>
                        <span> и даю свое</span>
                        <a><span>согласие</span></a>
                        <span> на обработку и использование моих персональных данных, и разрешаю сделать запрос в бюро кредитных историй</span>
                    </div>
                </div>
                <div className={styles.agreement}>
                    <button className={styles.agreementBtn}>Продолжить</button>
                    <div className={styles.agreementText}>
                        Мы гарантируем безопасность и сохранность ваших данных
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form;