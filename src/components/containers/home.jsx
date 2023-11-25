import "./home.css";
import NavBar from "../components/navbar";
export default function Homepage() {
	return (
		<>
			<NavBar />
			<div className="container">
				<div className="home-container">
					<div className="image-text">
						<img src="forest.jpg" />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab non ipsam
							consequatur temporibus hic qui laborum impedit cumque! Placeat, vel?
							Assumenda, similique non. Rerum explicabo qui voluptate laboriosam
							tempore eveniet!
						</p>
					</div>
					<div className="btns">
						<button className="primary">Learn More !</button>
						<button className="primary">Visit Shop</button>
					</div>
				</div>
			</div>
		</>
	);
}
