import { useForm } from 'react-hook-form'
import * as Fathom from 'fathom-client'
import { ErrorMessage } from '@hookform/error-message'
import SuccessMessage from '@/components/SuccessMessage'

const EmailCTA = ({
  title = "Join thousands of Host's leveling up their game with the best tips, tricks and how-to videos from the best on Bigo",
  description = 'Sign up today to get the latest tips, tricks and how-to videos from some of the best on Bigo. From beginner to expert, we have you covered.',
  // list = 'monthly',
  cta = 'Sign Me Up!',
  embedded = false,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm()

  const subscribe = async ({ email, bigoId }) => {
    // set the timestamp to be in the format like this example '11/4/2022 16:21:28'
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
    // add detailed logging
    // console.log('response', response)
    return await response // parses JSON response into native JavaScript objects
  }

  const onSubmit = (data) => subscribe(data)

  return (
    <div className="">
      <div className="mx-auto">
        <div
          className={`${
            embedded ? 'px-4 py-2' : 'px-12 py-12'
          } bg-gray-100 dark:bg-gray-800 rounded-xl lg:flex lg:items-center`}
        >
          {isSubmitSuccessful ? (
            <SuccessMessage handleReset={reset} />
          ) : (
            <>
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-extrabold tracking-tight">{title}</h2>
                <p className="max-w-3xl mt-4 text-gray-500 text-md dark:text-gray-400">
                  {description}
                </p>
              </div>
              <div className="sm:w-full sm:max-w-md lg:ml-8 lg:flex-1">
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
                    className="w-full px-5 py-3 text-black placeholder-gray-500 border-gray-500 rounded-md dark:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-gray-800 dark:focus:ring-white"
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
                    {cta}
                  </button>
                </form>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-100">
                  We won't spam. Promise.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default EmailCTA
