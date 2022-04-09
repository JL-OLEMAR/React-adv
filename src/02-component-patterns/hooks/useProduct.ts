import { useEffect, useRef, useState } from 'react'

import { onChangeArgs, Product } from '../interfaces/interfaces'

interface useProductProps {
  product: Product
  value?: number
  onChange?: (args: onChangeArgs) => void
}

export function useProduct({ product, value = 0, onChange }: useProductProps) {
  const [counter, setCounter] = useState<number>(value)
  const isControlled = useRef<boolean>(!!onChange) // onChange === false

  const increaseBy = (num: number) => {
    // isControlled.current = true
    if (isControlled.current && onChange) {
      return onChange({ count: num, product })
    }

    const newValue = Math.max(counter + num, 0)

    setCounter(newValue)
    onChange && onChange({ count: newValue, product })
  }

  useEffect(() => {
    setCounter(value)
  }, [value])

  return { counter, increaseBy }
}
