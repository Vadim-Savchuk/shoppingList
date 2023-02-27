import { useState } from 'react';
import ButtonForm from '../button-form/ButtonForm';
import './AddTabForm.css'

function AddTab({ active, setActive, submitModal }) {
    const [modalValue, setModalValue] = useState('');

    return (
        <div className={active ? 'box active' : 'box'}>
            <div className="modal">
                
                <h2 className='mini-title'>Додати нову колекцію</h2>

                <div 
                    className='close-modal'
                    onClick={() => setActive(false)}
                >X</div>

                <form
                    className='add-tab-modal'
                    onSubmit={event => submitModal(event, modalValue, setModalValue)}
                >
                    <input
                        type='text'
                        value={modalValue}
                        placeholder='Фрукти'
                        className='add-tab-modal-name'
                        onChange={event => setModalValue(event.target.value)}
                    />

                    <ButtonForm />
                </form>

            </div>
        </div>
    )
}

export default AddTab;