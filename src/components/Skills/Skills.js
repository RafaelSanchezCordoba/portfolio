import uniqid from 'uniqid'
import './Skills.css'

export function Skills() {
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'Java',
    'C#',
    'SQL',
    'React',
    'Git',
  ]

  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section_title'>Skills</h2>
      <ul className='skills_list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills_list_item btn btn-plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

