import { Button, Input, Textarea, Waves } from '~components'
import SeparatorBoth from '~assets/separator-both.svg'

const Contact = () => (
  <section className="pb-[144px]" id="contact">
    <Waves className="rotate-180" upsideDown />
    <div className="width-[100%] mt-[89px] flex flex-col items-center px-[34px] xs:px-[55px]">
      <h1 className="font-['Akronim'] text-[55px] leading-none md:text-[89px]">
        Contact Me
      </h1>
      <SeparatorBoth width={189} />
      <div className="mt-[13px] flex flex-col items-center text-[28px] font-bold xs:text-[28px] md:text-[47px]">
        <h2>we can build great things together?</h2>
        <h2>
          Message Me<span className="text-accent">!</span>
        </h2>
      </div>
      <form className="mt-[21px] flex w-[100%] max-w-[521px] flex-col font-sans text-[21px]">
        <div className="flex flex-col space-y-[13px] sm:flex-row sm:space-x-[21px] sm:space-y-0">
          <div className="flex-1">
            <p className="mb-[3px]">Name</p>
            <Input placeholder="Your name" />
          </div>
          <div className="flex-1">
            <p className="mb-[3px]">Email</p>
            <Input placeholder="Your email" />
          </div>
        </div>
        <div className="mt-[13px]">
          <p className="mb-[3px]">Message</p>
          <Textarea
            className="h-[233px] w-[100%]"
            placeholder="Type your message here..."
          />
        </div>
        <Button
          size="lg"
          variant="default"
          className="mt-[21px] border-[2px] text-base hover:bg-transparent hover:text-primary focus-visible:bg-transparent focus-visible:text-primary focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          Send!
        </Button>
      </form>
    </div>
  </section>
)

export default Contact
