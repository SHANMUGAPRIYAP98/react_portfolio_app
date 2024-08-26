import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

function Home() {
  const [details, setDetails] = useState({});
  const [image, setImage] = useState("");

  useEffect(() => {
    try {
      axios.get("http://localhost:3000/userDetails").then((response) => {
        setDetails(response.data);
      });
      axios.get("http://localhost:3000/images").then((result) => {
        setImage(result.data.asset);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">My Portfolio</h1>
          <p className="text-lg text-gray-200">Welcome to my personal space!</p>
        </div>

        <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden p-6 max-w-xl w-full transition-transform transform hover:scale-105 duration-300">
          <img
            src={image}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-lg mr-6 transition-transform transform hover:rotate-6 duration-300"
          />
          <div className="flex flex-col justify-center">
            <strong className="text-2xl font-semibold text-gray-800 mb-2 hover:text-indigo-600 transition-colors duration-300">
              I&apos;m {details.name}
            </strong>
            <span className="text-gray-600 text-lg">{details.designation}</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
