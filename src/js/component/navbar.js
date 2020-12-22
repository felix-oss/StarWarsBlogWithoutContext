import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<h3>Star Wars</h3>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarText"
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								Characters
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Planets
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Favorites
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="#">
								About Us
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
