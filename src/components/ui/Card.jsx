const Card = ({ title, children }) => {
  return (
    <div className="bg-deep-800/80 border border-border-500 rounded-xl p-8 shadow-lg">
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-white font-heading">
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}

export default Card
