function ButtonAddTab({ setActiveModal }) {

    return (
        <h4
            className='tab add-tab'
            onClick={() => setActiveModal(true)}
        >+</h4>
    )
}

export default ButtonAddTab