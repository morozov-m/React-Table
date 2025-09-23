import { useState } from "react"
import type { ISearch } from "../../types/types"
import styles from "./Search.module.css"

export default function Search({ getSearchValue }: ISearch) {
    const [searchValue, setSearchValue] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        getSearchValue(searchValue)
        setSearchValue('')
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className={styles.search} role="search">
            <button type="submit" className={styles.searchButton}>
                Найти
            </button>
            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Введите ФИО" id="search" className={styles.searchInput} type="text" />
        </form>
    )
}