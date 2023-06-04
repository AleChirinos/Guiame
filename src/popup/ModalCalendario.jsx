import cn from "../util/cn";

export default function Modal({open, onClose, children}){
    return(
        <div onClick={onClose} 
        className={cn('fixed inset-0 flex justify-center items-center transition-colors', open ? "visible bg-black/20 backdrop-blur-sm" : "invisible")}>
            {}
            <div onClick={(e)=>e.stopPropagation()}
            className={cn("bg-[#D6F3EC] rounded-xl shadow p-6 transition-all", open ? "scale-100 opacity-100" : "scale-125 opacity-0")}></div>
            <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">
                Holas
            </button>
            {children}
        </div>
    )
}