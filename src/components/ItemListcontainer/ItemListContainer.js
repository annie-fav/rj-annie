

export const ItemListContainer = (props) => {

    const { greeting } = props;

    return (
        <section>
            <p className="pWelcome">{ greeting }</p>
        </section>
    )
}