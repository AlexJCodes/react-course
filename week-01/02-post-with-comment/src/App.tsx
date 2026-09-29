import profilePicture from "./assets/profile-picture.jpg"
import Post from "./components/Post"

function App() {
  const post = {
    headline: "First week with React: less magic, more logic",
    content:
      "Today I finally started to understand how React components, props and state fit together. At first it felt like a lot of new syntax, but once I started thinking of components as functions that return UI, things became much clearer. Now the goal is to keep building small projects until the component tree starts feeling natural.",
    date: new Date(),
    author: {
      fullname: "Alex Johansson",
      image: profilePicture,
    },
  }

  const comment = {
    content:
      "Nice progress! The moment props and state start making sense, React becomes a lot more fun.",
    date: new Date(),
    author: {
      fullname: "Jane Doe",
      image: profilePicture,
    },
  }

  return (
    <main className="p-4">
      <Post post={post} comment={comment} />
    </main>
  )
}

export default App