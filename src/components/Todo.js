import Modal from './Modal'
import Backdrop from './Backdrop'
import { useState } from 'react'
function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function deleteHandler() {
        setModalIsOpen(true);
    }
    function cancel() {
        setModalIsOpen(false);
    }
    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal onClick={cancel} />}
            {modalIsOpen && <Backdrop onClick={cancel} />}
        </div>

    )

}

export default Todo;