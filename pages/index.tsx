import type { NextPage } from 'next'
import { Layout } from '../components/layouts/Layout'
import { List } from '../components/EmojiList'
import { emojisData } from '../data/emojis'

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className='text-2xl md:text-5xl font-bold text-gray-700 tracking-wide text-center py-8' >Welcome to Infoji!</h1>
      <List emojis={emojisData.slice(0, 100)} />
    </Layout>

  )
}

export default Home
