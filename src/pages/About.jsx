import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-lg text-gray-200">
            I am a Node.js Backend developer with three years of experience in the IT industry. I have hands-on experience in JavaScript, TypeScript, Node.js, AWS, SQL, and React.js. I predominantly work in backend technology, providing business solutions and satisfying customers. I am always eager to upscale my skills in the latest technology to be a competitive developer in the software industry.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
