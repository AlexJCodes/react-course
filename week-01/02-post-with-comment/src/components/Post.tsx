import { useState } from "react"
import type { Comment as CommentType, Post as PostType } from "../types"
import CommentSection from "./CommentSection"
import UserInfo from "./UserInfo"

type PostProps = {
  post: PostType
  comment: CommentType
}

const Post = ({ post, comment }: PostProps) => {
  const [displayComments, setDisplayComments] = useState(true)
  const [likes, setLikes] = useState(0)

  const handleLike = () => {
    setLikes(likes + 1)
  }

  const handleSuperLike = () => {
    setLikes((previousLikes) => previousLikes + 1)
    setLikes((previousLikes) => previousLikes + 1)
    setLikes((previousLikes) => previousLikes + 1)
  }

  return (
    <article
      id="post"
      className="mx-auto my-5 w-full max-w-4xl border-3 border-sky-400 p-4"
    >
      <UserInfo author={post.author} />

      <h1 className="mt-4 text-3xl font-bold">
        {post.headline}
      </h1>

      <p className="mt-4">
        {post.content}
      </p>

      <small>{post.date.toLocaleDateString()}</small>

      <div>
        <button
          type="button"
          onClick={() => setDisplayComments(!displayComments)}
          className="mt-4 rounded bg-slate-900 px-4 py-2 text-white"
        >
          {displayComments ? "Hide comments" : "Show comments"}
        </button>

        <button
            type="button"
            onClick={handleLike}
            className={`mt-4 rounded bg-slate-200 px-4 py-2 ${
                likes > 0 ? "liked" : ""
            }`}
            >
            👍 {likes} {likes === 1 ? "like" : "likes"}
        </button>

        <button
            type="button"
            onClick={handleSuperLike}
            className="mt-4 rounded bg-purple-600 px-4 py-2 text-white"
            >
            Super like +3
        </button>

      </div>

      {displayComments && <CommentSection comment={comment} />}
    </article>
  )
}

export default Post