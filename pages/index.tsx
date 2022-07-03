import type { NextPage } from 'next'
import { Layout } from '../components/layouts/Layout'
import { EmojiList } from '../components/EmojiList'
import { Search } from '../components/Search'
import { Filters } from '../components/Filters'
import { EmojiCardProps } from '../interfaces'
import { emojisData } from '../data/emojis'
import { useState } from 'react'

const styles = {
  title: `text-2xl md:text-5xl font-bold text-gray-700 tracking-wide text-center py-8`,
  search: `w-full max-w-xl p-3 rounded-lg border focus:outline-none shadow-md focus:border-cyan-400 focus:ring-1 transition duration-300 ease-in-out mb-8`
}

const Home: NextPage = () => {
  const [filteredEmoji, setFilteredEmoji] = useState<EmojiCardProps[]>(emojisData.slice(0, 100))

  return (
    <Layout>
      <h1 className={styles.title} >Welcome to Infoji!</h1>
      <Search setFilteredEmoji={setFilteredEmoji} />
      <Filters setFilteredEmoji={setFilteredEmoji} />
      <EmojiList emojis={filteredEmoji.slice(0, 100)} />
    </Layout>
  )
}

export default Home
