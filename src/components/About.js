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
					<img alt="Elias" src={MyPhoto} />
				</figure>
				<div className="glass-container-text w-2/3" id="text">
					<h2 id="glass_title" className="text-2xl pb-2 uppercase">
						About_Me
					</h2>
					<p id="lorem_text" className=" indent-2">
						Hello, My name is Eli! I'm a Colorado native, based in Denver, Colorado!
						My journey began in February of 2022 for the Full Stack Developer career after ending my 7 year sales career for Toyota. 
                        I worked in the industry and was recognized as a top 3 best performance saleman within the company for 5 out of my 7 years of working in the in!
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;