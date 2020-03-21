import React, { useState } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');


const ProjectModal = (project) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);


    return (
        <div>
        <button onClick={() => setModalIsOpen(true) }> open modal</button>  
        <Modal id={project.name} className='modal' style={{overlay:{backgroundColor: 'transparent'}}} isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>

        <iframe title = 'dodo' src="https://aramatthew.com/RehabASeal/" height="700" width="1060"></iframe>
        </Modal>
        </div>

    );
}

export default ProjectModal;