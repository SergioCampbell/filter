
export default function FilterComponent({onChange, filterText, submit}: any) {
    const {filtering} = filterText
    return (
        <form onSubmit={e => submit(e)}>
        <input onChange={e => onChange(e)}
        value={filtering}
        placeholder='Search a heigth'
        />
        </form>
    )
}
