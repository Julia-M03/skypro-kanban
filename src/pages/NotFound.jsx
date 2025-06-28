function NotFoundPage({ width = 1550, height = 630 }) {
    return (
        <div 
        className="loader" 
        style={{ width: width + "px", height: height + "px" }}
        >Страница не найдена</div>
    );
};

export default NotFoundPage;