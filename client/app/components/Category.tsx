import Image from 'next/image'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { categories } from '../data/data'

const Category = () => {
  return (
    <main className='px-28 mt-16'>
      <div className='border py-6 px-5 w-fit rounded-xl flex flex-col gap-3'>
        <h1>Category</h1>
        {categories.map((item, idx) => {
          return (
            <Accordion
              type='single'
              collapsible
              className='w-[250px]'
              key={idx}
            >
              <AccordionItem value='item-1'>
                <AccordionTrigger>
                  <div className='flex items-center gap-2'>
                    <Image
                      src={item.image}
                      priority
                      alt='category-image'
                      className='w-[20px]'
                    />
                    <h2 className='font-semibold text-sonicSilver'>
                      {item.title}
                    </h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent className='flex flex-col gap-1 items-start'>
                  {item.categories.map((category, idx) => {
                    return (
                      <button
                        key={idx}
                        className='flex items-center justify-between w-full'
                      >
                        <span className='text-spanishGray'>
                          {category.name}
                        </span>
                        <span className='text-spanishGray'>
                          {category.count} pcs
                        </span>
                      </button>
                    )
                  })}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )
        })}
      </div>
    </main>
  )
}

export default Category
