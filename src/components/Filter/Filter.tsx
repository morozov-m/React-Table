import { FaFilter } from "react-icons/fa";
import styles from "./Filter.module.css"
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import type { IFilter, ISelectValue, IUser } from "../../types/types";
import FilterField from "./FilterField";
import { getUniqueValues } from "../../utils/utils";

export default function Filter(props: IFilter) {
    const { onclick, isOpen, onclickFilter, filterValue, removeFilter } = props

    const [selectValue, setSelectValue] = useState<ISelectValue>({
        hairColor: [],
        typeColor: [],
        city: [],
        role: [],
        eyeColor: [],
        gender: []
    })

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('filter-open')
        }
        else {
            document.body.classList.remove('filter-open')
        }

        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then((json) => {
                const hairColor = getUniqueValues<IUser>(json.users, user => user.hair.color)
                const typeColor = getUniqueValues<IUser>(json.users, user => user.hair.type)
                const city = getUniqueValues<IUser>(json.users, user => user.address.city)
                const role = getUniqueValues<IUser>(json.users, user => user.role)
                const eyeColor = getUniqueValues<IUser>(json.users, user => user.eyeColor)
                const gender = getUniqueValues<IUser>(json.users, user => user.gender)

                setSelectValue(prev => ({
                    ...prev,
                    hairColor,
                    typeColor,
                    city,
                    role,
                    eyeColor,
                    gender
                }));
            });
    }, [isOpen, filterValue])

    return (
        <div onClick={onclick} className={`${isOpen ? styles.overlay : ''}`}>
            <div onClick={(e) => e.stopPropagation()} className={`${styles.filter} ${isOpen ? styles.filterIsOpen : ''}`}>

                {isOpen ? <IoClose onClick={onclick} className={`${styles.filterIcon} ${styles.filterIconClose}`} /> :
                    <FaFilter onClick={onclick} className={`${styles.filterIcon} ${styles.filterIconOpen} 
                    ${filterValue.value ? styles.filterIconActive : ''}`} />}

                <h3 className={styles.filterTittle}>Фильтровать по:</h3>

                <div className={styles.filterContent}>
                    <FilterField onclick={onclickFilter} filterValue={filterValue} keyUrl='hair.color' id="hairColor" array={selectValue.hairColor} tittle="Цвету волос" />
                    <FilterField onclick={onclickFilter} filterValue={filterValue} keyUrl='hair.type' id="typeColor" array={selectValue.typeColor} tittle="Типу волос" />
                    <FilterField onclick={onclickFilter} filterValue={filterValue} keyUrl='address.city' id="city" array={selectValue.city} tittle="Городу проживания" />
                    <FilterField onclick={onclickFilter} filterValue={filterValue} keyUrl='role' id="role" array={selectValue.role} tittle="Роль" />
                    <FilterField onclick={onclickFilter} filterValue={filterValue} keyUrl='eyeColor' id="eyeColor" array={selectValue.eyeColor} tittle="Цвет глаз" />
                    <FilterField onclick={onclickFilter} filterValue={filterValue} keyUrl='gender' id="gender" array={selectValue.gender} tittle="Пол" />

                    <button className={styles.filterButton} disabled={filterValue.value ? false : true} onClick={removeFilter}>Сбросить фильтр</button>
                </div>
            </div>
        </div>
    )
}