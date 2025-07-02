import { useState } from 'react';

function ProfessionalInfoForm() {
    const [professionalInfo, setProfessionalInfo] = useState({companyName: '', positionTitle: '', mainResponsibilities: '', employedDateStart: '', employedDateEnd: ''});
    const [isSubmitted, setIsSubmitted] = useState(false);

    function onChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setProfessionalInfo({...professionalInfo, [name]:value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitted(true);
    }

    function clearState() {
        setProfessionalInfo({companyName: '', positionTitle: '', mainResponsibilities: '', employedDateStart: '', employedDateEnd: ''});
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
                    <h1>{professionalInfo.companyName}</h1>
                    <p>{professionalInfo.positionTitle}</p>
                    <p>{professionalInfo.mainResponsibilities}</p>
                    <p>{professionalInfo.employedDateStart + ' - ' + professionalInfo.employedDateEnd}</p>
                </>
            )
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Company Name
                    <input 
                    type='text'
                    name='companyName'
                    value={professionalInfo.companyName}
                    onChange={onChange}
                    disabled={isSubmitted === true ? true : false}  
                    />
                </label>
                <br />
                <label>
                    Title of position
                    <input
                    type='text'
                    name='positionTitle'
                    value={professionalInfo.positionTitle}
                    onChange={onChange}
                    disabled={isSubmitted}  
                    />
                </label>
                <br />
                <label>
                    Main responsibilities
                    <textarea
                    type='text'
                    name='mainResponsibilities'
                    value={professionalInfo.mainResponsibilities}
                    onChange={onChange}
                    disabled={isSubmitted}  
                    />
                </label>
                <br />
                <label>
                    Date employed start
                    <input
                    type='date'
                    name='employedDateStart'
                    value={professionalInfo.employedDateStart}
                    onChange={onChange}
                    disabled={isSubmitted}  
                    />
                </label>
                <label>
                    Date employed end
                    <input
                    type='date'
                    name='employedDateEnd'
                    value={professionalInfo.employedDateEnd}
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

export default ProfessionalInfoForm;