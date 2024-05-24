import { ValidationError, useForm } from '@formspree/react'
import { Button, Input, Textarea, Waves } from '~components'
import SeparatorBoth from '~assets/separator-both.svg'

const Contact = () => {
  const [state, handleSubmit] = useForm('xqkvoljg')

  return (
    <section className="pb-[144px]" id="contact">
      <Waves className="rotate-180" upsideDown />
      <div className="width-[100%] mt-[89px] flex flex-col items-center px-[34px] xs:px-[55px]">
        <h1 className="font-['Akronim'] text-[55px] leading-none md:text-[89px]">
          Contact Me
        </h1>
        <SeparatorBoth className="w-[189px] text-accent" />
        <div className="mt-[13px] flex flex-col items-center text-[28px] font-bold xs:text-[28px] md:text-[47px]">
          {state.succeeded ? (
            <h2 className="text-[34px] text-accent md:text-[55px]">
              Thanks for reaching out!
            </h2>
          ) : (
            <>
              <h2>we can build great things together?</h2>
              <h2>
                Message Me<span className="text-accent">!</span>
              </h2>
            </>
          )}
        </div>
        <form
          className="mt-[21px] flex w-[100%] max-w-[521px] flex-col font-sans text-[21px]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col space-y-[13px] sm:flex-row sm:space-x-[21px] sm:space-y-0">
            <div className="flex flex-1 flex-col gap-[3px]">
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-1 flex-col gap-[3px]">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="mt-[13px] flex flex-col gap-[3px]">
            <label htmlFor="message">Message</label>
            <Textarea
              id="message"
              name="message"
              required
              className="h-[233px] w-[100%]"
              placeholder="Type your message here..."
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <Button
            size="lg"
            variant="default"
            className="mt-[21px] border-[2px] text-base hover:bg-transparent hover:text-primary focus-visible:bg-transparent focus-visible:text-primary focus-visible:ring-0 focus-visible:ring-offset-0"
            disabled={state.submitting}
          >
            Send!
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Contact
