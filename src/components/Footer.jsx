import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <SocialLinks />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 AndrewHypervenom.
          </p>
        </div>
      </div>
    </footer>
  )
}