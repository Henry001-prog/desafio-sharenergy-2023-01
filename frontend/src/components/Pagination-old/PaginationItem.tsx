import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
  isCurrent?: boolean
  pageNumber: number
  onPageChange: (page: number) => void
}

export function PaginationItem({
  isCurrent = false,
  pageNumber,
  onPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        width="10"
        height="9"
        backgroundColor="cyan.400"
        shadow="xl"
        _hover={{ backgroundColor: 'cyan.300' }}
      >
        {pageNumber}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      width="4"
      backgroundColor="white"
      color="gray.400"
      _hover={{ backgroundColor: 'transparent' }}
      onClick={() => onPageChange(pageNumber)}
      data-testid="change-page"
    >
      {pageNumber}
    </Button>
  )
}
