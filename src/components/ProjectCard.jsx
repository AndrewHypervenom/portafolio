import { ExternalLink, MoreHorizontal, Github } from 'lucide-react';

const getProjectIcon = (title) => {
  if (title.includes('errorapp')) return '/face_error.svg';
  if (title.includes('contributionsapp')) return '/github-mark-white.svg';
  if (title.includes('commandsapp')) return '/programming.svg';
  if (title.includes('officeapp')) return '/microsoft.svg';
  if (title.includes('keyboardapp')) return '/keyboard.svg';
  if (title.includes('novenapp')) return '/gorro-navidad.svg';
  return '/microsoft.svg';
};

export default function ProjectCard({ title, description, deployUrl, repo }) {  
  const iconSrc = getProjectIcon(title);

  return (
    <div 
      onClick={() => window.open(`https://${deployUrl}`, '_blank')}
      className="group bg-white/60 dark:bg-[#0A0F1C]/60 backdrop-blur-md rounded-xl p-5 border border-gray-200/50 dark:border-gray-800/50 hover:border-blue-500/50 dark:hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
    >
      <div className="flex flex-col">
        {/* Header */}
        <div className="flex items-start gap-3 mb-2">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <a 
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="hover:text-blue-500 dark:hover:text-purple-400"
            >
              <Github className="w-5 h-5 text-gray-400 flex-shrink-0 hover:text-blue-500 dark:hover:text-purple-400" />
            </a>
            <a 
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="text-sm font-medium text-gray-900 dark:text-white truncate hover:text-blue-500 dark:hover:text-purple-400"
            >
              {title}
            </a>
          </div>
          <span className="inline-flex px-1.5 py-0.5 text-xs rounded-full bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-500/20 whitespace-nowrap flex-shrink-0">
            Disponible
          </span>
        </div>
        
        {/* Contenido principal */}
        <div className="flex justify-between gap-3 mb-4">
          <p className="text-sm text-gray-700 dark:text-gray-300 pr-3 line-clamp-2">
            {description}
          </p>
          <div className="flex-shrink-0 w-10 h-10">
            <img 
              src={iconSrc} 
              alt="Project icon" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-200/50 dark:border-gray-800/50 pt-4">
          <span className="text-xs font-mono text-gray-500 dark:text-gray-400 truncate max-w-[150px]">
            {deployUrl}
          </span>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a 
              href={`https://${deployUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-white/5 transition-colors group-hover:text-blue-500 dark:group-hover:text-purple-400"
              title="Abrir proyecto"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button 
              className="p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-white/5 transition-colors group-hover:text-blue-500 dark:group-hover:text-purple-400"
              title="Más opciones"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}