interface Props {
  email: string
  phone: string
}

export default function Contacts({ email, phone }: Props) {
  return (
    <div>
      <h2>Контакты</h2>
      <p>Email: {email}</p>
      <p>Телефон: {phone}</p>
    </div>
  )
}
