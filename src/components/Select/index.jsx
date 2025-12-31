import "./select.styles.css"

export function Select(props){
    return(
        <select {...props} 
            name="eventTheme" 
            id="eventTheme" 
            className="select"
            >
          <option value="">Select a option</option>
        </select>
    )
}