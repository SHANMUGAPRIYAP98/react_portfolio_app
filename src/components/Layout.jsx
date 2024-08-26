import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden max-w-xl w-full">
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };