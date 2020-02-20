import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => (
	<>
		<header className='header'>
			<div className='header__text-box'>
				<h1 className='heading-primary'>
					<span className='heading-primary--main'>Picnic</span>
					<span className='heading-primary--sub'>El Picacho</span>
				</h1>
				<Link to='/login' className='btn btn--white btn--animated'>
					Login
				</Link>
			</div>
		</header>

		<main>
			<section className='section-about'>
				<div className='u-center-text u-margin-bottom-big'>
					<h2 className='heading-secondary'>Having a good time with friends</h2>
				</div>
				<div className='row'>
					<div className='col-1-of-2'>
						<h3 className='heading-tertiary u-margin-bottom-small'>
							Ate sandwiches
						</h3>
						<p className='paragraph'>
							Had a good time. Twas a cool sunny day. No worries, just
							chillaxing with friends. I need more text but I don't know what to
							write.
						</p>
						<h3 className='heading-tertiary u-margin-bottom-small'>
							Ate fruit
						</h3>
						<p className='paragraph'>
							We bought mangos, apples, pears, and pomelos. We ate them before
							we had our sandwiches. Should I just type lorem and then press
							tab? Would that be cheating? Signup to add your ingredients.
						</p>
						<Link to='/signup' className='btn-text'>
							Signup &rarr;
						</Link>
					</div>
					<div className='col-1-of-2'>
						<div className='composition'>
							<img
								srcSet='img/car.jpg 300w, img/car.jpg 1000w'
								sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
								alt='Photo 1'
								className='composition__photo composition__photo--p1'
								src='img/car.jpg'
							/>

							<img
								srcSet='img/horizon.jpg 300w, img/horizon.jpg 1000w'
								sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
								alt='Photo 2'
								className='composition__photo composition__photo--p2'
								src='img/horizon.jpg'
							/>

							<img
								srcSet='img/picnic.jpg 300w, img/picnic.jpg 1000w'
								sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
								alt='Photo 3'
								className='composition__photo composition__photo--p3'
								src='img/picnic.jpg'
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	</>
)

export default LandingPage
