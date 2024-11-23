'use client'

import { useForm } from '@formspree/react'
import { Waves } from '~components'
import ContactForm from './contact-form'
import SeparatorBoth from '~assets/separator-both.svg'
import EmbedCalendar from '~components/embed-calendar'

const Contact = () => {
  const [state, handleSubmit] = useForm('xqkvoljg')

  return (
    <section id="contact" className="min-h-safe">
      <Waves className="rotate-180" upsideDown />
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center px-[34px] pb-[55px] pt-[89px] xs:px-[55px]">
        <header className="flex flex-col items-center">
          <h1 className="text-[55px] md:text-[89px]">Contact</h1>
          <SeparatorBoth className="w-[189px] text-accent" />
          <div className="mt-[13px] flex flex-col text-center text-[34px] font-semibold md:text-[47px]">
            {state.succeeded ? (
              <h2 className="text-[34px] text-accent md:text-[55px]">
                Thanks for reaching out! ✌️
              </h2>
            ) : (
              <>
                <h2>We can build great things together?</h2>
                <h2>
                  Reach out<span className="text-accent">!</span>
                </h2>
              </>
            )}
          </div>
        </header>
        <div className="mt-[55px] flex w-full max-w-lg flex-col items-center gap-[34px] lg:max-w-5xl lg:flex-row">
          <EmbedCalendar className="aspect-square w-full" />
          <span className="text-2xl">or</span>
          <ContactForm state={state} handleSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  )
}

export default Contact
