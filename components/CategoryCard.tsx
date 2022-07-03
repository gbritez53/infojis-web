import { FC } from "react"

const styles = {
    wrapper: `flex items-baseline justify-start pl-7 rounded-md bg-gray-50 py-2 hover:bg-gray-100`,
    emoji: `text-xl mr-4`
}

interface CategoryProps {
    emoji: string
    group: string
    handleFilter: (group: string) => void
}

export const CategoryCard: FC<CategoryProps> = ({ emoji, group, handleFilter }) => {
    return (
        <>
            <button className={styles.wrapper} onClick={() => handleFilter(group)}>
                <span className={styles.emoji} role={'img'} aria-label={emoji} >{emoji}</span>
                <p>{group}</p>
            </button>
        </>
    )
}
