import { SearchBar } from '@/components/SearchBar'
import { connectToMongo } from '@/server/DL/connectToMongo'
import { readCategory } from '@/server/DL/controllers/category.controller'
import { readRecipes } from '@/server/DL/controllers/recipe.controller'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Page({ searchParams: { search } }) {
   await connectToMongo()
   const result = await readRecipes({
      $or: [{ title: { $regex: search, $options: 'i' } }, { description: { $regex: search, $options: 'i' } }]
   })

   return (
      <div>
         <SearchBar val={search}/>
         <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {result?.map((recipe) => (
               <Link className='flex flex-col' key={recipe._id} href={`/recipe/${recipe._id}`} >
                  <Image src={recipe.image} alt={recipe.title} width={600} height={400} />
                  {recipe.title}
               </Link>
            ))}
         </section>
      </div>
   )
}
