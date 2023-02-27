import './Goods.css'

function Goods({ id, name, prace, delateGoods }) {

    return (
        <li className='list-item'>
            <span className='name'>{name}</span>
            <span className='price'>{prace} грн</span>
            <span
                className='close'
                onClick={() => delateGoods(id)}
            >X</span>
        </li>
    )
}

export default Goods