const Card = ({ title, children }) => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-8 shadow-lg">
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-white">
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}

export default Card
