import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/header";
import axios from "axios";
import About from "./component/about";
import Skill from "./component/skill";
import Project from "./component/project";
import Contact from "./component/contact";
import Footer from "./component/footer";


function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        setApiData(response.data?.user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <Header />
      <About apiData={apiData} />
      <Skill apiData={apiData}/>
      <Project apiData={apiData}/>
      <Contact apiData={apiData}/>
      <Footer apiData={apiData}/>
    </div>
  );
}

export default App;
