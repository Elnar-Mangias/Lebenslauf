interface Props {
  fullName: string
  role: string
}

export default function Header({ fullName, role }: Props) {
  return (
    <div>
      <h1>{fullName}</h1>
      <p className="role">{role}</p>
    </div>
  )
}
