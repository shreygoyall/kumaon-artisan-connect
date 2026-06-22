/**
 * Reusable Button Component
 * @param {string} variant - 'primary' | 'secondary' | 'outline'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {boolean} disabled - disabled state
 * @param {function} onClick - click handler
 * @param {node} children - button text/content
 */

function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  children,
}) {
  const baseStyles = "font-semibold rounded transition-all";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-gray-400",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-400",
    outline:
      "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 disabled:border-gray-400 disabled:text-gray-400",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
