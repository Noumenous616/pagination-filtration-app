import React from 'react';
import Loader from "../loader/Loader";
import Table from "../Table";
import DetailedItem from "../DetailedItem";
import InputForm from "../inputForm/InputForm";

const TableBody = ({
                       isLoading,
                       detailRow,
                       directionSort,
                       sortData,
                       contactData,
                       rowItem,
                       isRowClicked,
                       onSearchSend,
                       getInputFormData}) => {
    return (
            isLoading? <Loader/> :
                <>
                    <InputForm getInputFormData={getInputFormData}/>
                    <Table detailRow={detailRow}
                           directionSort={directionSort}
                           sortData={sortData}
                           contactData={contactData}
                           onSearchSend={onSearchSend}/>

                    {isRowClicked? <DetailedItem detailRowData={rowItem}/> : null}
                </>
    )
}

export default TableBody;
