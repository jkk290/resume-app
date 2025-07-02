import { useState } from 'react';

function EducationInfoForm({ educationInfo, setEducationInfo, onChange }) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitted(true);
    }

    function clearState() {
        setEducationInfo({schoolName: '', studyTitle: '', studyDate: ''});
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
                    <h1>{educationInfo.schoolName}</h1>
                    <p>{educationInfo.studyTitle}</p>
                    <p>{educationInfo.studyDate}</p>
                </>
            )
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    School Name
                    <input 
                    type='text'
                    name='schoolName'
                    value={educationInfo.schoolName}
                    onChange={onChange}
                    disabled={isSubmitted === true ? true : false}  
                    />
                </label>
                <br />
                <label>
                    Title of study
                    <input
                    type='text'
                    name='studyTitle'
                    value={educationInfo.studyTitle}
                    onChange={onChange}
                    disabled={isSubmitted}  
                    />
                </label>
                <br />
                <label>
                    Date of study
                    <input
                    type='date'
                    name='studyDate'
                    value={educationInfo.studyDate}
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

export default EducationInfoForm;