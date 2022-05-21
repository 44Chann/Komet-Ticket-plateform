interface Props {
    text: string
    onclick: any
}

const Btn = ({ text, onclick }: Props) => {
    return (
        <>
            <button className="bg-purple-700 px-5 py-2 rounded-2xl" onClick={onclick}>{text}</button>
        </>
    )
}

export default Btn;