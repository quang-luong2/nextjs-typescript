import type { GetStaticProps, NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { User } from '../interface/types'

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const result = await res.json()

  return {
    props: {
      users: result,
    },
  }
}

const Home: NextPage<{ users: User[] }> = ({ users }) => {
  const router = useRouter()

  const handleClickBack = () => {
    router.push('/contact')
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {users.map((user) => {
          return (
            <ul key={user.id}>
              <li>
                <Link href={`/user/${user.id}`}>
                  <a>{user.name}</a>
                </Link>
              </li>
            </ul>
          )
        })}
        <button onClick={handleClickBack}>Go to Contact</button>
      </main>
    </div>
  )
}

export default Home
