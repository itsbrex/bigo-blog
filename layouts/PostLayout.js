import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import SuccessMessage from '@/components/SuccessMessage'
import Image from '@/components/Image'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${slug}`)}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm()

  // const subscribe = async ({ email }) => {
  //   const res = await fetch(`/api/emailoctopus?email=${email}&list=monthly`)
  //   return res
  // }
  const subscribe = async ({ email, bigoId }) => {
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
      hour12: false,
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    })

    const response = await fetch('https://api.apispreadsheets.com/data/S7iDzPcRAhIrBjDt/', {
      method: 'POST',
      headers: {
        accessKey: '97ce4e019e4f5176f15a7641a4a93924',
        secretKey: '1abe43c12b7cc1654b6006108a41a5d1',
      },
      body: JSON.stringify({
        data: {
          // add the current time as the  Timestamp
          Timestamp: timestamp,
          'Email Address': email,
          'Opt-In Notice': 'I agree',
          'Please enter your BIGO ID': bigoId,
          // 'Please enter your WhatsApp #': '+1(443)472‑7287',
          // 'Please select the topics you would like to subscribe to for updates.':
          // 	'ALL - Keep me in the loop with all BIGO updates!',
        },
      }),
    })
    return await response
  }

  // .then((res) => {
  //   if (res.status === 201) {
  //     // SUCCESS
  //   } else {
  //     // ERROR
  //   }
  // })

  const onSubmit = (data) => subscribe(data)
  const { slug, fileName, date, title, tags } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width="38px"
                          height="38px"
                          alt="avatar"
                          className="w-10 h-10 rounded-full"
                        />
                      )}
                      <dl className="text-sm font-medium leading-5 whitespace-nowrap">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {author.twitter.replace('https://twitter.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{children}</div>
              {/* UNCOMMENT TO ADD BACK GITHUB DISCUSSIONS BACK IN */}
              {/* <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={discussUrl(slug)} rel="nofollow">
                  {'Discuss on Twitter'}
                </Link>
                {` • `}
                <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
              </div>
              <Comments frontMatter={frontMatter} /> */}
            </div>

            <footer>
              <div className="text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Previous Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Next Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              {isSubmitSuccessful ? (
                <SuccessMessage handleReset={reset} />
              ) : (
                <div className="p-4 bg-gray-100 rounded-lg w-100 dark:bg-gray-800">
                  <p className="mb-2 text-lg font-extrabold">
                    Get early access to our event announcements and tutorials.
                  </p>
                  <p className="mb-8">
                    Leave your email address below and we'll notify you whenever new content is
                    posted.
                  </p>
                  <form className="flex-col sm:flex" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full px-5 py-3 placeholder-gray-500 border-gray-500 rounded-md dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-gray-800 dark:focus:ring-white"
                      placeholder="Enter your email"
                      {...register('email', {
                        required: 'Email is required.',
                        pattern: {
                          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        },
                        message: 'Please enter a vaild email.',
                      })}
                      disabled={isSubmitting}
                    />
                    <ErrorMessage errors={errors} name="email" />
                    <label htmlFor="bigoId" className="sr-only">
                      BIGO ID
                    </label>
                    <input
                      id="bigoId"
                      name="bigoId"
                      type="text"
                      required
                      className="w-full px-5 py-3 mt-3 placeholder-gray-500 border-gray-500 rounded-md dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-gray-800 dark:focus:ring-white"
                      placeholder="Enter your BIGO ID"
                      {...register('bigoId')}
                      disabled={isSubmitting}
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-white border border-transparent rounded-md bg-primary-500 hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:w-auto sm:flex-shrink-0"
                    >
                      Get notified
                    </button>
                  </form>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-100">
                    We won't spam. Promise.
                  </p>
                </div>
              )}
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/blog"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; Back to blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
