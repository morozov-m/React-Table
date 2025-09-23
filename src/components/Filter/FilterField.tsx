import type { IFilterField } from "../../types/types";
import styles from "./Filter.module.css"

export default function FilterField(props: IFilterField) {
    const { array, tittle, id, onclick, filterValue, keyUrl } = props
    return (
        <div className={styles.filterfield}>
            <label htmlFor={id}>{tittle}</label>
            <select id={id} onChange={(e) => onclick(e.target.value, id, keyUrl)} value={
                filterValue.id === id ? filterValue.value : ''
            }>
                <option value=''>--Выберите значение--</option>
                {array.length !== 0 ? array.map(item => <option value={item} key={item}>{item}</option>) : ''}
            </select>
        </div>
    )
}