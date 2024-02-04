import TextInput from './text'
import NumberInput from './number'
import PasswordInput from './password'
import TextareaInput from './textarea'

const InputReslover = (props) => (field, fieldName) => {
  const inputMap = {
    text: TextInput,
    number: NumberInput,
    password: PasswordInput,
    textarea: TextareaInput,
  }

  const inputComp = inputMap[field.type] || TextInput

  return inputComp(props)(field, fieldName)
}

export default InputReslover
