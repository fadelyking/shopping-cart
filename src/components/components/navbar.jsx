import "./navbar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
	return (
		<div className="nav-bar">
			<div className="nav-links">
				<ul>
					<li>
						<Link to="/">
							<h1>Home</h1>
						</Link>
					</li>
					<li>Shop</li>
				</ul>
			</div>
			<div className="cart">Cart Icon</div>
		</div>
	);
}
