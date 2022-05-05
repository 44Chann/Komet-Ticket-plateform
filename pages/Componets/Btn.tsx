interface Props {
    text: string
}

const Btn = ({ text }: Props) => {
    return (
        <>
            <button className="bg-purple-700 px-5 py-2 rounded-3xl">{text}</button>
        </>
    )
}

export default Btn;