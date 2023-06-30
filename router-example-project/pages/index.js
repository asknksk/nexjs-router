import { getFeaturedEvents } from "@/dummy-data";

const HomePage = () => {
    const feturedEvents = getFeaturedEvents();
    console.log(feturedEvents)
  return (
    <div>
      <h1>The Home Page</h1>
    </div>
  );
};

export default HomePage;
