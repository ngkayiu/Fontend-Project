import TopNavBar from "../../components/TopNavBar.tsx";

export default function ErrorPage() {
  return (
    <>
      <TopNavBar/>
      <div
        className="d-flex justify-content-center"
        style={{height: "80vh"}}
      >
        <img src="/error404.jpg"/>
      </div>
    </>
  )
}