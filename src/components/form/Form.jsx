import { useState } from 'react'
import ButtonForm from '../button-form/ButtonForm';
import './Form.css'

function Form({addGoods}) {
    
    let [name, setName]   = useState('');
    let [prace, setPrace] = useState('');

    return (
        <form 
            className='add-item'
            onSubmit={(event) => addGoods(event, name, prace, setName, setPrace)}
        >

            <input
                type='text'
                value={name}
                placeholder='Диван'
                className='add-item-name'
                onChange={event => setName(event.target.value)}
            />

            <input
                type='number'
                value={prace}
                placeholder='Ціна'
                className='add-item-prace'
                onChange={event => setPrace(event.target.value)}
            />

            <ButtonForm />
        </form>
    )
}

export default Form