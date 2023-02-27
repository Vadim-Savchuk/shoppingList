import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'

import Form from './components/form/Form';
import Tabs from './components/tabs/Tabs';
import AddTabForm from './components/add-tab/AddTabForm';
import ListGoods  from './components/list-goods/ListGoods';

import './App.css';

function App() {
    // Список товарів
    const [goods, setGoods] = useState([])

    // Список Табів
    const [tabs, setTabs] = useState([{ id: 'hero1', namaElem: 'Загальний' }])

    // Таб який зараз відкритий
    const [nameTab, setNameTab] = useState('Загальний')

    // Відкрити модалку щоб додати новий таб
    const [activeModal, setActiveModal] = useState(false)

    // Загальна сума
    const [sum, setSum] = useState(0);

    // Додає новий таб (Можливо має бути в компоненті з формою)
    function onSubmitModa(event, name, setValue) {
        event.preventDefault();

        console.log(name);

        if (name.length !== 0) {
            const newElem = {
                id: nanoid(8),
                namaElem: name,
            }

            const copy = Object.assign([], tabs);
                  copy.push(newElem)

            setTabs(copy)
            setActiveModal(false)
            setNameTab(name)
            setValue('')
        }
    }

    // Додає новий товар (Можливо має бути в компоненті з товарами)
    function addGoods(event, name, prace, setValuName, setValuePrace) {
        event.preventDefault();

        if (name.length !== 0) {
            const newGood = {
                id: nanoid(8),
                nameGoode: name,
                priceGoode: prace ? prace : 0,
                type: nameTab
            }

            const copy = Object.assign([], goods);
            copy.push(newGood)

            setGoods(copy)
            setValuName('')
            setValuePrace('')
        }
    }

    // Показує загальну суму
    function allSum(type) {
        let result = goods.filter(elem => {
            if (elem.type === type) {
                return elem
            }

            return null
        });

        let s = 0

        for (let num of result) {
            s += Number(num.priceGoode)
        }

        setSum(s)
    }
    useEffect(() => {
        allSum(nameTab)
    });


    return (
        <div className='container'>

            <div className='title-offer'>
                <h1 className='title'>Список покупок</h1>
            </div>

            <Form
                addGoods={addGoods}
            />

            <Tabs
                tabsList={tabs}
                setNameTab={setNameTab}
                setActiveModal={setActiveModal}
            />

            <AddTabForm
                active={activeModal}
                setActive={setActiveModal}
                submitModal={onSubmitModa}
            />

            <div className='info-tab'>
                <h2 className='list-name'>{nameTab}</h2>
                <h2 className='all-price'>Загальна сума {sum} грн</h2>
            </div>

            <ListGoods
                goods={goods}
                nameTab={nameTab}
                setGoods={setGoods}
            />

        </div>
    )
}

export default App;
