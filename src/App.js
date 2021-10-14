import React, { useEffect, useState} from 'react'
import useServerData from "./components/hooks/useServerData";
import Switcher from "./components/Switcher/Switcher";
import TableBody from "./components/TableBody/TableBody";
import Paginator from "./components/paginator/Paginator";
import Title from "./components/Switcher/Title";


function App() {
    const [isButtonClick, setIsButtonClick] = useState(false)
    const [directionSort, setDirectionSort] = useState(true)
    const [rowItem, setRowItem] = useState('')
    const [url, setUrl] = useState('')
    const [isRowClicked, setIsRowClicked] = useState(false)
    const [{contactData, isLoading, setContactData, isLoaded}] = useServerData({url, isButtonClick})
    const limitCountPage = 50
    const [totalCountRow, setTotalCountRow] = useState(0)
    const [totalCountPage, setTotalCountPage] = useState(0)
    const [currentPageNumber, setCurrentPageNumber] = useState(1)
    const [buttonPrevDisabled, setButtonPrevDisabled] = useState('page-item')
    const [buttonNextDisabled, setButtonNextDisabled] = useState('page-item')
    const [currentPageActive, setCurrentPageActive] = useState('page-item')
    const [searchText, setSearchText] = useState('')
    const [newRow, setNewRow] = useState({})

    const buttonHandler = (url) => {
        setUrl(url)
        setIsButtonClick(true)
    }
    const onSearchSend = (text) => {
        setSearchText(text)
        console.log(text)
    }
    const getFilterData = () => {
        if (!searchText) {
            return contactData
        }
        return contactData.filter(el => {
                return (el['firstName'].toLowerCase().includes(searchText.toLowerCase())
                    || el['lastName'].toLowerCase().includes(searchText.toLowerCase())
                    || el['email'].toLowerCase().includes(searchText.toLowerCase()))

            }
        )
    }
    const filterData = getFilterData();

    const lastBlockRow = currentPageNumber * limitCountPage
    const firstBlockRow = lastBlockRow - limitCountPage
    const currentBlockRows = filterData.slice(firstBlockRow, lastBlockRow)
    console.log('Уточненный блок строк',currentBlockRows)

    const currentPage = (pg) => {
        setCurrentPageNumber(pg)
        setButtonPrevDisabled('')
        setButtonNextDisabled('')
        setCurrentPageActive('active')

    }

    useEffect(() => {
        if (!isLoaded) {
            return
        }
        setTotalCountRow(filterData.length)
        console.log('засетанное количество строк',setTotalCountRow(filterData.length))
        const getTotalCountPage = Math.ceil(totalCountRow / limitCountPage);
        setTotalCountPage(getTotalCountPage)

    }, [isLoaded, setTotalCountRow, filterData.length, totalCountRow])



    let Pages = []
    for (let i = 1; i < totalCountPage; i++) {
        Pages.push(i)
    }


    const sortData = (field) => {
        const copyData = contactData.concat();
        let sortData;
        if (directionSort) {
            sortData = copyData.sort(
                (a, b) => {
                    return a[field] > b[field] ? 1 : -1
                })
        } else {
            sortData = copyData.reverse()
        }
        setContactData(sortData)
        setDirectionSort(!directionSort)
    }
    const detailRow = (row) => {
        setRowItem(row)
        setIsRowClicked(true)
    }
    const onNextClick = () => {
        if (currentPageNumber > totalCountPage - 1) {
            setButtonNextDisabled('disabled')
            return
        }
        setCurrentPageNumber(currentPageNumber + 1)
    }
    const onPrevClick = () => {
        if (currentPageNumber < 2) {
            setButtonPrevDisabled('disabled')
            return
        }
        setCurrentPageNumber(currentPageNumber - 1)

    }
    const getInputFormData = ({id, firstName, lastName, email, phone}) => {
        setNewRow({id, firstName, lastName, email, phone})

    }
    currentBlockRows.unshift(newRow)



    return (
        <div className="container">

            {!isButtonClick?
                <>
                    <Title/>
                    <Switcher buttonHandler={buttonHandler}/>
                </>

                :
                    <TableBody isLoading={isLoading}
                               detailRow={detailRow}
                               directionSort={directionSort}
                               sortData={sortData}
                               contactData={currentBlockRows}
                               rowItem={rowItem}
                               isRowClicked={isRowClicked}
                               onSearchSend={onSearchSend}
                               getInputFormData={getInputFormData}/>}


            {isLoaded && (totalCountRow > limitCountPage) &&
            <Paginator Pages={Pages}
                       currentPage={currentPage}
                       onNextClick={onNextClick}
                       onPrevClick={onPrevClick}
                       buttonPrevDisabled={buttonPrevDisabled}
                       buttonNextDisabled={buttonNextDisabled}
                       currentPageActive={currentPageActive}
                       currentPageNumber={currentPageNumber}/>}


        </div>
    );
}

export default App;
