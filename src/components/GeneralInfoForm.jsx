import { useState } from 'react';

function GeneralInfoForm({ generalInfo, onChange, setGeneralInfo }) {
    const [isSubmitted, setIsSubmitted] = useState(false);    

    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitted(true);
    }

    function clearState() {
        setGeneralInfo({firstName: '', lastName: '', email: '', phoneNum: ''});
        setIsSubmitted(false);
    }

    function handleEdit() {
        setIsSubmitted(false);
    }

    function EditButton() {
        if (isSubmitted) {
            return (
                <button onClick={handleEdit} type='button'>Edit</button>
            )
        }
    }

    function ShowInfo() {
        if (isSubmitted) {
            return (
                <>
                    <h1>{generalInfo.firstName + ' ' + generalInfo.lastName}</h1>
                    <p>{generalInfo.email}</p>
                    <p>{generalInfo.phoneNum}</p>
                </>
            )
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name
                    <input 
                    type='text'
                    name='firstName'
                    value={generalInfo.firstName}
                    onChange={onChange}
                    disabled={isSubmitted}  
                    />
                </label>
                <br />
                <label>
                    Last Name
                    <input
                    type='text'
                    name='lastName'
                    value={generalInfo.lastName}
                    onChange={onChange}
                    disabled={isSubmitted}  
                    />
                </label>
                <br />
                <label>
                    Email
                    <input
                    type='email'
                    name='email'
                    value={generalInfo.email}
                    onChange={onChange}
                    disabled={isSubmitted}  
                    />
                </label>
                <br />
                <label>
                    Phone Number
                    <input
                    type='tel'
                    name='phoneNum'
                    value={generalInfo.phoneNum}
                    onChange={onChange}
                    disabled={isSubmitted}  
                    />
                </label>
                <br />
                <input type="submit" />
                <button onClick={clearState} type='reset'>Clear</button>
                <EditButton />
            </form>
            <ShowInfo />
        </>
    )

}

export default GeneralInfoForm;