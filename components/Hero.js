import Image from '@/components/Image'
import Link from '@/components/Link'

const Hero = () => {
  return (
    <section className="grid items-center justify-between py-8 lg:grid-rows-1 lg:grid-cols-2 min-w-screen">
      <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 xl:mb-0">
        <div className="flex flex-col items-center justify-start md:flex-row">
          <Image
            src="/static/images/avatar.png"
            alt="An image about Bigo Dino"
            className="w-32 h-32 border-2 border-gray-200 rounded-full shadow-md"
            width={72}
            height={72}
            layout="fixed"
            quality={60}
            priority
            loading="eager"
          />
          <h2 className="ml-2 text-3xl font-extrabold leading-tight font-display sm:text-4xl sm:leading-none md:text-5xl lg:text-5xl xl:text-6xl">
            Bigo Blog
          </h2>
        </div>
        <p className="mt-2 text-lg ">
          The latest news, updates, and tips for streamers on how to be successful, grow their
          audience, build their brand, and connect with fans.
        </p>
        <p className="mt-8 text-sm text-gray-400 dark:text-gray-400">
          Topics: Bigo Live app, growing your audience, building your brand, connecting with your
          fans, going live, tips for streamers, how to be a successful streamer, what to stream on
          Bigo Live.
        </p>

        <Link href="https://twitter.com/intent/follow?screen_name=bigolivena">
          <a
            className="flex flex-row items-center my-3 text-sm font-bold leading-6 text-blue-500 hover:text-gray-100"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              fill="currentColor"
              stroke="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-1"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
            We post stuff on Twitter too
          </a>
        </Link>
      </div>
      <div className="grid grid-cols-1 grid-rows-3 gap-8 py-12">
        <div className="grid items-start gap-8 my-2">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-amber-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-100 animate-tilt"></div>
            <Link href="https://www.onbigo.live">
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
                    {new Date().toLocaleString('default', { month: 'long' })} Events
                  </span>
                </span>
                <span className="pl-6 transition duration-100 text-amber-400 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                  Events &rarr;
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div className="grid items-start gap-8 my-2">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-100 animate-tilt"></div>
            <Link href="/blog">
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
                    Bigo Mail thoughts & ponderings
                  </span>
                </span>
                <span className="pl-6 text-indigo-400 transition duration-100 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                  Blog &rarr;
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div className="grid items-start gap-8 my-2">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-600 to-primary-600  rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-100 animate-tilt"></div>
            <Link href="https://help.onbigo.live">
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
                    View our Help Docs & FAQs
                  </span>
                </span>
                <span className="pl-6 transition duration-100 text-primary-400 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                  FAQ &rarr;
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
