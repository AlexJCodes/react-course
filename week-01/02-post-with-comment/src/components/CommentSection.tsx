import type { Comment as CommentType } from "../types"
import UserInfo from "./UserInfo"

type CommentSectionProps = {
  comment: CommentType
}

const CommentSection = ({ comment }: CommentSectionProps) => {
  return (
    <section
      id="comment-section"
      className="mt-4 border-3 border-purple-500 p-4"
    >
      <div className="comment">
        <UserInfo author={comment.author} />
      </div>

      <p className="mt-3">{comment.content}</p>

      <small>{comment.date.toLocaleDateString()}</small>
    </section>
  )
}

export default CommentSection