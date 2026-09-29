import type { Author } from "../types"

type UserInfoProps = {
  author: Author
}

const UserInfo = ({ author }: UserInfoProps) => {
  return (
    <div className="author-info flex items-center gap-3 p-3">
      <img
        src={author.image}
        alt={author.fullname}
        className="h-12 w-12 rounded-full object-cover"
      />

      <p className="font-semibold">{author.fullname}</p>
    </div>
  )
}

export default UserInfo