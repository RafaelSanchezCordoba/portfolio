import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import './About.css'

export function About() {
    return (
        <div className='about center'>
            <h1>Hi, I am <span className='about_name'>Rafa Sanchez</span></h1>
            <h2 className='about_role'>Software Engineering Student</h2>
            <p className='about_desc'>I'm Rafa from Spain and I'm a software engineering student at VIA University College, Denmark. I really enjoy learning new languages and frameworks as react, node.js, swift... My goal this year is to get a student job as a software engineer.</p>

            <div className='about_contact center'>
                <a href='#'>
                    <span type='button' className='btn btn-outline'>
                        Resume
                    </span>
                </a>
                <>
                    <a href='https://github.com/RafaelSanchezCordoba' target="_blank" aria-label='github' className='link link-icon'>
                        <GitHubIcon />
                    </a>
                    <a href='https://www.linkedin.com/in/rafael-sánchez-córdoba-672693184/' target="_blank" aria-label='linkedin'className='link link-icon'>
                        <LinkedInIcon />
                    </a>
                </>
            </div>
        </div>
    )
}