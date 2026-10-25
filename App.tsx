import Header from './components/Header'
import Contacts from './components/Contacts'
import Education from './components/Education'
import type { Person } from './types'

export default function App() {
  const person: Person = {
    fullName: 'Исабеков Эльнар Эльдияровичь',
    role: 'Программист / разработчик игр',
    email: 'elnarisabekov91@gmail.com',
    phone: '0223072008',
    place: 'КГИПИ',
    info: 'Студент, направление: разработка игр.',
  }

  return (
    <div className="container">
      <Header fullName={person.fullName} role={person.role} />
      <Contacts email={person.email} phone={person.phone} />
      <Education place={person.place} info={person.info} />
    </div>
  )
}
