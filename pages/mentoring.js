import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'

export default function Mentoring() {
  return (
    <>
      <PageSEO
        title={`Mentoring - ${siteMetadata.author}`}
        description={`Mentoring - ${siteMetadata.author}`}
      />
      <div className="max-w-6xl mx-auto divide-y">
        <div className="mt-24 text-center">
          <h1 className="text-lg font-extrabold">
            If you'd be interested in staying up to date about any of the following topics, feel
            free to hit us up on{' '}
            <Link
              className="underline text-primary-500"
              href="https://twitter.com/intent/follow?screen_name=bigolivena"
            >
              Twitter DMs
            </Link>
            .
          </h1>
          <ul className="mt-4 list-disc">
            <li className="mt-2 list-item">• Growing as a livestreamer </li>
            <li className="mt-2 list-item">• Growing as an Agency Leader</li>
            <li className="mt-2 list-item">• Building a successful social media presence</li>
            <li className="mt-2 list-item">• Building a talent Agency</li>
          </ul>
          <p className="mt-24">
            This page is currently a draft. Look back later to see what's changed.{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </p>
        </div>
      </div>
    </>
  )
}
