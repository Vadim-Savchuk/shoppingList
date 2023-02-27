import ButtonAddTab from '../button-add-tab/ButtonAddTab';
import './Tabs.css'

function Tabs({ tabsList, setActiveModal, setNameTab }) {
    

    const names = tabsList.map(name => {
        return <h4
            className='tab'
            key={name.id}
            onClick={() => setNameTab(name.namaElem)}
        >{name.namaElem}</h4>
    });

    return (
        <div className='groops'>
            {names}

            <ButtonAddTab
                setActiveModal={setActiveModal}
            />
        </div>
    )
}

export default Tabs;