import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [editingSkillId, setEditingSkillId] = useState(null);
  const [editedSkill, setEditedSkill] = useState("");

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await axios.get("http://localhost:3000/skills");
      setSkills(response.data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const formData = { skill: e.target.skill.value };

    try {
      await axios.post("http://localhost:3000/skills", formData);
      fetchSkills();
    } catch (error) {
      console.error("Error adding skill:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/skills/${id}`);
      fetchSkills(); // Refresh the list of skills after deletion
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  const handleEdit = async (id) => {
    try {
      await axios.put(`http://localhost:3000/skills/${id}`, {
        skill: editedSkill,
      });
      setEditingSkillId(null); // Exit edit mode
      fetchSkills(); // Refresh the list of skills after editing
    } catch (error) {
      console.error("Error editing skill:", error);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-600 p-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-black mb-4">Skills</h2>
          <form onSubmit={onHandleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="skill"
                className="block mb-2 text-sm font-medium text-black"
              >
                New Skill
              </label>
              <input
                type="text"
                id="skill"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Node.JS"
                required
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Add Skill
            </button>
          </form>
        </div>

        {skills.length > 0 && (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full max-w-4xl bg-white p-4">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Skill
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {skills.map((item) => (
                  <tr
                    className="odd:bg-white even:bg-gray-50 border-b"
                    key={item.id}
                  >
                    <td className="px-6 py-4">
                      {editingSkillId === item.id ? (
                        <input
                          type="text"
                          value={editedSkill}
                          onChange={(e) => setEditedSkill(e.target.value)}
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        />
                      ) : (
                        item.skill
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {editingSkillId === item.id ? (
                        <button
                          onClick={() => handleEdit(item.id)}
                          className="font-medium text-blue-600 hover:underline"
                        >
                          Save
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={() => {
                              setEditingSkillId(item.id);
                              setEditedSkill(item.skill);
                            }}
                            className="font-medium text-blue-600 hover:underline"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="ml-4 font-medium text-red-600 hover:underline"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Skills;
