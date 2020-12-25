interface FieldProps {
    label: string
}

export default function Field({label}:FieldProps){
    return (
        <div className="mb-5 flex flex-col">
            <label className="font-semibold mr-3">{label}</label>
            <input type="text" className="border border-gray-400 w-1/4" />
        </div>
    );
}