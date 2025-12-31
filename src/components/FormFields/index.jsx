import "./form-fields.style.css"

export function FormFields({children}){
  return(
    <fieldset className="form-fields">
      {children}
    </fieldset>
  )
}