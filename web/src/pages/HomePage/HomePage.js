import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import NavBar from 'src/components/NavBar/NavBar'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="flex"></div>
      <NavBar />
    </>
  )
}

export default HomePage
