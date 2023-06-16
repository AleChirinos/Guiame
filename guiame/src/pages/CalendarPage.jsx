import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months, dias} from "../util/calendar";
import { NavBar } from "../components/NavBar";
import icon from "../assets/user.png"
import cn from "../util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Outlet, Link, useLocation } from "react-router-dom";
import Modal from "../components/ModalCal"
import './CalendarPage.css'

const CalendarPage = () => {
    const psicologos=["Romero Alarcón","Alejandro Pereira","Eleonora Benetti","Gabriela Guzman"];
    const days = ["D", "L", "M", "M", "J", "V", "S"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
    const [showModal,setShowModal]=useState(false);
	const [selectDate, setSelectDate] = useState(currentDate);
    const [time, setTime] = useState("");
    const [psicologo, setPsicologo] = useState("");
	const [hasPsicologo,setHasPsicologo]=useState(false);
	const { pathname } = useLocation();

	const handleClosing = (state) =>
	{
		if (state){
			setHasPsicologo(true);
		}
		setShowModal(false);
	}

	const handleSubmit = (event) => {
		console.log('handleSubmit ran');
		event.preventDefault();
		setHasPsicologo(true);
		setShowModal(false);
	}
	
    return(
		<>
            <NavBar></NavBar>
            <div className="flex flex-row flex-1 h-screen ">
                <div className=" w-1/4 bg-[#02102b] h-full ">
                    <img src={icon} className="w-1/4 ml-32 my-5 justify-center" alt="Icono sideBar"></img>
                    <Link className={`${pathname === '/profile' ? 'font-bold' : ''} border-t border-blue-400 block text-center my-2 py-1 text-white `} to={`/profile`}>
                        Perfil
                    </Link>
                    <Link className={`${pathname === '/test' ? 'font-bold' : ''} border-t border-blue-400 block text-center my-2 py-1 text-white`} to={`/test`}>
                        Pruebas de Aptitud
                    </Link>
                    <Link className={`${pathname === '/results' ? 'font-bold' : ''} border-t border-b border-blue-400 block text-center my-2 py-1 text-white`} to={`/results`}>
                        Resultados
                    </Link>
                    <Link className={`${pathname === '/calendar' ? 'font-bold' : ''}border-t border-b border-blue-400 block text-center my-2 py-1 text-white`} to={`/calendar`}>
                        Calendario
                    </Link>
                </div>
                <div className="flex flex-row w-full bg-[#F0FFFB] !place-content-center">
					<main>

						<div className="flex sm:divide-x bg-[#c7daeb] p-10 justify-center sm:w-full h-screen !sm:place-content-center !items-center sm:flex-row flex-col rounded-3xl">
							
							<div className="w-180 h-auto p-10 bg-slate-200">
								<div className="flex justify-between items-center p-5 bg-slate-400">
									<h1 className="select-none font-semibold">
										{months[today.month()]}, {today.year()}
									</h1>
									<div className="flex gap-10 items-center ">
										<GrFormPrevious
										className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
											onClick={() => {
											setToday(today.month(today.month() - 1));
										}}
										/>
										<h1 className=" cursor-pointer hover:scale-105 transition-all"
											onClick={() => {setToday(currentDate); setSelectDate(currentDate); console.log(hasPsicologo)}}>
										Hoy</h1>
										<GrFormNext
										className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
											onClick={() => {
											setToday(today.month(today.month() + 1));
										}}
										/>
									</div>
								</div>
								<div className="grid grid-flow-col auto-cols-[minmax(0,_1fr)] !pb-0">
									{days.map((day, index) => {
										return (
											<h1
												key={index}
												className=""
											>
												{day}
											</h1>
										);
									})}
								</div>
								<div className="grid !grid-cols-7">
									{generateDate(today.month(), today.year()).map(
										({ date, currentMonth, today }, index) => {
											return (
									<div
										key={index}
										className="p-2 text-center h-10 w-16 place-content-center text-xs border-t-2 border-t-indigo-500">
										<h1
											className={cn(
												currentMonth ? "" : "text-gray-400",
												today
													? "bg-red-600 text-white"
													: "",
												selectDate
													.toDate()
													.toDateString() ===
													date.toDate().toDateString()
													? "bg-black text-white "
													: "",
												"h-10 w-10 rounded-full place-content-center align-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
											)}
											onClick={() => {
												setSelectDate(date);
											}}
										>
											{date.date()}
										</h1>
									</div>
								);
							}
						)}
					</div>
				</div>
				<div className="w-96 h-1/2 sm:px-5 sm:py-5 bg-slate-100 align-top">
					<h1 className=" font-semibold">
						Citas del psicólogo para el {dias[selectDate.day()]} {selectDate.date()} de {months[selectDate.month()]} del {today.year()}
					</h1>
					{hasPsicologo && selectDate.isSame(today) ? ( 
						<div className="bg-[#cfeef0] p-2 rounded-lg">
							<p className="text-[#161f53] text-lg font-semibold">Tienes una cita con:</p>
							<p className="text-gray-400">{psicologo}</p>
							<p className="text-[#5a5c69]">a las {time}</p>
						</div>
						
					) : ( 
						<div>
							<p className="text-gray-400 text-lg">Sin citas</p>
							<button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-3xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" 
							onClick={() => setShowModal(true)}>Reservar cita</button>
						</div>
					)}
					
					
				</div>
			</div>
			
			<Modal isvisible={showModal} onClose={()=>{handleClosing(false)}}> 
			<div class="px-6 py-6 lg:px-8 bg-[#BDE7F9]">
				<div class="flex justify-center items-center">
					<h3 className="mb-4 text-2xl font-bold font-sans text-[#293A4E]">Selecciona una hora y psicólogo</h3>
				</div>
					<form class="space-y-3" >
						<div>
							<label for="date" class="block mb-1 text-xl font-bold text-[#293A4E]">Fecha:</label>
							<input type="text" name="date" id="date" class="bg-[#E1FFFA] border border-[#82CEEE] text-gray-900 text-md rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
							required disabled defaultValue={cn(selectDate.date(), "de", months[selectDate.month()],"del", selectDate.year())}/>
						</div>
						<div>
							<label for="hour" class="block mb-1 text-xl font-bold text-[#293A4E]">Hora:</label>
							<input type="time" name="hour" id="hour" placeholder="Selecciona una hora" class="bg-[#E1FFFA] border border-[#82CEEE] text-gray-900 text-md rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
							required onChange={(e) => setTime(e.target.value)} value={time} />
						</div> 
						<div>
							<label for="psicologo" class="block mb-1 text-xl font-bold text-[#293A4E]">Psicólogo:</label>
							<select name="psicologo" id="psicologo" placeholder="Selecciona un psicologo" class="bg-[#E1FFFA] border border-[#82CEEE] text-gray-900 text-md rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
							required onChange={(e) => setPsicologo(e.target.value)} value={psicologo}>
							{psicologos.map((psicolog)=>(<option value={psicolog}>{psicolog}</option>))}
							</select>
						</div> 
						<div>
							<label for="asunto" class="block mb-1 text-xl font-bold text-[#293A4E]">Asunto (opcional):</label>
							<textarea placeholder="Escribe lo que vas a conversar con el psicólogo" name="asunto" id="asunto" class="bg-[#E1FFFA] border border-[#82CEEE] text-gray-900 text-md rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-none" rows="4" />
						</div>
						<button type="click" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => handleSubmit(e)}>Reservar cita</button>
					</form>
				</div>
			</Modal>
			</main>
                    

                </div>

            </div>
        </>

        
        
    )
}

export default CalendarPage;