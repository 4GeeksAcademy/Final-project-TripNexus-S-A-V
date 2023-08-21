import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMeta } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
	return (

		<div className="container-footer align-items-center mt-5">
			<footer >
				<div className="line-above-footer"></div>
				<div className="row footer-content pt-3">
					<div className="col-2 footer-viajes">
						<h5>Viajes</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted" >Home</Link></li>
							<li className="nav-item mb-2"><Link to="/trip" className="nav-link p-0 text-muted" >Planea tu siguiente trip</Link></li>
							<li className="nav-item mb-2"><Link to="/reviews" className="nav-link p-0 text-muted" >Reseñas</Link></li>
							<li className="nav-item mb-2"><Link to="/offers" className="nav-link p-0 text-muted" >Ofertas</Link></li>
							<li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Ayuda</Link></li>
						</ul>
					</div>

					<div className="col-2 footer-business">
						<h5>Empresa</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2"><Link to="/cookies" className="nav-link p-0 text-muted" >Política de cookies</Link></li>
							<li className="nav-item mb-2"><Link to="/politica-privacidad" className="nav-link p-0 text-muted" >Política de privacidad</Link></li>
							<li className="nav-item mb-2"><Link to="/terms" className="nav-link p-0 text-muted" >Términos de servicio</Link></li>
							<li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-muted" >Información de la empresa</Link></li>
							<li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 text-muted">Contacto</Link></li>
						</ul>
					</div>
					<div className='col-2'></div>
					<div className="col-5 offset-1">
						<form className='mb-4'>
							<h5>Suscríbete a nuestro Newsletter</h5>
							<p>Recibe ofertas y promociones exclusivas.</p>
							<div className="d-flex w-100 gap-2">
								<label htmlFor="newsletter1" className="visually-hidden">Correo electrónico</label>
								<input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
								<button className="btn btn-primary" type="button">Subscribe</button>
							</div>
						</form>
						<div className="div-donation mb-5 w-100">
							<Link to='/donacion' >
								<button className="btn-donation">Participa en el desarrollo de la página!</button>
							</Link>
						</div>
					</div>
				</div>

				<div className="d-flex justify-content-between pt-2 my-2 border-top">
					<p className='mt-2'><strong>© 2023 TRIP NEXUS, S,L.</strong>Todos los derechos reservados.</p>
					<ul className="list-unstyled d-flex">
						<li className="ms-3"><a href="https://twitter.com/home" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} style={{color: "black", fontSize: "1.5rem"}} /></a></li>
						<li className="ms-3"><a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} style={{color: "black", fontSize: "1.5rem"}}/></a></li>
						<li className="ms-3"><a href="https://www.facebook.com/MetaAmericaLatina/?brand_redir=108824017345866" target='_blank'rel="noopener noreferrer"><FontAwesomeIcon icon={faMeta} style={{color: "black", fontSize: "1.4rem"}}/></a></li>
					</ul>
				</div>
			</footer>
		</div>
	);

};

export default Footer;
