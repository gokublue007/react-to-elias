import React from 'react';
import MyPhoto from '../images/me.JPG';

const About = () => {
	return (
		<div className="about flex justify-center items-center animate-fadeIn">
			<div
				className="glass-container flex flex-wrap justify-center items-center"
				id="glass"
			>
				<figure className="glass-container-profile " id="profile">
					<img alt="Marcus" src={MyPhoto} />
				</figure>
				<div className="glass-container-text w-2/3" id="text">
					<h2 id="glass_title" className="text-2xl pb-2 uppercase">
						About_Me
					</h2>
					<p id="lorem_text" className=" indent-6">
						Hello, My name is Eli! I'm a Full Stack Developer based in Denver, CO.
						My journey began in February of 2022, after 7 years in the Auto Industry. 
                        I worked in sales for the industry, was recognized as a top 3 best performance saleman within the company! 
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;