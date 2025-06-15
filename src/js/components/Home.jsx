import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import '../../styles/index.css'

//create your first component
const Home = () => {
	
	const [redlight, setRedLight] = useState("btn bg-danger rounded-circle mt-3");
	const [orangelight, setOrangeLight] = useState("btn bg-warning rounded-circle mt-2");
	const [greenlight, setGreenLight] = useState("btn bg-success rounded-circle mt-2");

	function turnOnRedLight(){
		setRedLight("btn bg-danger rounded-circle mt-3 light")
		setOrangeLight("btn bg-warning rounded-circle mt-2")
		setGreenLight("btn bg-success rounded-circle mt-2")
		console.log(redlight);
		
	}

	function turnOnOrangeLight(){
		setRedLight("btn bg-danger rounded-circle mt-3")
		setOrangeLight("btn bg-warning rounded-circle mt-2 light")
		setGreenLight("btn bg-success rounded-circle mt-2")
	}

	function turnOnGreenLight(){
		setRedLight("btn bg-danger rounded-circle mt-3")
		setOrangeLight("btn bg-warning rounded-circle mt-2")
		setGreenLight("btn bg-success rounded-circle mt-2 light")
	}

	return (
		<div className="text-center">
			<div className="justify-content-center" style={{ width: "200px" }}>
				<div className="d-flex justify-content-center">
					<div className="bg-dark mx-4" style={{ width: "20px", height: "50px" }} >	</div>


				</div>
				<div className="d-flex justify-content-center">

					<div className="bg-dark rounded" style={{ width: "100px", height: "300px"}}>
						<button className={redlight} style={{width:"85px", height: "85px"}} onClick={turnOnRedLight}></button>
						<button className={orangelight} style={{width:"85px", height: "85px"}} onClick={turnOnOrangeLight}></button>
						<button className={greenlight} style={{width:"85px", height: "85px"}} onClick={turnOnGreenLight}></button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;