import React, {useState} from 'react'
import ArrowDown from "./ArrowsSvg/ArrowDown";
import ArrowUp from "./ArrowsSvg/ArrowUp";
import SearchElement from "./Search/SearchElement";



let Table = ({contactData, sortData, directionSort, detailRow,onSearchSend }) => {
    const Arrows = () => {
        return directionSort? <ArrowUp /> : <ArrowDown/>
    }
    const [fieldData, setFieldData] = useState('');
    let fieldSortData = (field) => {
        sortData(field)
        setFieldData(field)
    }

    return (


        <div>
            <SearchElement onSearchSend={onSearchSend}/>
            <table className="table">
                <thead>
                <tr>
                    <th onClick={() => {fieldSortData('id')}} scope="col">
                        ID {fieldData === 'id' ? <Arrows /> : null}
                    </th>
                    <th onClick={() => {fieldSortData('firstName')}} scope="col">
                        FirstName {fieldData === 'firstName' ? <Arrows /> : null}
                    </th>
                    <th onClick={() => {fieldSortData('lastName')}} scope="col">
                        LastName {fieldData === 'lastName' ? <Arrows /> : null}
                    </th>
                    <th onClick={() => {fieldSortData('email')}} scope="col">
                        Email {fieldData === 'email' ? <Arrows /> : null}
                    </th>
                    <th onClick={() => {fieldSortData('phone')}} scope="col">
                        Phone {fieldData === 'phone' ? <Arrows /> : null}
                    </th>
                </tr>
                </thead>
                <tbody>
                {contactData.map(
                    item => (
                        <tr key={item.id + item.email} onClick={() => {detailRow(item)}}>
                            <th scope="row">{item.id}</th>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    )
                )}

                </tbody>
            </table>
        </div>


    )
}

export default Table;