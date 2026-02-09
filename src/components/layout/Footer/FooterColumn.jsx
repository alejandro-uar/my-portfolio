const FooterColumn = ({ title, children }) => {
  return (
    <div className="space-y-3">
      {title && (
        <h4 className="text-white font-semibold text-sm">
          {title}
        </h4>
      )}
      {children}
    </div>
  )
}

export default FooterColumn
