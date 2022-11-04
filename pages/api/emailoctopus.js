/* eslint-disable import/no-anonymous-default-export */
// // using emailoctopus as the newsletter service
// export default async (req, res) => {
//   const { email, list } = req.query

//   if (!email) {
//     return res.status(400).json({ error: 'Email is required' })
//   }

//   if (!list) {
//     return res.status(400).json({ error: 'List is required' })
//   }
//   const FORM_ID =
//     list === '12-tips-production-apps'
//       ? process.env.EMAILOCTOPUS_TIPS_FORM_ID
//       : process.env.EMAILOCTOPUS_MONTHLY_FORM_ID
//   const API_KEY = process.env.EMAILOCTOPUS_API_KEY
//   const API_URL = process.env.EMAILOCTOPUS_API_URL

//   const data = { api_key: API_KEY, email_address: email }

//   const URL = `${API_URL}/${FORM_ID}/contacts`

//   try {
//     const response = await fetch(URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })

//     // Any error from = return custom message
//     if (response.status >= 400) {
//       return res.status(400).json({
//         error: `There was an error subscribing to the list.`,
//       })
//     }

//     return res.status(201).json({ error: '' })
//   } catch (error) {
//     return res.status(500).json({ error: error.message || error.toString() })
//   }
// }

// using google forms as the newsletter provider
export default async (req, res) => {
  const { email, list } = req.query

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  if (!list) {
    return res.status(400).json({ error: 'List is required' })
  }

  // Google form https://docs.google.com/forms/d/1nQRbUC2kdk6FO2Cc1rYAQ3OeVVccHeQvRbbjEPKnm2o/edit
  // const FORM_ID =
  //   list === '12-tips-production-apps'
  //     ? process.env.GOOGLE_FORM_TIPS_ID
  //     : process.env.GOOGLE_FORM_MONTHLY_ID
  const URL = `https://docs.google.com/forms/d/e/1nQRbUC2kdk6FO2Cc1rYAQ3OeVVccHeQvRbbjEPKnm2o/formResponse`

  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `emailAddress=${email}`,
    })

    // Any error from = return custom message
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the list.`,
      })
    }

    return res.status(201).json({ error: '' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}
