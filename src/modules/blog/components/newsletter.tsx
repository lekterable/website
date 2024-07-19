'use client'

import is from '@sindresorhus/is'
import { useRef, useState } from 'react'
import { Button, Input } from '~components'
import { addMember } from '#blog/actions'
import { BackgroundGradient } from '~components/ui/background-gradient'

type Props = {
  className?: string
}

const Newsletter = ({ className }: Props) => {
  const emailRef = useRef<HTMLInputElement>(null)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const title = isSubscribed
    ? 'Thanks for Subscribing! ❤️'
    : 'Subscribe to Newsletter! 📬'
  const subtitle = isSubscribed
    ? 'Please let me know if you have any feedback or suggestions. 🙏'
    : 'Get exclusive 👨‍💻 tech insights, 💡 tips, and ✨ updates delivered straight to your inbox. No spam, pinky promise! :)'

  const onSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    const email = emailRef.current?.value

    if (!is.string(email)) return

    try {
      await addMember(email)
    } catch (error) {}

    setIsSubscribed(true)
  }

  return (
    <div className={className}>
      <BackgroundGradient className="rounded-lg bg-background p-6 sm:p-8 md:p-10">
        <h2 className="text-4xl md:mb-4 md:text-5xl">{title}</h2>
        <p className="mt-2 text-base md:mt-4 md:text-xl">{subtitle}</p>

        {!isSubscribed && (
          <form className="mt-4 flex md:mt-6" onSubmit={onSubscribe}>
            <Input
              autoComplete="email"
              className="flex-[5] rounded-br-none rounded-tr-none border-r-0"
              type="email"
              placeholder="Enter your email"
              name="email"
              ref={emailRef}
            />

            <Button
              type="submit"
              className="flex-[2] rounded-bl-none rounded-tl-none font-semibold"
            >
              Subscribe
            </Button>
          </form>
        )}
      </BackgroundGradient>
    </div>
  )
}

export default Newsletter
