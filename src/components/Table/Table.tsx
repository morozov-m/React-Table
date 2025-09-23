import TableRow from "./TableRow";
import type { ITable } from "../../types/types";
import styles from "./Table.module.css"
import TableHead from "./TableHead";
import { useState } from "react";

export default function Table(props: ITable) {
    const { onclick, handleSort, sort, users, isLoading, error } = props

    const [columnWidths, setColumnWidths] = useState({
        lastName: 160, firstName: 140, maidenName: 140,
        age: 95, gender: 100, phone: 150,
        email: 220, country: 140, city: 140
    });

    const handleResize = (field: keyof typeof columnWidths, newWidth: number) => {
        setColumnWidths(prev => ({
            ...prev,
            [field]: newWidth
        }));
    };


    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <TableHead handleResize={handleResize} columnWidths={columnWidths.lastName} text='Фамилия' field='lastName' sort={sort} onclick={() => handleSort('lastName')} hasIcon />
                    <TableHead handleResize={handleResize} columnWidths={columnWidths.firstName} text='Имя' field='firstName' sort={sort} onclick={() => handleSort('firstName')} hasIcon />
                    <TableHead handleResize={handleResize} columnWidths={columnWidths.maidenName} text='Отчество' field='maidenName' sort={sort} onclick={() => handleSort('maidenName')} hasIcon />
                    <TableHead handleResize={handleResize} columnWidths={columnWidths.age} text='Возраст' field='age' sort={sort} onclick={() => handleSort('age')} hasIcon />
                    <TableHead handleResize={handleResize} columnWidths={columnWidths.gender} text='Пол' field='gender' sort={sort} onclick={() => handleSort('gender')} hasIcon />
                    <TableHead handleResize={handleResize} columnWidths={columnWidths.phone} text='Телефон' field='phone' sort={sort} onclick={() => handleSort('phone')} hasIcon />
                    <TableHead handleResize={handleResize} columnWidths={columnWidths.email} field="email" text='Email' />
                    <TableHead handleResize={handleResize} columnWidths={columnWidths.country} field="country" text='Страна' />
                    <TableHead handleResize={handleResize} columnWidths={columnWidths.city} field="city" text='Город' />
                </tr>
            </thead>
            <tbody>
                {isLoading ? (
                    <tr>
                        <td colSpan={9} style={{ textAlign: 'center' }}>Loading users...</td>
                    </tr>
                ) :
                    error ? (
                        <tr>
                            <td colSpan={9} style={{ textAlign: 'center' }}>Error: {error}</td>
                        </tr>
                    ) : users.map(item => <TableRow key={item.id} onclick={() => onclick(item)} user={{ ...item }} />)}
            </tbody>
        </table>
    )
}