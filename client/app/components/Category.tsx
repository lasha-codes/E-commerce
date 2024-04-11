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
      {categories.map((item, idx) => {
        return (
          <Accordion type='single' collapsible className='w-[250px]' key={idx}>
            <AccordionItem value='item-1'>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent className='flex flex-col items-start'>
                {item.categories.map((category, idx) => {
                  return (
                    <button
                      key={idx}
                      className='flex items-center justify-between w-full'
                    >
                      <span>{category.name}</span>
                      <span>{category.count}</span>
                    </button>
                  )
                })}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )
      })}
    </main>
  )
}

export default Category
