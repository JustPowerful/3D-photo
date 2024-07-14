import "./App.css";
import Photo from "./components/Photo";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-white">
          Hover over the photo 🖼️
        </h1>
        <p className="text-sm text-white">
          Hover over the photo to see the magic happen.
        </p>
      </div>
      <Photo src="/photo.jpg" width={200} />
    </div>
  );
}

export default App;
