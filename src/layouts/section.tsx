import React from 'react'

type Position = 'first' | 'middle' | 'last'

interface Props {
  isContainer?: boolean
  isFluid?: boolean
  isTextCenter?: boolean
  bg?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  pos?: Position
  children: React.ReactNode
}

const Section: React.FC<Props> = ({
  isContainer = true,
  isFluid = false,
  isTextCenter = false,
  bg = undefined,
  pos = 'middle',
  children
}: Props) => {
  const matchPosition = (pos: Position): string => {
    switch (pos) {
      case 'first':
        return 'pt-0 pb-3'
      case 'middle':
        return 'py-3'
      case 'last':
        return 'pt-3 pb-0'
    }
  }

  return (
    <section
      className={[
        `${
          isContainer ? 'container' : ''
        }${
          isContainer && isFluid ? '-fluid' : ''
        }`,
        `${
          matchPosition(pos)
        }`,
        `${
          !isFluid ? 'px-3' : ''
        }`,
        `${
          isTextCenter ? 'text-center' : ''
        }`,
        `${
          bg !== undefined ? `bg-${bg}` : ''
        }`
      ].join(' ')}
    >
      {children}
    </section>
  )
}

export default Section
