import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="flex min-h-screen flex-col gap-4 p-4">
      <Header />

      <div className="flex flex-1 gap-4">
        <Sidebar />
        <Main />
      </div>

      <Footer />
    </div>
  )
}

export default App