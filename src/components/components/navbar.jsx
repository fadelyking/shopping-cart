import "./navbar.css";
export default function NavBar() {
	return (
		<div className="nav-bar">
			<div className="nav-links">
				<ul>
					<li>
						<h1>Home</h1>
					</li>
					<li>Shop</li>
				</ul>
			</div>
			<div className="cart">Cart Icon</div>
		</div>
	);
}
