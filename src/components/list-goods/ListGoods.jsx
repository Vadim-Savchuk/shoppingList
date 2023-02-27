import Goods from '../elem/Goods'
import './ListGoods.css'

function ListGoods({ setGoods, nameTab, goods }) {

    // Видаляє товар
    function delateGoods(id) {

        let result = goods.filter((elem) => {
            return elem.id !== id
        });

        setGoods(result)
    }

    const result = goods.map(elem => {
        if (elem.type === nameTab) {
            return <Goods
                id={elem.id}
                key={elem.id}
                name={elem.nameGoode}
                prace={elem.priceGoode}
                delateGoods={delateGoods}
            />
        }

        return null
    });
    
    let yes = goods.some(function (elem) {
        return elem.type === nameTab;
    });
    
    return (
        <ul className='shop-list'>
            {yes ? result : <li className='list-null'>Тут покищо пусто</li>}
        </ul>
    )
}

export default ListGoods