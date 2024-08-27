import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-300 text-white p-4">
      <div className="flex flex-col items-center bg-white shadow-xl rounded-lg overflow-hidden max-w-xl w-full">
        <div className="p-6 text-gray-900">
          {children}
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
