/**
 * Reusable Input Component
 * @param {string} label - input label
 * @param {string} type - input type (text, email, password, etc)
 * @param {string} placeholder - placeholder text
 * @param {string} value - input value
 * @param {function} onChange - change handler
 * @param {string} error - error message to display
 */

function Input({ label, type = "text", placeholder, value, onChange, error }) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default Input;
