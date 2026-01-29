import ImageText from "../image-text"

const ImageTextPage = () => {
    return(
        <div className="block-image-text-container">
            <div className="block-image-text">
                <div className="image">
                    <ImageText/>
                </div>
                <div className="text-content">
                    <div className="number-box animate-fade-in-scale">01</div> 
                    <div className="number-box">02</div>  
                    <div className="number-box">03</div>
                    <div className="number-box">04</div>
                    <div className="number-box">05</div>
                    <div className="number-box">06</div>
                    <div className="number-box">07</div>
                    <div className="number-box">08</div>
                </div>
            </div>
        </div>
    )
}

export default ImageTextPage;