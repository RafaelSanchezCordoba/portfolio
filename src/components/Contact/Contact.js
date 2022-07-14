import './Contact.css'

export function Contact() {
  return (
    <section className='section contact center' id='contact'>
      <h2 className='section_title'>Contact</h2>
      <a href={`mailto:rafasanchezcordoba@gmail.com`}>
        <span type='button' className='btn btn-outline'>
          Email me
        </span>
      </a>
    </section>
  )
}

