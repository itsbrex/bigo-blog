import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import Link from '@/components/Link'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <div className="max-w-6xl mx-auto">
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
      {/* <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Recommended Reads
          </h2>
        </div>
        <div className="grid items-start pt-12 space-y-2 xl:grid-cols-3 xl:gap-x-8">
          <Link href="https://amzn.to/3HX2lpE" className="mb-12 h-72 group">
            <div className="relative w-full h-full p-4 bg-gray-100 group-hover:bg-opacity-40 dark:bg-gray-800 rounded-xl">
              <div className="absolute bottom-0 left-0 px-4 py-6">
                <p className="font-extrabold">Playing with FIRE</p>
                <p className="mt-2 text-sm">How Far Would You Go for Financial Freedom?</p>
                <p className="mt-2 text-sm">Scott Rieckens</p>
                <p className="mt-2 text-xs">2019</p>
              </div>
            </div>
          </Link>
          <Link href="https://amzn.to/3kAFipE" className="mb-12 h-72 group">
            <div className="relative w-full h-full p-4 bg-gray-100 group-hover:bg-opacity-40 dark:bg-gray-800 rounded-xl">
              <div className="absolute bottom-0 left-0 px-4 py-6">
                <p className="font-extrabold">Company of One</p>
                <p className="mt-2 text-sm">Why Staying Small Is the Next Big Thing for Business</p>
                <p className="mt-2 text-sm">Paul Jarvis</p>
                <p className="mt-2 text-xs">2020</p>
              </div>
            </div>
          </Link>
          <Link href="https://amzn.to/3BobseK" className="mb-12 h-72 group">
            <div className="relative w-full h-full p-4 bg-gray-100 group-hover:bg-opacity-40 dark:bg-gray-800 rounded-xl">
              <div className="absolute bottom-0 left-0 px-4 py-6">
                <p className="font-extrabold">Bigger Leaner Stronger</p>
                <p className="mt-2 text-sm">
                  The simple science of building the ultimate male body
                </p>
                <p className="mt-2 text-sm">Michael Matthews</p>
                <p className="mt-2 text-xs">2019</p>
              </div>
            </div>
          </Link>
          <Link href="https://amzn.to/3DtRUHI" className="mb-12 h-72 group">
            <div className="relative w-full h-full p-4 bg-gray-100 group-hover:bg-opacity-40 dark:bg-gray-800 rounded-xl">
              <div className="absolute bottom-0 left-0 px-4 py-6">
                <p className="font-extrabold">Show Your Work</p>
                <p className="mt-2 text-sm">10 Ways to Share Your Creativity and Get Discovered</p>
                <p className="mt-2 text-sm">Austin Kleon</p>
                <p className="mt-2 text-xs">2014</p>
              </div>
            </div>
          </Link>
          <Link href="https://makebook.io/" className="mb-12 h-72 group">
            <div className="relative w-full h-full p-4 bg-gray-100 group-hover:bg-opacity-40 dark:bg-gray-800 rounded-xl">
              <div className="absolute bottom-0 left-0 px-4 py-6">
                <p className="font-extrabold">M.A.K.E.</p>
                <p className="mt-2 text-sm">The Indie maker handbook</p>
                <p className="mt-2 text-sm">Pieter Levels</p>
                <p className="mt-2 text-xs">2020</p>
              </div>
            </div>
          </Link>
          <Link href="https://amzn.to/3DtCDqr" className="mb-12 h-72 group">
            <div className="relative w-full h-full p-4 bg-gray-100 group-hover:bg-opacity-40 dark:bg-gray-800 rounded-xl">
              <div className="absolute bottom-0 left-0 px-4 py-6">
                <p className="font-extrabold">4 Hour Workweek</p>
                <p className="mt-2 text-sm">Escape 9-5, Live Anywhere, and Join the New Rich</p>
                <p className="mt-2 text-sm">Timothy Ferriss</p>
                <p className="mt-2 text-xs">2009</p>
              </div>
            </div>
          </Link>
          <Link href="https://amzn.to/3gItr85" className="mb-12 h-72 group">
            <div className="relative w-full h-full p-4 bg-gray-100 group-hover:bg-opacity-40 dark:bg-gray-800 rounded-xl">
              <div className="absolute bottom-0 left-0 p-4">
                <p className="font-extrabold">Built to Sell</p>
                <p className="mt-2 text-sm">Creating a Business That Can Thrive Without You</p>
                <p className="mt-2 text-sm">John Warrillow</p>
                <p className="mt-2 text-xs">2012</p>
              </div>
            </div>
          </Link>
        </div>
      </div> */}
    </div>
  )
}
