import { FaArrowLeftLong } from "react-icons/fa6";
import styles from "./SearchInfo.module.css"
import type { ISearchInfo } from "../../types/types";

export default function SearchInfo(props: ISearchInfo) {
    const { users, removeSearch, search, totalUsers } = props

    return (
        <div className={styles.searchInfo}>
            <button onClick={removeSearch} className={styles.searchInfoButton}>
                <FaArrowLeftLong />
            </button>
            <p className={styles.searchInfoText}><b>По запросу:</b> "{search}" {users.length === 0 ? "ничего не найдено" : <><b>найдено результатов:</b> {totalUsers}</>} </p>
        </div>
    )
}