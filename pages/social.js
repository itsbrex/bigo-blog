import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'

export default function Social() {
  return (
    <>
      <PageSEO
        title={`Social Media - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 grid-rows-3 gap-8 py-12">
          <div className="grid items-start gap-8 my-2">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-amber-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Link href="https://www.youtube.com/c/BIGOLIVEUSAOfficial?sub_confirmation=1">
                <a className="relative flex items-center py-4 leading-none bg-white divide-x divide-gray-600 rounded-lg px-7 dark:bg-black">
                  <span className="flex items-center space-x-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-green-600 -rotate-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                    <span className="pr-6 text-gray-900 dark:text-gray-100">
                      2 videos weekly on our YouTube channel
                    </span>
                  </span>
                  <span className="pl-6 transition duration-200 text-amber-400 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                    Go &rarr;
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="grid items-start gap-8 my-2">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Link href="https://tiktok.com/@bigoliveusa">
                <a className="relative flex items-center py-4 leading-none bg-white divide-x divide-gray-600 rounded-lg px-7 dark:bg-black">
                  <span className="flex items-center space-x-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-pink-600 -rotate-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <span className="pr-6 text-gray-900 dark:text-gray-100">
                      Dropping byte-sized tips on TikTok
                    </span>
                  </span>
                  <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                    Go &rarr;
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="grid items-start gap-8 my-2">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-600 to-primary-600  rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Link href="https://instagram.com/bigolive.usa">
                <a className="relative flex items-center py-4 leading-none bg-white divide-x divide-gray-600 rounded-lg px-7 dark:bg-black">
                  <span className="flex items-center space-x-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-fuchsia-600 -rotate-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                    <span className="pr-6 text-gray-900 dark:text-gray-100">
                      BIGO pics & vids on IG
                    </span>
                  </span>
                  <span className="pl-6 transition duration-200 text-primary-400 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                    Go &rarr;
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <h1>Writings from the Bigoverse</h1>
      </div>
    </>
  )
}
