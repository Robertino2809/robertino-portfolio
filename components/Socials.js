import Link from "next/link"

import { FaGithub, FaLinkedinIn, FaBehance } from "react-icons/fa"

import { SiFiverr } from "react-icons/si"

const socials = [
  {icon: <FaGithub />, path: "https://github.com/Robertino2809"},
  {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/robertino-puhani%C4%87-a58801256/"},
  {icon: <FaBehance />, path: "https://www.behance.net/robertinopuhani1"},
  {icon: <SiFiverr />, path: "https://www.fiverr.com/robertino_p"},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      })}
    </div>
  )
}
export default Socials