type LetterProps = {
  letter: string
  idx?: number
}

export const Letter = (props: LetterProps) => {
  const { letter } = props

  return <div>{letter}</div>
}
