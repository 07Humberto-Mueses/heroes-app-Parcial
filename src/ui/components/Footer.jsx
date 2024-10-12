import React from 'react'

export const Footer = () => {
    return (
        <>
            <footer className="bg-light text-center text-lg-start">
                <div>
                    <section className="botonesFooter">
                        <img
                            className="redes"
                            src="/public/Instagram.svg"
                        >
                        </img>
                        <img
                            className="redes"
                            src="/public/facebook.svg"
                        >
                        </img>
                        <img
                            className="redes"
                            src="/public/GitHub.svg"
                        >
                        </img>
                    </section>
                </div>

                <div className="text-center p-3">
                    © 2024 Copyright:
                    <a className="text-dark fw-bold" >
                        Humberto Mueses
                    </a>
                </div>
            </footer>

        </>
    )
}
