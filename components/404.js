import { ChevronRightIcon } from '@heroicons/react/solid'
import { BookOpenIcon, VideoCameraIcon, CodeIcon } from '@heroicons/react/outline'
import Link from '@/components/Link'

const links = [
  {
    title: 'Blog Posts',
    description: 'Read about the latest happenings from the Bigo Live community',
    icon: BookOpenIcon,
    route: '/blog',
  },
  {
    title: 'Events',
    description: 'Broadcaster Events and information',
    icon: CodeIcon,
    route: 'https://www.onbigo.live/',
  },
  {
    title: 'YouTube',
    description: 'Tutorials, guides, and vlog',
    icon: VideoCameraIcon,
    route: 'https://www.youtube.com/c/BIGOLIVEUSAOfficial?sub_confirmation=1',
  },
]

export default function FourOFour() {
  return (
    <main className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-xl py-16 mx-auto sm:py-24">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wide uppercase">404 error</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            This page does not exist.
          </h1>
          <p className="mt-2 text-lg">The page you are looking for could not be found.</p>
        </div>
        <div className="mt-12">
          <h2 className="text-sm font-semibold tracking-wide uppercase">Popular pages</h2>
          <ul className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
            {links.map((link, linkIdx) => (
              <li key={linkIdx} className="">
                <Link
                  key={linkIdx}
                  href={link.route}
                  className="relative flex items-center py-6 space-x-4 focus:outline-none"
                >
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center w-12 h-12 rounded-lg">
                      <link.icon className="w-6 h-6 text-primary-700" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium">
                      <span className="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        {link.title}
                      </span>
                    </h3>
                    <p className="text-base">{link.description}</p>
                  </div>
                  <div className="self-center flex-shrink-0">
                    <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/" className="text-base font-medium">
              <>
                Or go back home<span aria-hidden="true"> &rarr;</span>
              </>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
