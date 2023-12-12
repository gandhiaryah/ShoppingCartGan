import React from 'react'
import '../styles/employees.css'

export default function Home() {
  return (
    <>
    <div className="container">
    <div className="row">
    <div className="col-sm-12" data-bs-theme="dark">
        <div className="card bg-dark">
            <div className="card-body justify-content-center">
                <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./images/mouse.jpg" alt="..."
                                className="img-center" />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/headset.jpg" alt="..." 
                                className="img-center" />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/keyboard.jpg" alt="..."
                                className="img-center" />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/pendrive.jpg" alt="..."
                                className="img-center" />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/speaker.jpg" alt="..." 
                                className="img-center" />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/hdd.jpg" alt="..." className="img-center" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="row">
    <div className="col-sm-4">
        <div className="card bg-dark border-transparent text-white">
            <div className="card-body">
                <h5 className="card-title">Logitech MK270 Wireless Combo - Keyboard and mouse set - wireless - 2.4
                    GHz -
                    English</h5>
                <p className="card-text">MK270 Wireless Combo brings together the convenience and comfort of a
                    full-sized keyboard with a sculpted, compact mouse. With media keys, a number pad and
                    precise
                    cursor control to make your work a whole lot smoother. Plus, the lag-free wireless makes
                    setup
                    easy and saves space on your desk. No wonder this is the world best-selling combo!</p>
            </div>
        </div>
    </div>
    <div className="col-sm-4">
        <div className="card bg-dark border-transparent text-white">
            <div className="card-body">
                <h5 className="card-title">Logitech Wireless Headset Dual H820e - Headset - on-ear - DECT -
                    wireless</h5>
                <p className="card-text">The Logitech Wireless Headset Dual H820e is a wireless double-ear
                    headset
                    that delivers enterprise-quality audio with the human-centric design and features
                    Logitech is
                    known for. Interruptions are minimized thanks to a clever in-call LED light and muting
                    is
                    intuitive thanks to the on-boom mute button and LED mute indictor light.</p>
            </div>
        </div>
    </div>
    <div className="col-sm-4">
            <div className="card bg-dark border-transparent text-white">
                <div className="card-body">
                    <h5 className="card-title">Verbatim Wireless Mini Bluetooth Speaker - Speaker - for portable use
                        -
                        Bluetooth - 3 Watt - blue</h5>
                    <p className="card-text">Put powerful sound in your pocket with the Wireless Mini
                        Bluetooth
                        Speaker. Featuring TWS Stereo Sound, this speaker can also be paired with a second
                        speaker
                        to provide even more sound. It is designed for more than just music and is
                        compatible
                        with
                        most Bluetooth-enabled devices with an operational range of up to 33'. The Mini
                        Bluetooth
                        Speaker features a built-in microphone for hands-free calling at the touch of a
                        button.
                        Equipped with a rechargeable battery, this compact speaker provides up to 4 hours of
                        continuous playtime on a single charge. The convenient on/off button allows you to
                        conserve
                        battery life when not in use. Speaker also includes a convenient carrying strap and
                        charging
                        cable.</p>
                </div>
        </div>
    </div>
</div>
</div>
</>
  )
}
