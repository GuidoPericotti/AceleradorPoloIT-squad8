import React from 'react'

export const MentoresTable = () => {
  return (
    <div>
        {/* <!-- Table responsive wrapper --> */}
<div class="overflow-x-auto bg-white dark:bg-neutral-700">

  {/* <!-- Table --> */}
  <table class="min-w-full text-left text-sm whitespace-nowrap">

    {/* <!-- Table head --> */}
    <thead class="uppercase tracking-wider border-b-2 dark:border-neutral-600">
      <tr>
        <th scope="col" class="px-6 py-4">
          Mentores
        </th>
        <th scope="col" class="px-6 py-4">
          Tec. principal
        </th>
        <th scope="col" class="px-6 py-4">
          Tec. secundaria
        </th>
        <th scope="col" class="px-6 py-4">
          Email
        </th>
        <th scope="col" class="px-6 py-4">
          Dni
        </th>
        <th scope="col" class="px-6 py-4">
          Edad
        </th>
        <th scope="col" class="px-6 py-4">
          Telefono
        </th>        
        <th scope="col" class="px-6 py-4">
          <button>Añadir</button>
        </th>        

      </tr>
    </thead>

    {/* <!-- Table body --> */}
    <tbody>

      <tr class="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
        <th scope="row" class="px-6 py-4">
          Mario <br /> Alonso
        </th>
        <td class="px-6 py-4">Tester</td>
        <td class="px-6 py-4">UX/Ui</td>
        <td class="px-6 py-4">marioAlonso1@gmail.com</td>
      </tr>

      <tr class="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
        <th scope="row" class="px-6 py-4">
        Mario <br /> Alonso
        </th>
        <td class="px-6 py-4">Dev</td>
        <td class="px-6 py-4">UX/Ui</td>
        <td class="px-6 py-4">marioAlonso1@gmail.com</td>
      </tr>

      <tr class="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
        <th scope="row" class="px-6 py-4">
        Mario <br /> Alonso
        </th>
        <td class="px-6 py-4">UX/Ui</td>
        <td class="px-6 py-4">Dev</td>
        <td class="px-6 py-4">marioAlonso1@gmail.com</td>
      </tr>

      <tr class="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
        <th scope="row" class="px-6 py-4">
        Mario <br /> Alonso
        </th>
        <td class="px-6 py-4">Dev</td>
        <td class="px-6 py-4">TESTER</td>
        <td class="px-6 py-4">marioAlonso1@gmail.com</td>
      </tr>

      <tr class="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
        <th scope="row" class="px-6 py-4">
        Mario <br /> Alonso
        </th>
        <td class="px-6 py-4">TESTER</td>
        <td class="px-6 py-4">Dev</td>
        <td class="px-6 py-4">marioAlonso1@gmail.com</td>
      </tr>

    </tbody>

  </table>

</div>
    </div>
  )
}
