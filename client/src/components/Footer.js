import React from 'react'

const Footer = () => (
	<footer className='footer'>
		<div className='row'>
			<div className='col-1-of-2'>
				<div className='footer__navigation'>
					<ul className='footer__list'>
						<li className='footer__item'>
							<a
								href='https://www.linkedin.com/in/mauricio-matamoros-208a8a151/'
								target='_blank'
								className='footer__link'
							>
								LinkedIn
							</a>
						</li>
						<li className='footer__item'>
							<a
								href='https://twitter.com/Mauriemm'
								target='_blank'
								className='footer__link'
							>
								Twitter
							</a>
						</li>
						<li className='footer__item'>
							<a
								href='https://github.com/MauriMatamoros'
								target='_blank'
								className='footer__link'
							>
								GitHub
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='col-1-of-2'>
				<p className='footer__copyright'>
					Built by{' '}
					<a href='#' className='footer__link'>
						Mauricio Matamoros
					</a>{' '}
					inspired by{' '}
					<a href='#' className='footer__link'>
						Jonas Schmedtmann.
					</a>{' '}
					Credit where credit is do. I took the design inspiration for the
					landing page from one of the courses I've taken from Udemy. The one in
					particular is Jonas' Advanced CSS course. Loved it.
				</p>
			</div>
		</div>
	</footer>
)

export default Footer
