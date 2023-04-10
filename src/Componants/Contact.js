import React from 'react'

const Contact = () => {
    return (
        <div className='contact' id="contact">
            <h2>Contact Me...</h2>
            <div className="line">
                <div className="u-line"></div>
            </div>
            <div className="contactme">
                <div className="c-left">
                    <div className="email">
                        <i class="fa-solid fa-envelope"></i>
                        <p>Email</p>
                        <p>ashishsuthar9657@gmail.com</p>
                        <a href="mailto: ashishsuthar9657@gmail.com" target="_blank">
                            Send a Message
                        </a>
                    </div>
                    <div className="whatsapp">
                        <i class="fa-brands fa-whatsapp"></i>
                        <p>Whatsapp</p>
                        <p>+917014463425</p>
                        <a href="https://wa.me/917014463425?text=Hi%2C%20How%20can%20i%20help%20you">
                            Send a message
                        </a>
                    </div>
                </div>
                <div className="c-right">
                    <form>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Full Name"
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                        />
                        <textarea
                            name="massage"
                            id="text-massage"
                            cols="30"
                            rows="10"
                            placeholder="Your Massage"
                        ></textarea>
                        <input type="submit" value="Send Massage" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
