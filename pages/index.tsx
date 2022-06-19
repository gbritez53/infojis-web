import type { NextPage } from 'next'
import { EmojiCard } from '../components/EmojiCard'
import { Layout } from '../components/layouts/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <EmojiCard
        code='1F600'
        emoji='😀'
        name='grinning face'
        category={'Smileys & Emotion (face-smiling)'}
        group={'Smileys & Emotion'}
        subgroup='face-smiling'
      />
    </Layout>

  )
}

export default Home
