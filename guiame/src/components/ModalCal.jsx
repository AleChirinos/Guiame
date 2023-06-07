import React from 'react'
const Modal=({isvisible, onClose, children})=>{
    if (!isvisible) return null;
    const handleClose=(e)=>{
        if (e.target.id==="wrapper") onClose();
    }
    return(
        <div className=''>
            <div className='fixed inset-0 bg-black bg-opacity-25
         backdrop-blur-sm flex justify-center items-center' id="wrapper" onClick={handleClose}>
           <div className='w-[600px] flex flex-col'>
            <button className='text-white text-xl text-bold place-self-end' onClick={()=>{onClose()}}>Salir</button>
            <div className='bg-[#D6F3EC] p-3 rounded-2xl'>{children}</div>
           </div>
        </div>
        </div>
        
    )
}
export default Modal