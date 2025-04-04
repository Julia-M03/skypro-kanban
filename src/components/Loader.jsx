export function Loader({ width = 1550, height = 630 }) {
    return (
        <div 
        className="loader" 
        style={{ width: width + "px", height: height + "px" }}
        >Данные загружаются</div>
    );
};
    