export default function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="px-3 text-lg py-2 font-Manrope bg-dim-gray">{children}</button>
  )
}
