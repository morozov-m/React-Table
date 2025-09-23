import type { ITableRow } from "../../types/types";

export default function TableRow({ onclick, user }: ITableRow) {
    const { firstName, lastName, maidenName, age, gender, phone, email, address } = user;


    return (
        <tr onClick={onclick}>
            <td>{lastName}</td>
            <td>{firstName}</td>
            <td>{maidenName}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{address.country}</td>
            <td>{address.city}</td>
        </tr>
    )
}