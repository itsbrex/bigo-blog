import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="max-w-6xl mx-auto divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul>
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags, lastmod } = frontMatter
            return (
              <Link
                href={`/${slug}`}
                key={slug}
                className="flex px-2 my-4 transition duration-200 bg-transparent group hover:bg-gray-100 dark:hover:bg-gray-800 bg-opacity-20 hover:rounded-xl"
              >
                <li className="px-4 py-12">
                  <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <div>
                      {lastmod && (
                        <dl>
                          <dt className="text-gray-500 dark:text-gray-400">Last updated</dt>
                          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                            <time dateTime={lastmod}>{formatDate(lastmod)}</time>
                          </dd>
                        </dl>
                      )}
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime="{date}">
                            {formatDate(date, 'America/Los_Angeles', 'MMMM Do, YYYY')}
                          </time>
                          <time dateTime="{date}">
                            {formatDate(date, 'America/Los_Angeles', 'MMMM Do, YYYY')}
                          </time>
                        </dd>
                      </dl>
                    </div>
                    <div className="space-y-3 xl:col-span-3">
                      <div>
                        <h3 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link href={`/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title}
                          </Link>
                        </h3>
                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                        {summary}
                      </div>
                    </div>
                  </article>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>

      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
