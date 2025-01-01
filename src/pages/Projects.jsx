import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: "Commands App",
      deployUrl: "commandsapp.vercel.app",
      repo: "https://github.com/AndrewHypervenom/commandsapp",
      status: "Desplegado"
    },
    {
      title: "Office App",
      deployUrl: "officeapp-xi.vercel.app",
      repo: "https://github.com/AndrewHypervenom/officeapp",
      status: "Desplegado"
    },
    {
      title: "Keyboard App",
      deployUrl: "keyboardapp-brown.vercel.app",
      repo: "https://github.com/AndrewHypervenom/keyboardapp",
      status: "Desplegado"
    },
    {
      title: "Noven App",
      deployUrl: "novenapp.vercel.app",
      repo: "https://github.com/AndrewHypervenom/novenapp",
      status: "Desplegado"
    }
  ];

  return (
    <div className="bg-[#0A0F1C] min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-8">
          Proyectos
        </h1>
        <div className="grid gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}