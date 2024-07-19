import type { TUseForm } from '@formspree/react'
import { ValidationError } from '@formspree/react'
import { Button, Input, Textarea } from '~components'

type Form = {
  name: string
  email: string
  message: string
}

type Props = {
  state: TUseForm<Form>[0]
  handleSubmit: TUseForm<Form>[1]
}

const ContactForm = ({ handleSubmit, state }: Props) => (
  <form className="flex w-[100%] flex-col text-[21px]" onSubmit={handleSubmit}>
    <div className="flex flex-col space-y-[13px] sm:flex-row sm:space-x-[21px] sm:space-y-0">
      <div className="flex flex-1 flex-col gap-[3px]">
        <label className="text-primary" htmlFor="name">
          Name
        </label>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className="flex flex-1 flex-col gap-[3px]">
        <label className="text-primary" htmlFor="email">
          Email
        </label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Your email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
    </div>
    <div className="mt-[13px] flex flex-col gap-[3px]">
      <label className="text-primary" htmlFor="message">
        Message
      </label>
      <Textarea
        id="message"
        name="message"
        required
        className="h-[233px] w-[100%]"
        placeholder="Message here..."
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
    </div>
    <Button
      type="submit"
      size="lg"
      variant="default"
      className="mt-[21px]"
      disabled={state.submitting}
    >
      Send!
    </Button>
  </form>
)

export default ContactForm
