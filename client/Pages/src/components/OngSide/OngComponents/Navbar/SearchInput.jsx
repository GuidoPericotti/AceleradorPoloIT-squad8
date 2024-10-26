import React from 'react'

export const SearchInput = () => {
  return (
    <div className="flex items-center">
      <div className="relative flex w-full max-w-[200px]">
        <input
          type="search"
          className="peer h-8 w-full rounded-l border border-slate-700 bg-transparent px-2 text-xs leading-tight outline-none transition-all"
          placeholder=" "
          aria-label="Search"
          id="search-focus"
        />
        <label
          htmlFor="search-focus"
          className="absolute left-2 top-1 text-xs text-neutral-500 transition-all peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:bg-[#C6E5D6] dark:peer-focus:bg-gray-900 peer-focus:px-1"
        >
          Search
        </label>
        <button
          className="flex h-8 items-center rounded-r bg-primary px-2 text-white hover:bg-primary/90"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}