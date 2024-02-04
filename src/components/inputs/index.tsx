import TextInput from './text'
import NumberInput from './number'
import PasswordInput from './password'
import TextareaInput from './textarea'
import RadioInput from './radio'
import CheckboxInput from './checkbox'
import ToggleInput from './toggle'

const InputReslover = (props) => (field, fieldName) => {
  const inputMap = {
    text: TextInput,
    number: NumberInput,
    password: PasswordInput,
    textarea: TextareaInput,
    radio: RadioInput,
    checkbox: CheckboxInput,
    toggle: ToggleInput,
  }

  const inputComp = inputMap[field.type] || TextInput

  return inputComp(props)(field, fieldName)
}

export default InputReslover
