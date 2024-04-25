import "./Hero.css";

export const Hero = () => {
    return (
        <>
            <div className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Welcome to </h1><h1 className="head">Medico</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iusto fugit possimus repellendus fuga ea quaerat, quasi itaque nulla odit, tempora quidem quia sapiente doloribus voluptas placeat odio suscipit laborum debitis animi aperiam necessitatibus libero magni voluptates! Voluptates, officia natus quaerat perferendis eaque autem deserunt cupiditate, harum, enim incidunt doloribus iure eligendi ea fugiat assumenda. Similique ut laboriosam qui tempora mollitia eligendi consequuntur sed autem, dolorum vero aspernatur assumenda, iste sint magni pariatur cum officia?</p>
                        <button className="get-started-btn">Get Started</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="Hero.jpg" alt="Hero Image" />
                </div>
            </div>
        </>
    )
}
