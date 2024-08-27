import Layout from "../components/Layout";

function Projects() {
  return (
    <Layout>
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold mb-4">Projects</h1>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
          <h2 className="text-xl font-semibold mb-2">McDonald&apos;s Client Project</h2>
          <p className="mb-4">
            I have experience working with McDonald&apos;s clients, where I developed scalable REST APIs using Node.js with a serverless framework. I connected these APIs to a MySQL database and deployed the service as Lambda functions.
          </p>
          <p className="mb-4">
            I ensured thorough test coverage using the Jest framework, achieving 100% code coverage. Additionally, I conducted QA testing by deploying services to the QA environment and manually testing the APIs using the Postman tool.
          </p>
          <p className="mb-4">
            Before implementing solutions, I worked on proof of concepts (POCs) and collaborated with product owners to discuss business solutions. I actively participated in agile ceremonies, including standups, sprint planning, and retrospectives, and maintained clear documentation for the features I worked on. I also tracked the tickets and progress using JIRA.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
