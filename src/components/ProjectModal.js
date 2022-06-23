import React, { useState } from 'react';
import Modal from 'react-modal';
import IframeResizer from 'iframe-resizer-react'
Modal.setAppElement('#root');




const ProjectModal = (project) => {

    function resizeIFrameToFitContent( iFrame ) {

      iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
      iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
  }

  window.addEventListener('DOMContentLoaded', function(e) {

      var iFrame = document.getElementById( 'iFrame1' );
      resizeIFrameToFitContent( iFrame );

      // or, to resize all iframes:
      var iframes = document.querySelectorAll("iframe");
      for( var i = 0; i < iframes.length; i++) {
          resizeIFrameToFitContent( iframes[i] );
      }
  } );
      
    //const url = project.githubUrl;
    console.log(project.name);
    const [modalIsOpen, setModalIsOpen] = useState(false);


    return (
        <div>
        <button onClick={() => setModalIsOpen(true) }> play</button>  
        <Modal  
        id={project.name} 
        className='modal' 
        style={{overlay:{backgroundColor: 'transparent'}}} 
        isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}
        // eslint-disable-next-line react/jsx-no-duplicate-props

        
        >

            {/* <iframe title = 'dodo' src={project.githubUrl} /> */}
            {/* {console.log(project.githubUrl)} */}
            {/* <iframe title = 'dodo' src='https://aramatthew.com/RehabASeal/'  id="iFrame1"/> */}
     
            <IframeResizer
              log
              src="https://aramatthew.com/RehabASeal/"
              style={{ width: '1px', minWidth: '100%'}}
            />

          
        </Modal>
        </div>

    );
}

export default ProjectModal;