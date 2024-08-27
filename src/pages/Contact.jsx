import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
export default function Contact() {

  const [contact, setContact] = useState({
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    address: ""
  })

  const fetchContact = async () => {
    try {
      const response = await axios.get("http://localhost:3000/contact");
      setContact(response.data);
    } catch (error) {
      console.error("Error fetching contact:", error);
    }
  };


  useEffect(() => {
    fetchContact();
  }, []);


  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      phone: e.target.phone.value,
      email: e.target.email.value,
      linkedin: e.target.linkedin.value,
      github: e.target.github.value,
      address: e.target.address.value
    };

    try {
      await axios.post("http://localhost:3000/contact", formData);
      fetchContact()
      alert("Contact information submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-gradient-to-br from-green-400 to-blue-600 p-6 py-12 px-8 max-w-screen-md bg-white dark:bg-gray-800 shadow-lg rounded-xl">
          <h2 className="mb-6 text-4xl font-bold text-center text-gray-900 dark:text-white">
            Contact Info
          </h2>
          <p className="mb-10 text-lg text-center text-gray-600 dark:text-gray-300">
            Fill in your contact details below.
          </p>
          <form onSubmit={onHandleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-800 dark:text-gray-300"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-3 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500"
                placeholder="944-155-1256"
                required
                onChange={(e) =>
                  setContact({ ...contact, phone: e.target.value })
                }
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-800 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="linkedin"
                className="block text-sm font-medium text-gray-800 dark:text-gray-300"
              >
                LinkedIn Link
              </label>
              <input
                type="text"
                id="linkedin"
                className="w-full p-3 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500"
                placeholder="LinkedIn Profile Link"
              />
            </div>
            <div>
              <label
                htmlFor="github"
                className="block text-sm font-medium text-gray-800 dark:text-gray-300"
              >
                GitHub Link
              </label>
              <input
                type="text"
                id="github"
                className="w-full p-3 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500"
                placeholder="GitHub Profile Link"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-800 dark:text-gray-300"
              >
                Address
              </label>
              <textarea
                id="address"
                rows="4"
                className="w-full p-3 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500"
                placeholder="Your address"
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Save Contact
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
