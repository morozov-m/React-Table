import { useRef } from "react";
import type { ITableHead } from "../../types/types";
import styles from "./Table.module.css"
import { RiSortAsc } from "react-icons/ri";

export default function TableHead(props: ITableHead) {
    const startX = useRef(0);
    const startWidth = useRef(0);

    const onMouseDown = (e: React.MouseEvent) => {
        startX.current = e.clientX;
        startWidth.current = props.columnWidths;

        const onMouseMove = (e: MouseEvent) => {
            const delta = e.clientX - startX.current;
            const newWidth = Math.max(50, startWidth.current + delta);
            props.handleResize(props.field!, newWidth);
        };

        const onMouseUp = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    };

    return (
        <th style={{ width: props.columnWidths }}>{props.text}
            {props.hasIcon && <RiSortAsc className={`${styles.sortIcon} ${props.sort?.sortBy === props.field ?
                props.sort?.order === 'asc' ? styles.sortIconAsc : props.sort?.order === 'desc' ?
                    styles.sortIconDesc : '' : ''}`} onClick={props.onclick} />}
            <div className={styles.resizer} onMouseDown={onMouseDown} />
        </th>
    )
} 