import Star from "./Star";

type Count = {
    count: number,
}

const Stars = ({ count = 0 }: Count) => {
    if ( count < 1 || count > 5 || typeof (count) !== "number") return;
    const countList: never[] = [];
    countList.length = count + 1;
    return (
        <ul className="card-body-stars u-clearfix">
            {countList.map((_el, i) => (
                <li key={i}>
                    <Star />
                </li> 
            ))}
        </ul>
    );
};

export default Stars;