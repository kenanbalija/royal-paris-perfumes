import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          {/* eslint-disable */}
          "Crafting Elegance with Royal Paris Perfumes"
        </p>
        <p className="mt-4">
          "Every Fragrance Begins with a Note" is a journey that takes you into the heart of our luxury perfumes brand, Royal Paris Perfumes. Delve into the artistry and sophistication that defines our scents
        </p>
        <p className="mt-4">
          Before experiencing the world of Royal Paris Perfumes, one might have envisioned the creation of fragrances as a complex process involving elusive notes, intricate distillations, and a mastery of perfumery passed down through generations.
        </p>
        <p className="mt-4">
          However, at Royal Paris Perfumes, we reveal a different essence of fragrance creation.
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Exploring the fusion of premium ingredients to craft intricate olfactory experiences',
            'Adapting fragrances to resonate across diverse moments and settings',
            'Transitioning scents from classic to contemporary, encapsulating timeless allure',
            'Infusing each fragrance with the characteristics that unify our collection',
            'By the conclusion of this exploration, you\'ll possess the confidence to embark on your own journey of crafting perfumes that stand proudly amidst the finest selections in the market.',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-custom-pink" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          In "Every Fragrance Begins with a Note," you'll uncover the techniques that our experts employ to compose exquisite perfumes, defying conventional notions.
        </p>
        <p className="mt-10">
          <Link
            href="https://www.chogangroup.com/KENDE41D5"
            className="text-base font-medium text-custom-pink hover:text-custom-pink"
          >
            Embark on the Prelude: Explore Our Store
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
