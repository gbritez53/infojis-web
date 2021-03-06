export interface EmojiCardProps {
    code: string,
    emoji: string,
    name: string,
    category: string,
    group: string,
    subgroup: string
}

export interface EmojiListProps {
    emojis: EmojiCardProps[]
}