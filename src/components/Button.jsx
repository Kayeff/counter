export default function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 font-Manrope bg-jet text-coral cursor-pointer hover:bg-dim-gray duration-300"
    >
      {children}
    </button>
  );
}
