import "./Card.scss"

export default props => {
  return (
    <div {...props} className={`card ${props.className || ""}`}>
      {props.label && <p className="card-label">{props.label}</p>}
      {props.labelFn && props.labelFn()}

      {props.children}
    </div>
  )
}
