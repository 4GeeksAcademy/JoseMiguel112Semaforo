import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import '../../styles/index.css'

//create your first component
const Home = () => {



	return (
		<div className="text-center">
			<div className="justify-content-center" style={{ width: "200px" }}>
				<div className="d-flex justify-content-center">
					<div className="bg-dark mx-4" style={{ width: "20px", height: "100px" }} >	</div>


				</div>
				<div className="d-flex justify-content-center">

					<div className="bg-dark rounded" style={{ width: "100px", height: "300px"}}>
						<button className="btn bg- rounded-circle mt-3" style={{width:"85px", height: "85px", boxshadow: "red 60px -16px"}}></button>
						<button className="btn bg-warning rounded-circle mt-2" style={{width:"85px", height: "85px"}}></button>
						<button className="btn bg-success rounded-circle mt-2" style={{width:"85px", height: "85px"}}></button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;