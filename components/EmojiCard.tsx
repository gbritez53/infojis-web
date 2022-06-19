import { FC } from "react"
import { EmojiCardProps } from "../interfaces"

const styles = {
    cardWrapper: `bg-[#F7F3F6] p-2 rounded-xl shadow-md flex flex-col items-center`,
    cardEmoji: `text-4xl md:text-5xl mb-2`,
    cardText: `font-bold capitalize text-gray-700`,
    cardBtn: `text-blue-500 hover:text-blue-600 text-sm pt-3`
}

export const EmojiCard: FC<EmojiCardProps> = ({ code, category, emoji, group, name, subgroup }) => {
    return (
        <>
            <div className={styles.cardWrapper}>
                <span className={styles.cardEmoji} role={'img'} area-label={emoji} >{emoji}</span>
                <h3 className={styles.cardText} >{name}</h3>
                <button className={styles.cardBtn}>
                    More Info
                </button>
            </div>
        </>
    )
}
