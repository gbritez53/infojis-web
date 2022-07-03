import { FC, useState, Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { EmojiCardProps } from "../interfaces"

const styles = {
    cardWrapper: `bg-[#F7F3F6] p-2 rounded-xl shadow-md flex flex-col items-center`,
    cardEmoji: `text-3xl md:text-5xl mb-2`,
    cardText: `font-bold capitalize text-gray-700`,
    cardBtn: `text-blue-500 hover:text-blue-600 text-sm pt-3`
}

export const EmojiCard: FC<EmojiCardProps> = ({ code, category, emoji, group, name, subgroup }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className={styles.cardWrapper}>
                <span className={styles.cardEmoji} role={'img'} area-label={emoji} >{emoji}</span>
                <h3 className={styles.cardText} >{name}</h3>
                <button onClick={() => setIsOpen(true)} className={styles.cardBtn}>
                    More Info
                </button>
                <Transition appear show={isOpen} as={Fragment} >
                    <Dialog as='div' className='fixed inset-0 z-10 overflow-y-auto' onClose={() => setIsOpen(false)} >
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg text-center font-medium leading-6 text-gray-900"
                                    >
                                        {name.toUpperCase()}
                                    </Dialog.Title>
                                    <div className="flex justify-center mt-2">
                                        <span className="text-center text-8xl md:text-9xl mb-4" role={'img'} aria-label={emoji}>
                                            {emoji}
                                        </span>
                                    </div>
                                    <p className="text-md text-gray-500 mb-2">
                                        <span className="font-bold">Category:</span>{' '}{category}
                                    </p>
                                    <p className="text-md text-gray-500 mb-2">
                                        <span className="font-bold">Code:</span>{' '}{code}
                                    </p>
                                    <p className="text-md text-gray-500 mb-2">
                                        <span className="font-bold">Group:</span>{' '}{group}
                                    </p>
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </>
    )
}
