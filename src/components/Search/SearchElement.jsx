import React, {useState} from 'react'


let SearchElement = ({onSearchSend}) => {

    const [searchValue, setSearchValue] = useState('')
    return (

        <div className="input-group mb-3 mt-3">
            <input
                type="text"
                className="form-control"
                placeholder="Enter data for filtration "
                aria-describedby="basic-addon2"
                value={searchValue}
            onChange={(event) => {setSearchValue(event.target.value)}}/>

                <div className="input-group-append">
                    <button className="btn btn-outline-secondary"
                            type="button"
                            onClick={()=> {onSearchSend(searchValue)}}

                    >Search</button>
                </div>
        </div>

    )
}

export default SearchElement;
