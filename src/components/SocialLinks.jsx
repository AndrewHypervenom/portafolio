import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a 
        href="https://github.com/AndrewHypervenom" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
        title="GitHub"
      >
        <Github className="w-6 h-6" />
      </a>
      <a 
        href="https://www.linkedin.com/in/andresfelipefajardopachon/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
        title="LinkedIn"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a 
        href="mailto:andrew.fajardo@gmail.com" 
        className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
        title="Email"
      >
        <Mail className="w-6 h-6" />
      </a>
      <a 
        href="https://wa.me/573123661254" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
        title="WhatsApp"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}