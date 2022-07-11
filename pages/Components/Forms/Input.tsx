interface Props {
    id: string
    name: string
    type: string
    value: any
    placeholder: string
    setValue: Function
}

const Input = ({ id, name, type, value, placeholder, setValue }: Props) => {
    return (
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            required={true}
            placeholder={placeholder}
            className="w-full focus:outline-none bg-transparent my-2 text-white border border-gray-500 p-2 block text-lg"
            onChange={(e) => {
                setValue(e.target.value)
            }}
        />
    )
}


export default Input;