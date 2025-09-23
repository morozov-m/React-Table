import { IoClose } from "react-icons/io5";
import type { IModal } from "../../types/types";
import styles from "./Modal.module.css"
import { useEffect } from "react";

export default function Modal(props: IModal) {
    const { onclick, user } = props

    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    return (
        <div className={styles.overlay} onClick={onclick}>
            <div className={styles.modal}
                onClick={(e) => e.stopPropagation()} role="dialog"
                aria-modal="true"
                aria-labelledby={`${user.firstName} ${user.lastName} ${user.maidenName}`}>
                <IoClose className={styles.modalClose} onClick={onclick} />
                <h2 className={styles.modalTittle}>{user.firstName} {user.lastName} {user.maidenName}</h2>
                <div className={`${styles.modalSection} ${styles.modalSectionInfo}`}>
                    <img src={user.image} className={styles.modalImg} />
                    <div>
                        <h3 className={styles.tittleInfo}>Основная информация</h3>
                        <p><b>Пол:</b> {user.gender}</p>
                        <p><b>Возраст:</b> {user.age}</p>
                        <p><b>Email:</b> {user.email}</p>
                        <p><b>Телефон:</b> {user.phone}</p>
                        <p><b>Ник:</b> {user.username}</p>
                        <p><b>Пароль:</b> {user.password}</p>
                        <p><b>Дата рождения:</b> {user.birthDate}</p>
                        <p><b>Группа крови:</b> {user.bloodGroup}</p>
                        <p><b>Рост:</b> {user.height} см</p>
                        <p><b>Вес:</b> {user.weight} кг</p>
                        <p><b>Цвет глаз:</b> {user.eyeColor}</p>
                        <p><b>Цвет волос:</b> {user.hair.color}</p>
                        <p><b>Тип волос:</b> {user.hair.type}</p>
                        <p><b>IP:</b> {user.ip}</p>
                        <p><b>Адрес:</b> {user.address.address}, {user.address.city}, {user.address.state} ({user.address.stateCode}), {user.address.country}, {user.address.postalCode}</p>
                        <p><b>Координаты:</b> {user.address.coordinates.lat}, {user.address.coordinates.lng}</p>
                        <p><b>MAC-адрес:</b> {user.macAddress}</p>
                        <p><b>Университет:</b> {user.university}</p>
                    </div>
                </div>
                <div className={styles.modalSection}>
                    <h3 className={styles.tittleInfo}>Банк</h3>
                    <p><b>Номер карты:</b> {user.bank.cardNumber}</p>
                    <p><b>Срок действия:</b> {user.bank.cardExpire}</p>
                    <p><b>Тип карты:</b> {user.bank.cardType}</p>
                    <p><b>Валюта:</b> {user.bank.currency}</p>
                    <p><b>IBAN:</b> {user.bank.iban}</p>
                </div>
                <div className={styles.modalSection}>
                    <h3 className={styles.tittleInfo}>Компания</h3>
                    <p><b>Название:</b> {user.company.name}</p>
                    <p><b>Отдел:</b> {user.company.department}</p>
                    <p><b>Должность:</b> {user.company.title}</p>
                    <p><b>Адрес:</b> {user.company.address.address}, {user.company.address.city}, {user.company.address.state}, {user.company.address.country}</p>
                </div>
                <div className={styles.modalSection}>
                    <h3 className={styles.tittleInfo}>Прочее</h3>
                    <p><b>EIN:</b> {user.ein}</p>
                    <p><b>SSN:</b> {user.ssn}</p>
                    <p><b>User Agent:</b> {user.userAgent}</p>
                </div>
                <div className={styles.modalSection}>
                    <h3 className={styles.tittleInfo}>Криптовалюта</h3>
                    <p><b>Монета:</b> {user.crypto.coin}</p>
                    <p><b>Кошелек:</b> {user.crypto.wallet}</p>
                    <p><b>Сеть:</b> {user.crypto.network}</p>
                    <p><b>Роль:</b> {user.role}</p>
                </div>
            </div>
        </div>

    )
}