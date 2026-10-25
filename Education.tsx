interface Props {
  place: string
  info: string
}

export default function Education({ place, info }: Props) {
  return (
    <div>
      <h2>Образование</h2>
      <p>{place}</p>
      <p>{info}</p>
    </div>
  )
}
