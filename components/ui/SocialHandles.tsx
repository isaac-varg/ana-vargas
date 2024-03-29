import { socialHandles } from "@/configs/socialHandles"
import SocialIcon from "./SocialIcon"

const SocialHandles = () => {
  return (
    <div className="flex flex-row space-x-10">
                {socialHandles.map( social => {
                  return <SocialIcon key={social.handle} socialHandle={social} />
                })}
              </div>
  )
}

export default SocialHandles