import ProjectsComponent from './Projects';
import CssSnippet from '../images/CSS_992.png';
import ParkPass from '../images/parkpass.png';
import ProgressiveWebApp from '../images/PWA.png';
import PasswordGen from '../images/Super-Awesome-Password-Generator.png';
import TeamProfileGen from '../images/Team-Profile.png';
import TechBlog from '../images/Tech-Blog-dt.png';

const Portfolio = () => {
	const projects = [
		{
			name: 'Engineers_Tech_Blog',
			image: TechBlog,
			repoLink: 'https://github.com/gokublue007/Engineers-Tech-Blog',
			deployedApp: 'https://fierce-reef-90500.herokuapp.com/'
		},
		{
			name: 'Park_Pass',
			image: ParkPass,
			repoLink: 'https://github.com/gokublue007/Park-Pass',
			deployedApp: 'https://gokublue007.github.io/Park-Pass/'
		},
		{
			name: 'Organize-Your-Thoughts',
			image: CssSnippet,
			repoLink: 'https://github.com/gokublue007/Organize-Your-Thoughts',
			deployedApp: 'https://fast-thicket-44321.herokuapp.com/'
		},
		{
			name: 'Password_Generator',
			image: PasswordGen,
			repoLink:
				'https://github.com/gokublue007/Seed-Pharse-Characters-Generator',
			deployedApp:
				'https://gokublue007.github.io/Seed-Pharse-Characters-Generator/'
		},
		{
			name: 'J.A.T.E',
			image: ProgressiveWebApp,
			repoLink: 'https://github.com/gokublue007/Progressive-Text-Editor',
			deployedApp: 'https://texteditorapp.herokuapp.com/'
		},
		{
			name: 'Team_Profile_Generator',
			image: TeamProfileGen,
			repoLink: 'https://github.com/gokublue007/Team-Profile-Creator',
			deployedApp: ''
		}
	];

	return (
		<div className="about container mx-auto mb-10 flex justify-evenly items-center animate-fadeIn">
			<div className="project-container md:w-5/6 w-full">
				{projects &&
					projects.map((project) => (
						<ProjectsComponent
							name={project.name}
							image={project.image}
							repoLink={project.repoLink}
							deployedApp={project.deployedApp}
						/>
					))}
			</div>
		</div>
	);
};

export default Portfolio;