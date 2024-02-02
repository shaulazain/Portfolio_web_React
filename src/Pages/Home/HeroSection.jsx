    export default function HeroSection() {
        return(
            <section id="herosection" className="hero--section">
                <div className="hero--section--content--box">
                    <div className="hero--section--content">
                        <p className="section--title">Hey I Am Shahzaib</p>
                        <h1 className="hero--section--title">
                            <span className="hero--section-title--color">Front End</span>{""}
                            <br />
                            Developer
                        </h1>
                        <p className="hero--section-description">
                            lorem ispum dulit confiq , set amit consterectur
                            <br />adipisicing elit. Dolore, voluptas blanditiis. <br /> Possimus, tenetur doloremque.
                        </p>
                       
                    </div>

                    <button className="btn btn-primary">Get In Touch</button>
                </div>
                <div className="hero--section--img">
                    <img src="./images/hero_img.png" alt="" />
                </div>
            </section>
        )
    }