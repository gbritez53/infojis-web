import { Dispatch, FC, SetStateAction } from "react"
import { emojisData } from "../data/emojis"
import { EmojiCardProps } from "../interfaces"

const styles = {
    search: `w-full max-w-xl p-3 rounded-lg border focus:outline-none shadow-md focus:border-cyan-400 focus:ring-1 transition duration-300 ease-in-out mb-8`
}

interface Props {
    setFilteredEmoji: Dispatch<SetStateAction<EmojiCardProps[]>>
}


export const Search: FC<Props> = ({ setFilteredEmoji }) => {

    const handleFilterBySearch = (search: string) => {
        if (search.trim().length > 0) {
            setFilteredEmoji(
                emojisData.filter((emoji) => {
                    return emoji.name.toUpperCase().includes(search.toUpperCase().trim())
                })
            )
        } else {
            setFilteredEmoji(emojisData.slice(0, 100))
        }
    }

    return (
        <div className="flex justify-center">
            <input
                className={styles.search}
                id="name"
                type="text"
                placeholder="Search for an emoji"
                onChange={e => handleFilterBySearch(e.target.value)}
            />
        </div>
    )
}
