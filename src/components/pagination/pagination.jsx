const Pagination2 = ({
    countPages,
    onChange
}) => {
    const onChangePage = (_event, page) => {
        onChange(page);
    }

    return(
        <Pagination2
            count = { countPages }
            color = "secondary"
            onChange = { onChangePage }
        />
    )
}

export default Pagination2;