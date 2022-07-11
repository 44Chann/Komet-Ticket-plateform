interface Props {
    title: String
    value: String
}

const DetailsBadge = ({ title, value }: Props) => {
    return (
        <>
            <div className="bg-purple-600 min-w-[200px] p-3 mb-5 flex flex-col items-center justify-center mx-4">
                <p className="font-bold">{value}</p>
                <p className="text-2sxl">{title}</p>
            </div>
        </>
    )
}

export default DetailsBadge;