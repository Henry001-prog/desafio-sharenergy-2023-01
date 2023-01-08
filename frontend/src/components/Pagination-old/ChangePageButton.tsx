import { ReactElement } from 'react'

import { Button, IconButton, IconButtonProps } from '@chakra-ui/react'

interface ChangePageButtonProps extends IconButtonProps {
//   icon: ReactElement
}

export function ChangePageButton({ ...rest }: ChangePageButtonProps) {
  return (
    <Button
    //   icon={icon}
      size="sm"
      fontSize="14"
      borderRadius="50%"
      backgroundColor="white"
      shadow="2xl"
      {...rest}
    />
  )
}
