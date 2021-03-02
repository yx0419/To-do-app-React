function FilterButton(props) {
    return (
        <button className="btn toggle-btn" aria-pressed={props.ariapressed}>
            <span>{props.btnName}</span>
        </button>
    );
}

export default FilterButton;
