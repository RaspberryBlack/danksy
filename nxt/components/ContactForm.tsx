export const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="contact-form"
    >
      <label className="basis-1/3 grow">
        <span className="label">Name: </span>
        <input type="text" name="name" />
      </label>

      <label className="basis-1/3 grow">
        <span className="label">Email: </span>
        <input type="email" name="email" />
      </label>

      <label className="w-full flex-wrap">
        <span className="label w-full">Message: </span>
        <textarea name="message"></textarea>
      </label>

      <p className="w-full">
        <button type="submit" className="rounded ">Send</button>
      </p>
    </form>
  )
}

