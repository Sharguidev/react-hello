import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {

	const [color, setColor] = useState("");

	const [luces, setLuces] = useState([{nombre: 'rojo', valor: 'red'}, {nombre: 'amarillo', valor: 'yellow'}, {nombre: 'verde', valor: 'green'}]);
	
 	return (
		<div className="container mt-5">
			<div className="container mt-5 bg-black" style={{width:200, borderRadius: '10%'}}>
				<div className="d-inline-block d-flex flex-column align-items-center">
					
					{
						luces.map(faro=><button className={"d-inline-block  rounded-circle m-3 " + (color == faro.valor ? faro.nombre : '')} style={{height:80, width:80, backgroundColor:faro.valor}} onClick={()=>{setColor(faro.valor)}}/>)
					
					/* <button className={"d-inline-block bg-warning rounded-circle m-3 " + (color == 'yellow' ? 'amarillo' : '')} style={{height:80, width:80}} onClick={()=>{
						setColor("yellow")
					}}/>
					<button className={"d-inline-block bg-success rounded-circle m-3 "+ (color =='green' ? 'verde': '')} style={{height:80, width:80}} onClick={()=>{
						setColor("green")
					}}/> */}
				</div>
			</div>
			<button className="btn btn-success" onClick={()=>{

				if(luces.length<=3){
					setLuces([...luces, {nombre: 'morado', valor: 'purple'}])
				}
			}}>Agregar</button>

			<button className="btn btn-primary" onClick={()=>{
				
			}

			}>
				Alternar luces
			</button>
		</div>
	);
};

export default Home;
