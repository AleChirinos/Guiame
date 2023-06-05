import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months, dias, minutes, hours } from "../util/calendar";
import cn from "../util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import '../assets/Calendar.css';
import { set } from "date-fns";
import Modal from "../popup/Modal"


const CalendarioPage = () => {
    const psicologos=["Romero","Alejandro","Eleonora","Gabriela"];
    
    const days = ["D", "L", "M", "M", "J", "V", "S"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
    const [showModal,setShowModal]=useState(false);
	const [selectDate, setSelectDate] = useState(currentDate);
    const [time, setTime] = useState("");
    const [psicologo, setPsicologo] = useState("");



    return(
        <main>
            <div className="flex gap-10 sm:divide-x bg-[#c7ddf0] justify-center sm:w-1/2 mx-auto  h-screen items-center sm:flex-row flex-col">
			<div className="w-96 h-96 ">
				<div className="flex justify-between items-center">
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
						<h1
							className=" cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(currentDate);
							}}
						>
							Today
						</h1>
						<GrFormNext
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
						/>
					</div>
				</div>
				<div className="grid grid-cols-7 ">
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
							>
								{day}
							</h1>
						);
					})}
				</div>

				<div className=" grid grid-cols-7 ">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (
								<div
									key={index}
									className="p-2 text-center h-17 grid place-content-center text-sm border-t-2 border-t-indigo-500"
								>
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
												? "bg-black text-white"
												: "",
											"h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
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
			<div className="h-96 w-96 sm:px-5">
				<h1 className=" font-semibold">
					Citas del psicólogo para el {dias[selectDate.day()]} {selectDate.date()} de {months[selectDate.month()]} del {today.year()}
				</h1>
				<p className="text-gray-400">Sin citas</p>
                <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" 
                onClick={() => setShowModal(true)}>Reservar cita</button>
			</div>
		</div>
        
        <Modal isvisible={showModal} onClose={()=>setShowModal(false)}> 
        <div class="px-6 py-6 lg:px-8 bg-[#BDE7F9]">
            <div class="flex justify-center items-center">
                <h3 className="mb-4 text-2xl font-bold font-sans text-[#293A4E]">Selecciona una hora y psicólogo</h3>
            </div>
                <form class="space-y-3" action="#">
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
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reservar cita</button>
                </form>
            </div>
        </Modal>
        </main>
        
    )
}

export default CalendarioPage;