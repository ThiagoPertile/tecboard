import { FormFields } from '../FormFields'
import { FormTitle } from '../FormTitle'
import { Label } from '../Label'
import { Input } from '../Input'
import "./event-form-styles.css"
export function EventForm(){
  return (
    <form action="" className='event-form'>
      <FormTitle>
        dkjfklsajdfkj
      </FormTitle>
      <FormFields>
        <Label htmlFor="name">
          Qual o nome do evento?
        </Label>
        <Input 
          type="text"
          name="name" 
          id="name" 
          placeholder='summer dev hits'/>
      </FormFields>
    </form>
  )
}