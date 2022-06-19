import { FC } from "react"
import { EmojiCard } from "./EmojiCard"
import { EmojiListProps } from "../interfaces"

export const List: FC<EmojiListProps> = ({ emojis }) => {
    return (
        <>
            <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-4">
                {emojis.map((emoji, index) => (
                    <EmojiCard
                        key={index}
                        {...emoji}
                    />
                ))}
            </div>

        </>
    )
}
