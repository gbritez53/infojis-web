import { FC } from "react"
import { EmojiCardProps } from "../interfaces"

export const EmojiCard: FC<EmojiCardProps> = ({ code, category, emoji, group, name, subgroup }) => {
    return (
        <>
            <span>{emoji}</span>
            <h3>{name}</h3>
        </>
    )
}
