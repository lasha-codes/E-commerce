import Link from 'next/link'
import { socialLinks } from '../data/data'

const Header = () => {
  return (
    <header>
      <div>
        <nav>
          {socialLinks.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <link.icon />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
