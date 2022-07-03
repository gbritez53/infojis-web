import { Dispatch, FC, SetStateAction } from "react"
import { EmojiCardProps } from "../interfaces"
import { emojisData } from "../data/emojis"
import { CategoryCard } from "./CategoryCard"

const filters = [
    {
        emoji: '😄',
        group: 'Smileys & Emotion'
    },
    {
        emoji: '👦🏻',
        group: 'People & Body'
    },
    {
        emoji: '🐶',
        group: 'Animals & Nature'
    },
    {
        emoji: '🍉',
        group: 'Food & Drink'
    },
    {
        emoji: '⚽',
        group: 'Activities'
    },
    {
        emoji: '🌍',
        group: 'Travel & Places'
    },
    {
        emoji: '💡',
        group: 'Objects'
    },
    {
        emoji: '⚛',
        group: 'Symbols'
    },
    {
        emoji: '🚩',
        group: 'Flags'
    }
]

interface Props {
    setFilteredEmoji: Dispatch<SetStateAction<EmojiCardProps[]>>
}

console.log(filters);


export const Filters: FC<Props> = ({ setFilteredEmoji }) => {
    const handleFilterByCategory = (category: string) => {
        setFilteredEmoji(
            emojisData.filter((emoji) => {
                return emoji.group.toUpperCase().includes(category.toUpperCase().trim())
            })
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {filters.map((data, i) => {
                return <CategoryCard emoji={data.emoji} group={data.group} handleFilter={handleFilterByCategory} key={i} />
            })}
        </div>
    )
}
