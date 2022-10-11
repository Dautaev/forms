import React, { useState } from 'react';

function Form() {
    const [value, setValue] = useState('')
    const [send, setSend] = useState(false)
    const [error, setError] = useState(false)

    const handleSetValue = (e) => {
        setValue(e.target.value)
        setSend(false)
        setError(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setValue('')
        setSend(true)
    }

    const handleBlur = () => {
        if (!value) {
            setError(true)
            setSend(false)
        }
    }
    return (
        <>
        <form className='form' onSubmit={handleSubmit}>
            <input  type='text' value={value} onChange={handleSetValue} onBlur={handleBlur} />
            <button disabled={!value} type='submit'>Добавить</button>
        </form>
            {send && <div className='message'>Сообщение отправлено!</div>}
            {error && <div className='error'>Поле ввода не должно быть пустым</div>}
         </>
    );
}

export default Form;







// const [value, setValue] = useState('')
//     const [send, setSend] = useState(false)
//     const [error, setError] = useState(false)

//     const handleSetValue = (e) => {
//         setValue(e.target.value)
//         setSend(false)
//         setError(false)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setValue('')
//         setSend(true)
//     }

//     const handleBlur = () => {
//         if (!value) {
//             setError(true)
//             setSend(false)
//         }
//     }
//     return (
//         <>
//         <form className='form' onSubmit={handleSubmit}>
//             <input  type='text' value={value} onChange={handleSetValue} onBlur={handleBlur} />
//             <button disabled={!value} type='submit'>Добавить</button>
//         </form>
//             {send && <div className='message'>Сообщение отправлено!</div>}
//             {error && <div className='error'>Поле ввода не должно быть пустым</div>}
//          </>
//     );