import styles from '@/styles/components/Form.module.css';
import { useRouter } from "next/router";
import React, { useEffect } from 'react';

const Form = () => {
    const router = useRouter();
    const [name, setName] = React.useState('');
    const [surName, setSurName] = React.useState('');
    const [middleName, setMiddleName] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleSubmitForm = (e: any) => {
        e.preventDefault();
        router.push(`./page1`)
    }

    const handleChengeSurName = (e: any) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        // setErrors();
    }

    useEffect(() => {
        console.log(errors)
    }, [errors])

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

            {/* First page form */}
            <div className={styles.inputBox}>
                <span className={styles.inputGroup}>
                    <input
                        onChange={handleChengeSurName}
                        name="surName"
                        className={styles.input}
                        placeholder=' '
                        required
                    />
                    <span className={styles.inputPlaceholder}>Фамилия</span>
                </span>
                {
                    errors.surName ?
                        <span className={styles.inputError}>{errors.surName && 'Поле обязательное для заполнения'}</span>
                        :
                        <span className={styles.inputDescription}>Укажите точно как в паспорте</span>
                }
            </div>

            <div className={styles.inputBox}>
                <span className={styles.inputGroup}>
                    <input
                        onChange={handleChengeSurName}
                        className={styles.input}
                        placeholder=' '
                        name='name'
                        required
                    />
                    <span className={styles.inputPlaceholder}>Имя</span>
                </span>
                {
                    errors.name ?
                        <span className={styles.inputError}>{errors.name && 'Поле обязательное для заполнения'}</span>
                        :
                        <span className={styles.inputDescription}>Укажите точно как в паспорте</span>
                }
            </div>

            <div className={styles.inputBox}>
                <span className={styles.inputGroup}>
                    <input
                        onChange={handleChengeSurName}
                        className={styles.input}
                        placeholder=' '
                        name='middleName'
                        required
                    />
                    <span className={styles.inputPlaceholder}>Отчество</span>
                </span>
                {
                    errors.middleName ?
                        <span className={styles.inputError}>{errors.middleName && 'Поле обязательное для заполнения'}</span>
                        :
                        <span className={styles.inputDescription}>Укажите точно как в паспорте. Если отчество отсутствует - поставьте прочерк</span>
                }
            </div>

            <div className={styles.boxAdress}>
                <div className={styles.inputBoxAdress}>
                    <span className={styles.inputGroup}>
                        <input
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            onChange={handleChengeSurName}
                            className={styles.input}
                            placeholder=' '
                            name='phoneNumber'
                            required
                        />
                        <span className={styles.inputPlaceholder}>Мобильный телефон</span>
                    </span>
                    {
                        errors.phoneNumber ?
                            <span className={styles.inputError}>{errors.phoneNumber && 'Мы отправим решение по заявке на указанный телефон'}</span>
                            :
                            <span className={styles.inputDescription}>Мы отправим решение по заявке на указанный номер</span>
                    }
                </div>

                <div className={styles.inputBoxAdress}>
                    <span className={styles.inputGroup}>
                        <input
                            onChange={handleChengeSurName}
                            className={styles.input}
                            placeholder=' '
                            name='email'
                            required
                        />
                        <span className={styles.inputPlaceholder}>Электронная почта</span>
                    </span>
                    {
                        errors.email ?
                            <span className={styles.inputError}>{errors.email && 'Мы отправим решение по заявке на указанный адрес'}</span>
                            :
                            <span className={styles.inputDescription}>Мы отправим решение по заявке на указанный адрес</span>
                    }
                </div>
            </div>

            {/* Second page form */}
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