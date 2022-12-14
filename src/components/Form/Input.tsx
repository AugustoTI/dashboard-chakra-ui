import {
  FormControl,
  FormLabel,
  InputProps as ChakraInputProps,
  Input as ChakraInput,
  FormErrorMessage,
} from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  name: string
  error?: FieldError
  label?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, name, error, ...rest },
  ref,
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: 'gray.900',
        }}
        ref={ref}
        {...rest}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
