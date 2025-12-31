import { FormFields } from '../FormFields'
import { FormTitle } from '../FormTitle'
import { Label } from '../Label'
import { Input } from '../Input'
import "./event-form-styles.css"
export function EventForm(){
  return (
    <form action="" className='event-form'>
      <FormTitle>
        Fill in to create an event:
      </FormTitle>
      <div className='form-field-container'>
      <FormFields>
        <Label htmlFor="eventName">
          Qual o nome do evento?
        </Label>
        <Input 
          type="text"
          name="eventName" 
          id="eventName" 
          placeholder='summer dev hits'/>
      </FormFields>
      <FormFields>
        <Label htmlFor="eventDate">
          Qual o nome do evento?
        </Label>
        <Input 
          type="date"
          name="eventDate" 
          id="eventDate" />
      </FormFields>
      <FormFields>
        <Label htmlFor="eventTheme">
          Event theme
        </Label>
      </FormFields>
      </div>
    </form>
  )
}