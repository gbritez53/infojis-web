import type { NextPage } from 'next'
import { EmojiCard } from '../components/EmojiCard'
import { Layout } from '../components/layouts/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <EmojiCard
        emoji='🤪'
        name='beaming face with smiling eyes'
        code='1F601'
      />
    </Layout>

  )
}

export default Home
