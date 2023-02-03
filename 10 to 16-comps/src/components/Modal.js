import ReactDOM from 'react-dom'; 
import { useEffect } from 'react';

function Modal({ onClose, children, actionBar }) {

  // to prevent scrolling when modal appears and vice versa
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    }

  },[]);

/* we need to make the modal out of DOM to avoid any parent has position relative
that maybe make modal size not equal fullscreen*/
  return ReactDOM.createPortal(
<div>
  <div className="fixed inset-0 bg-gray-300 opacity-80" onClick={onClose}></div>
  <div className="fixed inset-40 p-10 bg-white ">

    <div className='h-full flex flex-col justify-between'>
    {children}
    
    <div className='flex justify-end'>{actionBar}</div>
    </div>

  </div>
</div>,document.querySelector('.modal-container')
  );
}

export default Modal;