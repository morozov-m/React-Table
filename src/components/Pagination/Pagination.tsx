import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6"
import styles from "./Pagination.module.css"
import type { IPagination } from "../../types/types"

export default function Pagination(props: IPagination) {
    const { plusPage, minusPage, page, maxPage } = props

    return (
        <div className={styles.pagination}>
            <button disabled={page >= 2 ? false : true} onClick={minusPage} className={`${styles.buttonPagination}`}><FaArrowLeftLong /></button>
            <p className={styles.textPagination}>Страница {page} из {maxPage === 0 ? '1' : maxPage}</p>
            <button disabled={page > maxPage - 1 ? true : false} onClick={plusPage} className={`${styles.buttonPagination}`}><FaArrowRightLong /></button>
        </div>
    )
}