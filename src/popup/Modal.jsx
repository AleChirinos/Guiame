import React from 'react'
const Modal=({isvisible, onClose, children})=>{
    if (!isvisible) return null;
    const handleClose=(e)=>{
        if (e.target.id==="wrapper") onClose();
    }
    return(
        <div className='modal'>
            <div className='fixed inset-0 bg-black bg-opacity-25
         backdrop-blur-sm flex justify-center items-center' id="wrapper" onClick={handleClose}>
           <div className='w-[600px] flex flex-col'>
            <button className='text-black text-xl
            place-self-end' onClick={()=>onClose()}>X</button>
            <div className='bg-[#D6F3EC] p-3 rounded-2xl'>{children}</div>
           </div>
        </div>
        </div>
        
    )
}
export default Modal