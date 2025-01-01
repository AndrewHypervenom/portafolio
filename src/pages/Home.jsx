import ProjectCard from '../components/ProjectCard';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Home() {
  const projects = [
    {
      title: "AndrewHypervenom/errorapp",
      description: "Guía completa de errores comunes en desarrollo y sus soluciones",
      deployUrl: "erroresapp.vercel.app",
      repo: "https://github.com/AndrewHypervenom/errorapp"
    },
    {
      title: "AndrewHypervenom/contributionsapp",
      description: "Visualiza y analiza tus contribuciones de GitHub de forma interactiva",
      deployUrl: "contributionsapp.vercel.app",
      repo: "https://github.com/AndrewHypervenom/contributionsapp"
    },
    {
      title: "AndrewHypervenom/commandsapp",
      description: "Colección extensa de comandos para Git, Linux, Docker y más tecnologías",
      deployUrl: "commandsapp.vercel.app",
      repo: "https://github.com/AndrewHypervenom/commandsapp"
    },
    {
      title: "AndrewHypervenom/officeapp",
      description: "Domina los atajos de teclado de Excel, Word y PowerPoint",
      deployUrl: "officeapp-xi.vercel.app",
      repo: "https://github.com/AndrewHypervenom/officeapp"
    },
    {
      title: "AndrewHypervenom/keyboardapp",
      description: "Crea GIFs animados de secuencias de teclas en un teclado virtual",
      deployUrl: "keyboardapp-brown.vercel.app",
      repo: "https://github.com/AndrewHypervenom/keyboardapp"
    },
    {
      title: "AndrewHypervenom/novenapp",
      description: "Experimenta la Novena de Aguinaldos de forma interactiva",
      deployUrl: "novenapp.vercel.app",
      repo: "https://github.com/AndrewHypervenom/novenapp"
    }
  ];

  return (
    <div className="overflow-hidden h-full">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-8">
        {/* Intro minimalista */}
        <div className="text-center mb-10">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            ¡Hola!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Bienvenido a mi colección de aplicaciones web open source. 
            Siéntete libre de usarlas y contribuir.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  );
}