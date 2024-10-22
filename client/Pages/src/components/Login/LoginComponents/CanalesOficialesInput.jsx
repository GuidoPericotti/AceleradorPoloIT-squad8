  import React from 'react'

  export const CanalesOficialesInput = () => {
    return (
      <>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Canales Digitales Oficiales
              </label>
              <textarea
                className="dark:text-white peer block text-sm w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0 font-medium"
                placeholder="Describe tus canales digitales oficiales aquí..."
                aria-label="Canales Digitales Oficiales"
                rows="2"
                id='web_org'
              />
              <div className='pt-3'>
              <textarea
                className="dark:text-white peer block text-sm w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0 font-medium"
                placeholder="Instagram"
                aria-label="Instagram"
                rows="1"
                id='instagram_org'
              />
              </div>
              <div className='pt-3'>
              <textarea
                className="dark:text-white peer block text-sm w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0 font-medium"
                placeholder="Twitter"
                aria-label="twitter"
                rows="1"
                id='twitter_org'
              />
              </div>
              <div className='pt-3'>
              <textarea
                className="dark:text-white peer block text-sm w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-700 focus:border-sky-500 dark:focus:border-sky-500 focus:outline-none focus:ring-0 font-medium"
                placeholder="Facebook"
                aria-label="facebook"
                rows="1"
                id='facebook_org'
              />
              </div>
      </>
    )
  }
