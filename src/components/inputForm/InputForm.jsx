import React, {useState} from 'react'
import s from './inputForm.module.css'

let InputForm = ({getInputFormData}) => {

    const [isFormOpen, setIsFormOpen] = useState(false)
    const [id, setID] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        getInputFormData({id, firstName, lastName, email, phone})
        if (id,firstName,lastName,email,phone === ('')) {
            return alert('Error: Enter the data')
        }
        setIsFormOpen(false)
        setID('')
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
    }


    return (
        <div>
            {!isFormOpen ?
                <div>
                    <button className="btn btn-outline-secondary mt-5 mb-5"
                            type="button"
                            onClick={() => {
                                setIsFormOpen(true)
                            }}>Show add contact form
                    </button>
                </div>

                :

                <form className={s.formBody} onSubmit={submitHandler}>
                    <div className={s.formBodyRows}>
                        <div className="col-md-1 ">
                            <input type="text"
                                   placeholder="ID"
                                   value={id}
                                   onChange={(event) => {
                                       setID(event.target.value)
                                   }}
                            />
                        </div>
                        <div className="col-md-3 pt-2">

                            <input type="text" placeholder="Firstname"
                                   value={firstName}
                                   onChange={(event) => {
                                       setFirstName(event.target.value)
                                   }}
                            />
                        </div>
                        <div className="col-md-3 pt-2">
                            <input type="text"
                                   placeholder="Lastname"
                                   value={lastName}
                                   onChange={(event) => {
                                       setLastName(event.target.value)
                                   }}/>

                        </div>
                    </div>
                    <div>
                        <div className="col-md-3 ">
                            <input type="text" placeholder="Email"
                                   value={email}
                                   onChange={(event) => {
                                       setEmail(event.target.value)
                                   }}

                            />
                        </div>
                        <div className="col-md-3 pt-2">
                            <input type="text" placeholder="Phone"
                                   value={phone}
                                   onChange={(event) => {
                                       setPhone(event.target.value)
                                   }}
                            />
                        </div>
                    </div>
                    <div className={s.buttonAdd}>
                        <button className="btn btn-primary" type="submit">Add contact</button>
                    </div>
                </form>
            }

        </div>

    )
}

export default InputForm;